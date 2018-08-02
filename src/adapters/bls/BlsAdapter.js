import Builder from '../../charts/ConfigBuilder'

import fnAdapter from './fnAdapter'
const { crData, crConfigOption } = fnAdapter;

const BlsAdapter = {
  toConfig(json, option){
    const { dfTitle, subtitle, title } = option
    , _dfTitle = dfTitle || subtitle
    , data = crData(json)
    , seria = Builder()
        .splineSeria({ data })
        .toSeria()
    , config = Builder()
        .area2Config(_dfTitle, title)
        .addSeries(seria)
        .add({
          ...crConfigOption({ json, option, data })
         })
        .toConfig()
    return { config };
  },

  toSeries(json, option){
     const { config } = BlsAdapter.toConfig(json, option);
     return config.series[0];
  }
}

export default BlsAdapter
