
import _ from 'lodash';
import Big from 'big.js';

import {ChartType} from '../constants/Type';
import Chart from '../constants/Chart';
import ChartConfig from '../constants/ChartConfig';

const _rFactorySeria = {
  [ChartType.STACKED_AREA] : ChartConfig.fStackAreaSeria,
  [ChartType.STACKED_COLUMN] : ChartConfig.fStackedColumnSeria
}

const _fnCalcTotal = function(items=[], jsonData=[]){
   let _bTotal = Big('0.0');
   for(let i=0, max=items.length; i<max; i++ ){
     let y = jsonData[items[i].value]
     if (y){
       _bTotal = _bTotal.plus(y);
     }
   }
   return _bTotal;
}

const _fnCreateReferenceDataAndTotal = function(jsonData, items){
  let _data = []
    , _bTotal = Big('0.0');

  items.forEach((item, index) =>{
    let y = jsonData[item.value];
    if (y){
       //const _nameFull = item.caption.replace(/;/g, '<br/>')
       const _name = item.caption.split(';')[0].substring(0, 9);
       _data.push({
          name : _name,
          nameFull: item.caption,
          y: y,
          _jsonIndex : item.value
        });
       _bTotal = _bTotal.plus(y);
    }
  });

  _data = _.sortBy(_data, 'y').reverse();

  return {referenceData : _data, bTotal : _bTotal}
}

const _fnCreateDataTopPercent = function(data, bTotal, percent){
  const _dataTopPercent = []
      , _bTotal90 = bTotal.times(percent);
  let _bArrTotal = Big('0.0');
  for (let i=0, max=data.length; i<max; i++ ){
    let item = data[i];
    if ( i === 0 ||
         !_bArrTotal.gte(_bTotal90) ||
         i === max-1 )
    {
      _dataTopPercent.push(item);
    } else { break; }

    _bArrTotal = _bArrTotal.plus(item.y);
  }

  return _dataTopPercent;
}


const _fnInitSeries = function({ items, zhSeriaId, chartType, fSeria }){
  return items.map((item, itemIndex)=>{
           const color = Chart.fnGetMonoColor(itemIndex)
               , {name} = item
               return fSeria({ zhSeriaId, name, color })
         });
}


const _fnCalcPercent = function(bTotal=Big('0.0'), bValue=Big('0.0')){
  return (!bTotal.eq(Big(0.0)) )
            ? bValue.times(100).div(bTotal).abs().toFixed(2) + '%' : Big(0.0) + '%';
}

const _fnCreateStackedSeries = function({
  jsonData, items100, items90, zhSeriaId, chartType
}){
   const fSeria = _rFactorySeria[chartType]
       , series = _fnInitSeries({ items:items90, zhSeriaId, chartType, fSeria })
       , categories = []
       , dataOther = []

   jsonData = jsonData.reverse();
   jsonData.forEach((yearData, i) =>{
     let yearTotal100 = _fnCalcTotal(items100, yearData)
       , yearTotal90  = Big('0.0')
     categories.push(yearData[0].split('-')[0]);
     items90.forEach((item, itemIndex) => {
        const y = yearData[item._jsonIndex]
            , percent = (y) ? _fnCalcPercent(yearTotal100, Big(y)) : '0.0%';
        series[itemIndex].data.push({
           y : y,
           nameFull : item.nameFull,
           percent : percent,
           total : parseInt(yearTotal100.toString(), 10)
         })
        if (y) {
          yearTotal90 = yearTotal90.plus(y);
        }
     })
     const yOther = parseInt(yearTotal100.minus(yearTotal90).toString(), 10);
     dataOther.push({
       y : yOther,
       nameFull : 'Other',
       percent : _fnCalcPercent(yearTotal100, Big(yOther)),
       total : parseInt(yearTotal100.toString(), 10)
     })
   })

   series.push(
     fSeria({
       zhSeriaId : zhSeriaId,
       name : 'Other',
       data : dataOther,
       color: 'gray'
     })
   )

   return { series, categories };
}

export const fnCreateStackedConfig = function({
   jsonData, items100, zhSeriaId, chartType=ChartType.STACKED_AREA
 }){
  const {referenceData , bTotal} = _fnCreateReferenceDataAndTotal(jsonData[0], items100)
      , items90 = _fnCreateDataTopPercent(referenceData, bTotal, 0.9)
      , bPrevTotal = _fnCalcTotal(items100, jsonData[1])
      , { series, categories } = _fnCreateStackedSeries({
          jsonData, items100, items90, zhSeriaId, chartType
        });

  return {bNowTotal : bTotal, bPrevTotal, series, categories}
}
