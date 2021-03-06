
import AdapterFn from '../AdapterFn'
import ChartConfig from '../../charts/ChartConfig'
import Builder from '../../charts/ConfigBuilder'

const { ymdToUTC } = AdapterFn

const C = {
  TWO_YEARS_DAYS: 501,
  TA: 'Technical Analysis:',

  MACD: 'MACD',
  MACD_S: 'MACD_Signal',
  MACD_H: 'MACD_Hist',

  STOCH: 'STOCH',
  SLOW_K: 'SlowK',
  SLOW_D: 'SlowD',

  BBANDS: 'BBANDS',
  BBANDS_U: 'Real Upper Band',
  BBANDS_M: 'Real Middle Band',
  BBANDS_L: 'Real Lower Band',

  BLACK: { color: 'black' },
  RED: { color: '#f44336' },
  BLUE: { color: 'rgb(47, 126, 216)' },
  COLOR_BLUE_A: 'rgba(47, 126, 216, 0.75)',
  GREEN: { color: '#4caf50' }
}

const _assign = Object.assign

const _crZhConfig = (id) => ({
  id: id,
  key: id,
  itemCaption: id,
  dataSource: "Alpha Vantage"
});

const _crValuePropName = (indicator) => {
  switch(indicator){
    case 'AD': return 'Chaikin A/D';
    default: return indicator;
  }
};

const _crValue = ( json, option ) => {
  const {
          indicator,
          forDays=C.TWO_YEARS_DAYS
        } = option
      , _indicator = _crValuePropName(indicator)
      , value = json[`${C.TA} ${_indicator}`]
      , dateKeys = value
           ? Object.keys(value).sort().reverse()
           : []
      , _len = dateKeys.length
      , max = _len < forDays
          ? _len-1
          : forDays;
    return { value, dateKeys, max };
}

const _toDataArrs = ({dateKeys, value, max}, arrProp) => {
  let i, j, _date, _x, _v;

  const result=[], _maxProp=arrProp.length;
  for(j=0; j<_maxProp;j++) {
    result.push([])
  }

  for(i=max; i>-1; i--) {
    _date = dateKeys[i]
    _x = ymdToUTC(_date)
    _v = value[_date]
    for(j=0; j<_maxProp; j++){
      result[j].push([_x, parseFloat(_v[arrProp[j]])])
    }
  }
  return result;
}

const _crSplineSeria = ({data, ticket, valueText}, option) =>
  _assign(ChartConfig.crSeria(), {
    type: 'spline',
    visible: true,
    data: data,
    marker: {
      symbol: 'circle'
    },
    zhSeriaId: ticket + '_' + valueText ,
    zhValueText: valueText
  }, option);


const _crSeriaData = (json, option) => {
  const { indicator } = option
      , _indicator = _crValuePropName(indicator)
      , { value, dateKeys, max } = _crValue(json, option)
      , _data = [];

  let i=max, _date, _v;
  for(; i>-1; i--) {
    _date = dateKeys[i]
    _v = parseFloat(value[_date][_indicator])
    _data.push([ymdToUTC(_date), _v])
  }

  return _data;
}

const _crSeria = (json, option ) => {
  const { indicator, ticket } = option
      , _data = _crSeriaData(json, option);
  return _crSplineSeria({
           data: _data, valueText: indicator, ticket
         });
}


const _crMacdSeries = (json, option) => {
  const { ticket } = option
      , _arrs = _toDataArrs(
           _crValue(json, option),
           [C.MACD, C.MACD_S, C.MACD_H]
        )
      , sMcad = _crSplineSeria({
           data: _arrs[0], valueText: C.MACD, ticket
        }, C.BLACK)
      , sSignal = _crSplineSeria({
           data: _arrs[1], valueText: C.MACD_S, ticket
        }, C.RED)
      , sHist = _assign(ChartConfig.crSeria(), {
           color: C.COLOR_BLUE_A,
           data: _arrs[2],
           zhSeriaId: ticket + '_' + C.MACD_H,
           zhValueText: C.MACD_H,
           type: 'column',
           visible: false,
           shadow: false,
           borderWidth: 0,
           pointPlacement: 'on',
           pointPadding: 0,
           groupPadding: 0,
           turboThreshold: 20000
        });

  return [ sHist, sSignal, sMcad ];
}

const _crStochSeries = (json, option) => {
  const { ticket } = option
      , _arrs = _toDataArrs(
           _crValue(json, option), [C.SLOW_K, C.SLOW_D]
        )
      , sSlowK = _crSplineSeria({
          data: _arrs[0], valueText: C.SLOW_K, ticket
        }, C.BLUE)
     , sSlowD = _crSplineSeria({
          data: _arrs[1], valueText: C.SLOW_D, ticket
       }, C.RED);

  return [sSlowK, sSlowD];
}

const _crBbandsSeries = (json, option) => {
  const { ticket } = option
      , _arrs = _toDataArrs(
           _crValue(json, option),
           [C.BBANDS_M, C.BBANDS_U, C.BBANDS_L]
        )
      , sMiddle = _crSplineSeria({
          data: _arrs[0], valueText: C.BBANDS_M, ticket
        }, C.BLUE)
     , sUpper = _crSplineSeria({
          data: _arrs[1], valueText: C.BBANDS_U, ticket
       }, C.GREEN)
     , sLow = _crSplineSeria({
            data: _arrs[2], valueText: C.BBANDS_L, ticket
       }, C.RED);

    return [sMiddle, sUpper, sLow];
}

const _rSeries = {
  DF: _crSeria,
  [C.MACD]: _crMacdSeries,
  [C.STOCH]: _crStochSeries,
  [C.BBANDS]: _crBbandsSeries,
}

const AlphaAdapter = {
  toConfig(json, option) {
    const { ticket, value } = option
        , _chartId = `${ticket}-${value}`
        , _title = `${ticket}: ${value}`
        , _series = this.toSeries(json, option)
        , config = Builder()
            .areaConfig({ spacingTop: 25 })
            .addCaption(_title)
            .clearSeries()
            .addSeries(_series)
            .add({ zhConfig: _crZhConfig(_chartId) })
            .toConfig();
    return {
      config,
      isDrawDeltaExtrems: false,
      isNotZoomToMinMax: false
    };
  },

  toSeries(json, option) {
    const _crSeries = _rSeries[option.indicator]
      || _rSeries.DF;
    return _crSeries(json, option);
  }
};

export default AlphaAdapter
