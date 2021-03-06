import Builder from '../../charts/ConfigBuilder'
import fnAdapter from './fnAdapter'

const {
  crTitle, crData, crConfigOption,
} = fnAdapter;

const BlsAdapter = {
  toConfig(json, option){
    const { title } = option
    , _dfTitle = crTitle(option)
    , data = crData(json)
    , seria = Builder()
        .splineSeria({ data })
        .toSeria()
    , config = Builder()
        .area2Config(_dfTitle, title)
        .addMinMax(data, option)
        .addSeries(seria)
        .add({
          ...crConfigOption({ json, option, data })
         })
        .toConfig()
    return { config };
  },

  toSeries(json, option){
     return Builder.crSeria({
       adapter: BlsAdapter,
       json, option
     });
  }
}

export default BlsAdapter
