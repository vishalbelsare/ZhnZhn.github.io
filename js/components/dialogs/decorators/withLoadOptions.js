"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Msg = _interopRequireDefault(require("../../../constants/Msg"));

var _ComponentActions = _interopRequireDefault(require("../../../flux/actions/ComponentActions"));

var _crOptions2 = _interopRequireDefault(require("./crOptions"));

var NETWORK_ERROR = _Msg["default"].Alert.NETWORK_ERROR;

var _showMsgErr = function _showMsgErr(alertCaption, alertDescr) {
  _ComponentActions["default"].showAlert({
    alertCaption: alertCaption,
    alertDescr: alertDescr
  });
};

var _loadOptions = function _loadOptions(option) {
  var target = option.target,
      toStateProp = option.toStateProp,
      uri = option.uri,
      optionJsonProp = option.optionJsonProp,
      fnOnCompleted = option.fnOnCompleted,
      fnOnFailed = option.fnOnFailed,
      _option$retryServer = option.retryServer,
      retryServer = _option$retryServer === void 0 ? 3 : _option$retryServer,
      _option$retryNetwork = option.retryNetwork,
      retryNetwork = _option$retryNetwork === void 0 ? 1 : _option$retryNetwork;
  fetch(uri).then(function (response) {
    var status = response.status,
        statusText = response.statusText;

    if (status >= 200 && status < 400) {
      return response.json();
    } else if (status >= 400 && status < 500) {
      _showMsgErr('Client Error:', status + ' ' + statusText);

      fnOnFailed(target);
      return null;
    } else if (status >= 500 && status < 600) {
      if (retryServer !== 0) {
        option.retryServer = retryServer - 1;
        target._loadOptionsID = setTimeout(_loadOptions(option), 3E3);
      } else {
        _showMsgErr('Server Error:', status + ' ' + statusText);

        fnOnFailed(target);
      }

      return null;
    }
  }).then(function (json) {
    if (json) {
      fnOnCompleted(target, {
        toStateProp: toStateProp,
        json: json,
        optionJsonProp: optionJsonProp
      });
    }
  })["catch"](function (error) {
    if (retryNetwork === 0) {
      fnOnFailed(target, error);
    } else {
      option.retryNetwork = retryNetwork - 1;
      target._loadOptionsID = setTimeout(_loadOptions(option), 2E3);
    }
  });
};

var _onLoadOptionsCompleted = function _onLoadOptionsCompleted(target, _ref) {
  var toStateProp = _ref.toStateProp,
      json = _ref.json,
      optionJsonProp = _ref.optionJsonProp;

  if (toStateProp && optionJsonProp) {
    if (!json.dfColumns) {
      var _target$setState;

      var _crOptions = (0, _crOptions2["default"])(json, optionJsonProp),
          items = _crOptions.items,
          propCaption = _crOptions.propCaption;

      target.setState((_target$setState = {
        isLoading: false,
        propCaption: propCaption
      }, _target$setState[toStateProp] = items, _target$setState));
    } else {
      var _target$setState2;

      target._isDfColumns = true;
      target.setState((_target$setState2 = {
        isLoading: false
      }, _target$setState2[toStateProp] = json[optionJsonProp], _target$setState2.twoOptions = json.dfColumns, _target$setState2));
    }
  }
};

var _onLoadOptionsFailed = function _onLoadOptionsFailed(target, error) {
  target.setState({
    isLoading: false,
    isLoadingFailed: true
  });

  if (error instanceof TypeError) {
    _showMsgErr(NETWORK_ERROR.caption, NETWORK_ERROR.descr);
  }
};

var _handlerWithLoadOptions = function _handlerWithLoadOptions(toStateProp, optionURI, optionJsonProp) {
  var _uri = optionURI || this.props.optionURI;

  if (_uri) {
    var _jsonProp = optionJsonProp || this.props.optionsJsonProp;

    this.setState({
      isLoading: true,
      isLoadingFailed: false
    }, _loadOptions({
      target: this,
      toStateProp: toStateProp,
      uri: _uri,
      optionJsonProp: _jsonProp,
      fnOnCompleted: _onLoadOptionsCompleted,
      fnOnFailed: _onLoadOptionsFailed
    }));
  }
};

var _unmountWithLoadOptions = function _unmountWithLoadOptions() {
  if (this._loadOptionsID) {
    clearTimeout(this._loadOptionsID);
  }
};

var withLoadOptions = function withLoadOptions(target) {
  Object.assign(target.prototype, {
    _handlerWithLoadOptions: _handlerWithLoadOptions,
    _unmountWithLoadOptions: _unmountWithLoadOptions
  });
};

var _default = withLoadOptions;
exports["default"] = _default;
//# sourceMappingURL=withLoadOptions.js.map