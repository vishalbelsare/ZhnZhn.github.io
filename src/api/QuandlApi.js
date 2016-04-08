
import ApiUtils from '../utils/ApiUtils';

const QuandlApi = {};

QuandlApi.rootUrl = "https://www.quandl.com/api/v3/datasets/";
QuandlApi.BLANK = '';

QuandlApi.getRequestUrl = function(option){
  const queryDate = (option.fromDate && option.toDate) ?
       `sort_order=asc&trim_start=${option.fromDate}&trim_end=${option.toDate}` :
        QuandlApi.BLANK;

  let apiKey;
  if (option.apiKey){
    apiKey = (queryDate) ?
        `&api_key=${option.apiKey}` :
        `api_key=${option.apiKey}`;
  } else {
    apiKey = QuandlApi.BLANK;
  }

  const uri = `${QuandlApi.rootUrl}${option.value}.json?${queryDate}${apiKey}`;

  return ApiUtils.createUri(uri);
}


export default QuandlApi;
