const C = {
  URL: "https://api.eia.gov/category/",
  S_URL: "https://api.eia.gov/series/"
};
const CAPTION = 'EIA';
const MSG = {
  ERR: 'invalid series_id.',
  NOT_EXIST: 'Data for enetered parameters is not existed.',
  EMPTY: 'Response is empty.',
  DATA_EMPTY: 'Data is empty.'
};

const _crErr = (caption, message) => ({
    errCaption: caption,
    message: message
})

const _getValue = (obj) => {
  return obj && obj.value
   ? obj.value
   : '';
};


const _crSeriaDf = (option) => {
  const {
    sufix,
    items=[]
  } = option
  , _one = _getValue(items[0])
  , _two = _getValue(items[1])
  , _three = _getValue(items[2])
  , _sufix = _three || sufix || '' ;

  return `${_two}${_one}${_sufix}`;
};
const _crSeriaPI2 = (option) => {
  const {
    prefix,
    items=[]
  } = option
  , _one = _getValue(items[0])
  , _two = _getValue(items[1])
  return `${prefix}${_one}${_two}`;
};
const _crSeriaPI321S = (option) => {
  const {
    prefix,
    items=[],
    sufix
  } = option
  , _one = _getValue(items[0])
  , _two = _getValue(items[1])
  , _three = _getValue(items[2])
  return `${prefix}${_three}-${_two}-${_one}${sufix}`;
};

const _rSeriaId = {
  DF: _crSeriaDf,
  pi2: _crSeriaPI2,
  pi231s: _crSeriaPI321S
};

const _crSeriaId = (option) => {
  const { dfSeriaType } = option
  , fn = _rSeriaId[dfSeriaType] || _rSeriaId.DF;
  return fn(option);
}

const EiaApi = {
  getRequestUrl(option){
    const { apiKey } = option
    , _seria_id = _crSeriaId(option);

    return `${C.S_URL}?api_key=${apiKey}&series_id=${_seria_id}`;
  },

  checkResponse(json){
    if (!json) {
      throw _crErr(CAPTION, MSG.EMPTY);
    }
    const { data={} } = json
    , { error:msgErr } = data;
    if (msgErr) {
      if (msgErr.indexOf(MSG.ERR) !== -1) {
        throw _crErr(CAPTION, MSG.NOT_EXIST);
      }
      throw _crErr(CAPTION, msgErr);
    }
    if (!json.series || !json.series[0]) {
      throw _crErr(CAPTION, MSG.DATA_EMPTY);
    }
    return true;
  }
};

export default EiaApi
