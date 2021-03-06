import fetchJsonpImpl from 'fetch-jsonp'

const C = {
  //LIMIT_REMAINING: 'X-RateLimit-Remaining',
  REQ_ERR: 'Request Error',
  RESP_ERR: 'Response Error',

  MSG_URI_EMPTY: "Item url isn't specified by adapter.",
  MSG_400: '400: Bad request.',
  MSG_404: '404: Resource is not existed.',
  MSG_429: '429: Too many request in a given amount of time (rate limiting).',
  MSG_503: '503: Back-end server is at capacity.'
};

const _isFn = fn => typeof fn === 'function';
const _isArr = Array.isArray
const _assign = Object.assign

const _isInArrValue = (arr, value) => _isArr(arr)
  && arr.indexOf(value) !== -1;

const _crErr = (message, errCaption=C.REQ_ERR) => ({
  errCaption,
  message
});

const _throwIfNotStatus = (errStatus, status, msg) => {
  if (!_isInArrValue(errStatus, status)) {
    throw _crErr(msg);
  }
};

const _promiseAll = ({
  response, propName, status,
  getLimitRemaiming
}) => {
  const headers = response.headers
  , _limitRemaining = headers
       && _isFn(headers.get)
       && _isFn(getLimitRemaiming)
        ? getLimitRemaiming(headers)
        : void 0;
  return Promise.all([
    Promise.resolve(_limitRemaining),
    response[propName](),
    Promise.resolve(status)
  ]);
};

const _fFetch = (propName, type) => function({
   uri, option={},
   optionFetch,
   getLimitRemaiming,
   onCheckResponse,
   onFetch, onCompleted,
   onFailed, onCatch
 }){
  if (!uri) {
    if (_isFn(onFailed)) {
      setTimeout(()=>onFailed(_assign(option, {
        alertCaption: C.REQ_ERR,
        alertDescr: C.MSG_URI_EMPTY
      })), 0)
    }
    return;
  }
  const _fnFetch = type !== 'jsonp'
    ? fetch
    : fetchJsonpImpl;
  _fnFetch(uri, optionFetch)
    .then(response => {
      const { status, statusText, ok } = response
          , { resErrStatus} = option;
      if ((status>=200 && status<400) || ok) {
         return _promiseAll({
           response, propName,
           getLimitRemaiming
         });
      } else if (status === 400) {
         _throwIfNotStatus(resErrStatus, status, C.MSG_400)
         return _promiseAll({ response, propName, status });
      } else if (status === 404) {
         throw _crErr(C.MSG_404);
      } else if (status === 429) {
         throw _crErr(C.MSG_429);
      } else if (status>400 && status<500){
         _throwIfNotStatus(resErrStatus, status, `${status}: ${statusText}`)
         return _promiseAll({ response, propName, status });
      } else if (status === 503) {
         throw _crErr(C.MSG_503);
      } else if (status>=500 && status<600){
         throw _crErr(`${status}: ${statusText}`, C.RESP_ERR);
      } else {
        return [void 0, {}, status];
      }
    })
    .then(([limitRemaining, json, status]) => {
       if (_isFn(onCheckResponse)){
         if (onCheckResponse(json, option, status)) {
           option.limitRemaining = limitRemaining;
           onFetch({ json, option, onCompleted });
         }
      } else {
        option.limitRemaining = limitRemaining;
        onFetch({ json, option, onCompleted });
      }
    })
    .catch(error => {
       if (_isFn(onCatch)) {
          onCatch({ error, option, onFailed })
       } else {
         console.log(error)
       }
    })
};

export const fetchJson = _fFetch('json');
export const fetchTxt = _fFetch('text');
export const fetchJsonp = _fFetch('json', 'jsonp');
