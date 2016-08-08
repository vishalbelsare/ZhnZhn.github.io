'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WithToolbar = {
  _createType2WithToolbar: function _createType2WithToolbar() {
    var toolbarButtons = [];

    if (typeof this.props.onClickInfo === 'function') {
      toolbarButtons.push({ caption: 'I', onClick: this._clickInfoWithToolbar });
    }
    toolbarButtons.push({ caption: 'D', onClick: this._clickDateWithToolbar });

    return toolbarButtons;
  },
  _clickInfoWithToolbar: function _clickInfoWithToolbar() {
    var _props = this.props;
    var descrUrl = _props.descrUrl;
    var onClickInfo = _props.onClickInfo;

    onClickInfo({ descrUrl: descrUrl });
  },
  _clickDateWithToolbar: function _clickDateWithToolbar() {
    this.setState({ isShowDate: !this.state.isShowDate });
  }
};

exports.default = WithToolbar;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\dialogs\WithToolbar.js.map