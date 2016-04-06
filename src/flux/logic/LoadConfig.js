

import ChartStore from '../stores/ChartStore';
import ChartType from '../../constants/ChartType';
import {QuandlYahoo, QuandlGoogle} from '../../constants/DialogType';
import QuandlApi from '../../api/QuandlApi';
import QuandlAdapter from '../../adapters/QuandlAdapter';


const loadData = function(dataColumn, chartType, option, onCompleted){
  const chartId = option.value;
  if (!ChartStore.isChartExist(chartType, chartId)) {
     fetch(QuandlApi.getRequestUrl(option))
      .then((response)=>response.json())
      .then((json)=>{
        if (!json.quandl_error){
          let config = QuandlAdapter.toConfig(json, dataColumn);
          config.stockTicket = chartId;
          onCompleted(chartType, config);
        } else {
          console.log('%cQuandl Error Message:', 'color:red;');
          console.log('%c' + json.quandl_error.message, 'color:red;');
        }
      })
      .catch((error) => {
        console.log('%c' + error.message, 'color:red;');
      })
  } else {
    console.log('%cChart for this type has already existed in a container. Close it and load again.', 'color:red;');
  }
}

const fnLoad1 = loadData.bind(null, 1);
const fnLoad4 = loadData.bind(null, 4);

const LoadConfig = {
  [ChartType.QUANDL_CURRENCY_HISTORY] : fnLoad1,
  [ChartType.QUANDL_COMMODITY_PRICE] : fnLoad1,
  [ChartType.QUANDL_WORLDBANK_PRICE] : fnLoad1,
  [ChartType.QUANDL_WIKI_STOCK] : fnLoad4,
  [ChartType.QUANDL_TOKIO_STOCK] : fnLoad4,
  [ChartType.QUANDL_CHINA_DCE_FUTURE] : fnLoad4

}

const addConfig = function(obj, fn){
  for(var key in obj){
    LoadConfig[obj[key]] = fn;
  }
}
addConfig(QuandlGoogle, fnLoad4);
addConfig(QuandlYahoo, fnLoad4);


export default LoadConfig
