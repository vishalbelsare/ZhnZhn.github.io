import Big from 'big.js';

import AdapterFn from '../AdapterFn'

import { ChartType } from '../../constants/Type';
import Chart from '../../charts/Chart';
import ChartConfig from '../../charts/ChartConfig';

import {
  fnCalcTotal,
  fnCreateSparkData,
  crValueMoving,
  crZhConfig
} from './StackedFn';
import QuandlFn2 from './QuandlFn2';


const _fnCreateYearTotals = function(jsonData, items){
   return jsonData.map(year => fnCalcTotal(year, items) );
}

const _fnCreateDataAndTotal = function(jsonData=[], items=[], bYearTotals=[]){
  const yearData = jsonData[0]
     , _year = yearData[0]
          ? yearData[0].split('-')[0]
          : ''
     , bTotal = bYearTotals[0]
          ? bYearTotals[0]
          : Big('0.0');
  let data = [];

  items.forEach((item, itemIndex) =>{
    const { value, caption } = item
        , _value = yearData[value];
    if (_value){
       const { sparkvalues, sparkpercent } = fnCreateSparkData(jsonData, value, bYearTotals);
       data.push({
          sparkvalues : sparkvalues.reverse(),
          sparkpercent : sparkpercent.reverse(),
          year : _year,
          name : caption,
          nameFull: caption,
          value : _value
        });
    }
  });

  data.sort(AdapterFn.compareByValue)
      .reverse();

  return { data, bTotal };
}

const _fnCalcLevelAndSetPercent = function(data, bTotal){
  let _bLevel = Big('0.0')
    , level60 = 0
    , level90 = 0;

   data.forEach((point, pointIndex) => {
      const {value, name} = point
          , percent = QuandlFn2.createPercent({
              bValue: Big(value), bTotal: bTotal
            }).toString();
      point.total = bTotal.toString();
      point.percent = percent;
      if ( !_bLevel.gte('60.0') ){
         point.name = `${percent} ${name}`;
         point.dataLabels = {
           style : {
             fontSize : '16px'
           }
         }
         level60 +=1;
       } else if ( !_bLevel.gte('90.0') ){
          point.name = `${percent} ${name.split(';')[0].substring(0, 9)}`;
          level90 +=1;
       } else {
          point.name = percent;
       }
       _bLevel = _bLevel.plus(percent);
    })

    return { level60, level90 };
}

const _fnSetColorToPoint = function(data, level60, level90){
  const period = Chart.COLOR_PERIOD
      , base1 = Chart.COLOR_BASE1
      , base2 = Chart.COLOR_BASE2;

  let deltaColor;
  data.forEach((point, pointIndex) => {
     if (pointIndex < level60){
       deltaColor = pointIndex * ( period / level60 );
       point.color = Chart.fCreateMonoColor(base1, deltaColor);
     } else if ( pointIndex < level60+level90 ) {
       deltaColor = (pointIndex-level60) * ( period / level90 );
       point.color = Chart.fCreateMonoColor(base2, deltaColor);
     } else {
       point.color = Chart.fnGetMonoColor(pointIndex-level60-level90)
     }
   })
}

export const fCreateTreeMapConfig = function(json, option){
  const config = ChartConfig.fBaseTreeMapConfig()
     ,  { sliceItems:items100=[], value='' } = option
     ,  zhSeriaId = `${value}_${ChartType.TREE_MAP}`
     ,  jsonData = json.dataset && json.dataset.data
           ? json.dataset.data
           : []
     ,  bYearTotals = _fnCreateYearTotals(jsonData, items100)
     , { data, bTotal } = _fnCreateDataAndTotal(jsonData, items100, bYearTotals)
     , { level60, level90 } = _fnCalcLevelAndSetPercent(data, bTotal)
     , bPrevTotal = fnCalcTotal(jsonData[1], items100)
     , dateTo = jsonData[1][0] ? jsonData[1][0] : '';

   _fnSetColorToPoint(data, level60, level90);

  config.chart.height = Chart.STACKED_HEIGHT;

  const yearTitle = jsonData[0] && jsonData[0][0]
          ? jsonData[0][0].split('-')[0]
          : '';
  option.title = `${yearTitle}:${option.title}`
  QuandlFn2.setTitleToConfig(config, option)

  Object.assign(config, {
    series: [ ChartConfig.fCreateTreeMapSeria(zhSeriaId, data) ],
    valueMoving: crValueMoving(bTotal, yearTitle, bPrevTotal, dateTo),
    zhConfig: crZhConfig(option, zhSeriaId),
    info: QuandlFn2.createDatasetInfo(json)
  })

  return { config };
}
