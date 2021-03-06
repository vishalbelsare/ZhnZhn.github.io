
import RouterConfig from './RouterConfig'

const StatNorwayAdapter = {
  toConfig(json, option){
    const { seriaType } = option
        , crConfig = RouterConfig.getCrConfig(seriaType)
        , config = crConfig(json, option);

    return { config };
  },

  toSeries(json, option) {
     const { seriaType } = option
         , crConfig = RouterConfig.getCrConfig(seriaType)
         , config = crConfig(json, option);
     return config.series[0];
  }
}

export default StatNorwayAdapter
