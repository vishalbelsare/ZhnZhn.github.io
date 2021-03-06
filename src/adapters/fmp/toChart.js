import Builder from '../../charts/ConfigBuilder';

import fnAdapter from './fnAdapter'

const {
  crCaption,
  crData,
  crConfigOption
} = fnAdapter;

const toChart = {
  toConfig(json, option){
    const {
      dfPn,
      _propName,
      seriaType,
      seriaColor,
      seriaWidth
    } = option
    , { title, subtitle } = crCaption(option)
    , data = crData(json[dfPn], _propName)
    , seria = Builder()
        .splineSeria({
           seriaType,
           seriaColor,
           seriaWidth,
           data
        })
        .toSeria()
    , config = Builder()
        .area2Config(title, subtitle)
        .addSeries(seria)
        .addMinMax(data, option)
        .add({
          ...crConfigOption({ json, option, data })
        })
        .toConfig();

    return { config };
  },

  toSeries(json, option){
    return Builder.crSeria({
      adapter: toChart,
      json, option
    });
  }
};

export default toChart
