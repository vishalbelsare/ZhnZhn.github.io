import AdapterFn from '../AdapterFn'

const {
  getValue,
  crError,
  ymdToUTC,
  compareByDate,
  valueMoving,
  joinBy,
  crItemLink
} = AdapterFn

const _crItemLink = crItemLink.bind(null, 'ONS Dataset Metadata');

const MONTH_HM = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12'
}

//Jan-20
const _mmmYyToMls = str => {
  const _arr = str.split('-')
  , _m = MONTH_HM[_arr[0].trim()]
  , _yStr = _arr[1].trim()
  , _yPrefix = _yStr < '30' ? '20' : '19';
  return ymdToUTC(`${_yPrefix}${_yStr}-${_m}`);
}

const _isNumber = n => typeof n === 'number'
 && (n-n===0);

const _crZhConfig = ({
  _itemKey,
  title,
  dataSource
}) => ({
  id: _itemKey, key: _itemKey,
  itemCaption: title,
  dataSource
})

const _crName = ({ unit_of_measure }, { title, subtitle }) =>
  joinBy(': ', subtitle, title, unit_of_measure);

const _crDescr = ({ links }) => {
  const { href } = (links || {}).dataset_metadata || {};
  return href ? _crItemLink(href) : '';
}

const _crInfo = (json, option) => ({
  name: _crName(json, option),
  description: _crDescr(json)
})


const fnAdapter = {
  getValue,
  crError,

  crData: (json) => {
    const _data = []
    , { observations } = json
    let i=0;
    for (;i<observations.length; i++){
      const item = observations[i]
      , { dimensions, observation } = item
      , { id } = (dimensions || {}).time || {}
      , _x = _mmmYyToMls(id)
      , _y = parseFloat(observation)
      if (_isNumber(_x) && _isNumber(_y)) {
        _data.push([_x, _y])
      }
    }
    return _data.sort(compareByDate);
  },

  crConfigOption: ({ json, option, data }) => ({
    zhConfig: _crZhConfig(option),
    valueMoving: valueMoving(data),
    info: _crInfo(json, option)
  })
}

export default fnAdapter