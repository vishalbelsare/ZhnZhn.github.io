
import queryString from 'query-string';
import DateUtils from '../../utils/DateUtils'

const DF_TITLE = 'Item from search, more on Info Tab';
const DF_SUFFIX_TITLE =', more on Info Tab'
const QE = "QE";
const QE_BLSI = "QE_BLSI"
const Q = "Q"
const YEAR_MINUS = 15

const _trSearchToOptions = () => {
  const search = (window.location)
           ? window.location.search
           : null;
  const obj = queryString.parse(search);

  if (obj && obj.bT===QE && obj.cT===QE_BLSI && obj.lI==Q){
    const _title = (obj.t)
             ? obj.t + DF_SUFFIX_TITLE
             : DF_TITLE
        , _fromDate = (obj.fD)
             ? obj.fD
             : DateUtils.getFromDate(YEAR_MINUS);
    return {
      browserType: obj.bT,
      chartType: obj.cT,
      fromDate: _fromDate,
      toDate: DateUtils.getToDate(),
      loadId: obj.lI,
      key: obj.id,
      value: obj.id,
      title: _title
    };
  } else {
    return undefined;
  }
}

const LocationSearch = {
  load : (browserActions, chartActions) => {
    const options = _trSearchToOptions();

    if (options) {
       browserActions.showBrowser(options.browserType)
       chartActions.loadStock(
         options.chartType,
         options.browserType,
         options
       )
    }
  }
}

export default LocationSearch