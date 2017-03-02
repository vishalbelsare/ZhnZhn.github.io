import FactoryChart from './FactoryChart';
import JsonStatFn from './JsonStatFn';
import EuroStatFn from './EuroStatFn';

const toBar = {
  createConfig : (json, option) => {
    const { zhMapSlice:configSlice, time='', subtitle='' } = option
    return JsonStatFn.trJsonToCategory(json, configSlice)
             .then(({ categories, data, min }) => {
                 const config = FactoryChart.createBarConfig();
                 EuroStatFn.setDataAndInfo({ config, data, json, option });
                 EuroStatFn.setCategories({ config, categories, min, time, subtitle });
                 return config;
             });
  }
};

export default toBar