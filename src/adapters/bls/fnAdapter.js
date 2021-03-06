
import AdapterFn from '../AdapterFn'

const {
  valueMoving,
  ymdToUTC,
  joinBy
} = AdapterFn;

const _crZhConfig = ({
  title,
  dataSource, dfTitle,
  value,
  linkItem
}) => ({
  id: value, key: value,
  item: { ...linkItem },
  linkFn: 'DF',
  itemCaption: title,
  dataSource: joinBy(": ", dataSource, dfTitle)
});

const _crInfo = ({ title }) => ({
  name: title
});

const fnAdapter = {  
  crTitle: ({ dfTitle, item={}, subtitle }) => dfTitle
    ? joinBy(', ', dfTitle, item.t)
    : subtitle,

  crData: (json) => {
    const data = json.Results.series[0].data
       , _data = [];
    data.forEach(p => {
      const { year, period='', value } = p
          , _m = parseInt((''+period).replace('M',''), 10)
      if (typeof _m === 'number' && _m>0 && _m<13) {
        _data.push({
           x: ymdToUTC(`${year}-${_m}`),
           y: parseFloat(value)
        });
      }
    })
    return _data.reverse();
  },

  crConfigOption: ({ json, option, data }) => ({
    zhConfig: _crZhConfig(option),
    valueMoving: valueMoving(data),
    info: _crInfo(option)
  })

};

export default fnAdapter
