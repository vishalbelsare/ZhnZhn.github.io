import Builder from '../../charts/ConfigBuilder';

import fnAdapter from './fnAdapter';

const {
  crTitle,
  crData,
  findMaxY,
  findMinY,
  crConfigOption
} = fnAdapter;

const EiaAdapter = {
  toConfig(json, option){
    const {
      seriaColor,
      isNotZoomToMinMax
    } = option
    , { title, subtitle } = crTitle(option)
    , data = crData(json)
    , seria = Builder()
        .splineSeria({
          color: seriaColor,
          data
        })
        .toSeria()
    , config = Builder()
       .area2Config(title, subtitle)
       .addSeries(seria)
       .setMinMax(
         findMinY(data),
         findMaxY(data),
         isNotZoomToMinMax
       )
       .add({
        ...crConfigOption({ json, option, data })
       })
       .toConfig();
    
    return { config };
  },

  toSeries(json, option){
    const { config } = EiaAdapter.toConfig(json, option);
    return config.series[0];
  }
};

export default EiaAdapter