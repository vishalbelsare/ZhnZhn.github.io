
import Factory from '../logic/Factory';

import fCompareBy from './fCompareBy'

const _getSlice = (slice, chartType) => {
  const chartSlice = slice[chartType]
     , { configs } = chartSlice || {};
  return { chartSlice, configs };
};

const _notConfById = id => c => c.zhConfig.id !== id
const _confById = id => c => c.zhConfig.id === id

const _crChartContainer = (chartType, option) => {
  const {
          browserType, conf
        } = option;
  return Factory.createChartContainer(
     chartType, browserType, conf
  );
}

const ChartLogic = {
  _initChartSlice(slice, chartType, config){
    const configs = config ? [ config ] : [];
    if (!slice[chartType]) {
      slice[chartType] = {
        chartType, configs,
        isShow: true
      }
    }
  },

  isChartExist(slice, chartType, key){
    const {
            chartSlice, configs
          } = _getSlice(slice, chartType)
    if (!chartSlice){
      return false;
    }
    const _max = configs.length;
    let i = 0;
    for (; i<_max; i++){
      if (configs[i].zhConfig.key === key){
        return true;
      }
    }
    return false;
  },

  loadConfig(slice, config, option){
    const { chartType } = option
        , {
            chartSlice, configs
          } = _getSlice(slice, chartType);
    if (chartSlice){
      configs.unshift(config);
      chartSlice.isShow = true;
      return { chartSlice };
    } else {
      ChartLogic._initChartSlice(slice, chartType, config)
      return {
        Comp: _crChartContainer(chartType, option)
      };
    }
 },
 showChart(slice, chartType, browserType, conf){
   const { chartSlice } = _getSlice(slice, chartType);
   if (chartSlice){
     chartSlice.isShow = true;
     return { chartSlice };
   } else {
     ChartLogic._initChartSlice(slice, chartType)
     return {
       Comp: _crChartContainer(chartType, { browserType, conf })
     };
   }
 },

  removeConfig(slice, chartType, id) {
    const {
            chartSlice, configs
          } = _getSlice(slice, chartType)
        , _lenBefore = configs.length;

    chartSlice.configs = configs
       .filter(_notConfById(id))

    return {
      chartSlice,
      isRemoved: _lenBefore > chartSlice.configs.length
    };
  },

  toTop(slice, chartType, id){
    const {
            chartSlice, configs
          } = _getSlice(slice, chartType)
        , _conf = configs.find(_confById(id));
    if (_conf) {
      const withoutArr = configs.filter(_notConfById(id));
      chartSlice.configs = [ _conf, ...withoutArr]
    }

    return chartSlice;
  },

  sortBy(slice, chartType, by){
    const {
            chartSlice, configs
          } = _getSlice(slice, chartType);
    if (by) {
      configs.sort(fCompareBy(by))
    } else {
      configs.reverse()
    }
    return chartSlice;
  }
};

export default ChartLogic
