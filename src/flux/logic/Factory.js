
import React from 'react';

import RouterDialog from './RouterDialog';
import RouterLoadFn from './RouterLoadFn';
import RouterFnValue from './RouterFnValue';

import fBrowser from './fBrowser'

import Msg from '../../constants/Msg';
import {  LoadType } from '../../constants/Type';

import CA from '../actions/ComponentActions';
import CHA from '../actions/ChartActions';

import DateUtils from '../../utils/DateUtils';
import ChartStore from '../stores/ChartStore';

const {
  getFromDate,
  getToDate,
  isYmd,
  isYmdOrEmpty
} = DateUtils;

const _isArr = Array.isArray
, initFromDate = getFromDate(2)
, initToDate = getToDate();

const _crFnValue = (valueFn, valueFnPrefix) => {
  return valueFn
    ? valueFnPrefix
       ? RouterFnValue[valueFn].bind(null, valueFnPrefix)
       : RouterFnValue[valueFn]
    : void 0;
};

const _crDateProps = ({ isFd, nInitFromDate }) => {
  const _props = isFd
    ? {
        errNotYmdOrEmpty: Msg.YMD_DATE_OR_EMPTY,
        isYmdOrEmpty
      }
    : void 0;
  return {
    initFromDate: nInitFromDate
      ? getFromDate(nInitFromDate)
      : initFromDate,
    initToDate,
    onTestDate: isYmd,
    ..._props
  }
};

const _onError = (alertDescr, alertCaption='Request Error') => {
  CA.showAlert({ alertDescr, alertCaption })
};

const _crClickAbout = ({ rootUri, descr, descrUrl }) => {
  const _descrUrl = descr && rootUri
    ? `${rootUri}/${descr}.html`
    : descrUrl;
  return _descrUrl
    ? CA.showDescription.bind(null, { descrUrl: _descrUrl })
    : void 0;
};

const D = {
  SELECT_N: 'DialogSelectN',
  STAT_N: 'DialogStatN'
};
const _getDialogType = (dialogType, { selectProps, dims }) =>
  dialogType || ( _isArr(selectProps) ? D.SELECT_N : void 0)
  || (_isArr(dims) ? D.STAT_N : void 0);

const _crDialogComp = function (browserType, dialogConf){
   const {
           type:itemKey,
           dialogProps={}, dialogType,
           dialogCaption, menuTitle
         } = dialogConf
       , {
           valueFn, valueFnPrefix,
           loadFnType,
           loadId,
           isProxy,
           isGetKey
         } = dialogProps
       , _dialogType = _getDialogType(dialogType, dialogProps)
       , onClickInfo = _crClickAbout(dialogProps)
       , loadFn = RouterLoadFn.getFn(loadFnType, _dialogType)
       , proxy = isProxy
            ? ChartStore.getProxy()
            : void 0
       , getKey = isGetKey && ChartStore.getKey
       , onError = isGetKey && _onError

       , onLoad = CHA.loadStock
          .bind(null, {
             chartType: itemKey,
             browserType, dialogConf
          })
       , onShow = CHA.showChart
           .bind(null, itemKey, browserType, dialogConf);

       if (!loadId){
         dialogProps.loadId = LoadType.Q;
       }

      return RouterDialog.getDialog(_dialogType)
         .then(Comp => {
            return React.createElement(Comp, {
              key : itemKey,
              caption : dialogCaption || menuTitle,
              msgOnNotSelected : Msg.NOT_SELECTED,
              msgOnNotValidFormat : Msg.NOT_VALID_FORMAT,
              fnValue : _crFnValue(valueFn, valueFnPrefix),
              //initFromDate, initToDate, onTestDate,
              //errNotYmdOrEmpty, isYmdOrEmpty
              ..._crDateProps(dialogProps),
              onLoad, onShow,
              onClickInfo,
              loadFn,
              proxy,
              getKey,
              onError,
              ...dialogProps
           });
         })
}


const _crOptionDialogComp = function(option) {
  const { dialogType } = option
  return RouterDialog.getDialog(dialogType)
     .then(Comp => {
        return React.createElement(Comp, {
            key: dialogType
        })
     });
}

const Factory = {
  ...fBrowser,
  //dialogType, browserType, conf
  createDialog: _crDialogComp,
  //option
  createOptionDialog: _crOptionDialogComp,
};

export default Factory
