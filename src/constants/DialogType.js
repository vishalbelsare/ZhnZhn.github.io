

const createTypeObject = function(arr, id){
  const obj = Object.create(null);
  for (let i=0, max=arr.length; i<max; i++){
    obj[arr[i]] = id + '_' + arr[i];
  }
  return obj;
}


const qySources = [
  'ETF' , 'INDICE', 'MUTUAL_FUNDS',
  'TORONTO' , 'TORONTO_VENTURE', 'MONTREAL',

  'LONDON', 'PARIS',
  'AMSTERDAM', 'COPPENHAGEN', 'OSLO', 'STOCKHOLM',
  'SWISS',
  'MILAN', 'MADRID',

  'AUSTRALIAN',
  'SHANGHAI', 'SHENZHEN',
  'TAIWAN', 'HONG_KONG', 'SINGAPURE',
  'BOMBEY'
];
const QuandlYahoo = createTypeObject(qySources, 'QY');


const qeSources = [
  'CURRENCY_HISTORY',
  'COMMODITY_PRICE',
  'COMMODITY_TRADE',
  'JODI_WORLD_GAS',
  'JODI_WORLD_OIL',
  'GLOBAL_INDICATOR',
  'WORLDBANK_PRICE',
  'IMF_CROSSCOUNTRY',
  'CPI_INFLATION',
  'BIG_MAC',

  'WIKI_STOCK',
  'TOKIO_STOCK',
  'UNICORN_RESEARCH',

  'CHINA_DCE_FUTURE',
  'CHINA_ZCE_FUTURE',

  'ZILLOW_REAL_ESTATE'
];
const Quandl = createTypeObject(qeSources, 'QE');


const qgSources = [
  'NASDAQ',
  'NYSE', 'AMEX','ARCA',

  'BRUSSELS', 'LISBON',
  'TALLIN', 'RIGA', 'VILNIUS',

  'SHENZHEN', 'SINGAPURE', 'KOREA', 'TAILAND',
  'NEWZEALAND',
  'SAO_PAOLO'
];
const QuandlGoogle = createTypeObject(qgSources, 'QG');


export {QuandlYahoo, Quandl, QuandlGoogle}
