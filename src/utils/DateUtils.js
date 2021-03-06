
const MIN_YEAR = 1990;
const DAY_IN_MLS = 1000*60*60*24;

const _isNaN = n => typeof n === 'number'
  && (n-n !== 0);
const _isStr = str => typeof str === 'string';
const _isUndef = v => typeof v === 'undefined';
const _pad2 = n => n<10 ? '0'+n : ''+n;

const _toIntMonth = str => parseInt(str, 10)-1;
const _splitDateStr = str => (str || '')
  .toString().split('-');

const _isLikelyQuarter = (str) => _isStr(str)
  && str[0].toUpperCase() === 'Q';


const _notInIntervalStrict = (n, min, max) => _isNaN(n) || (n<min || n>max);
const _notInLengthMinMax = (str, length, min, max) =>
 (typeof str === 'string' && str.length !== length)
 || _notInIntervalStrict(parseInt(str, 10), min, max)
   ? true
   : false;

const _isYmd = (yStr, mStr, dStr, {nForecastDate=0, minYear=MIN_YEAR} = {}) => {
  const _nowYear = new Date().getFullYear();

  if( _notInLengthMinMax(yStr, 4, minYear, _nowYear + nForecastDate)
   || _notInLengthMinMax(mStr, 2, 1, 12)
   || _notInLengthMinMax(dStr, 2, 1, 31)) {
    return false;
  }

  return true;
};

const _getDaysInYm = (y, m) => (new Date(y, m, 0)).getDate();

const MONTH_HP = {
  january: 0, february: 1,
  march: 2, april: 3, may: 4,
  june: 5, july: 6, august: 7,
  september: 8, october: 9, november: 10,
  december: 11
};

const DateUtils = {

  //YYYY-MM-DD valid format
	isYmd(str, nForecastDate=0, minYear=MIN_YEAR){
     if (typeof str !== 'string') {
			 return false;
		 }
		 const _str = str.trim();
		 if (_str.length !== 10) {
			 return false;
		 }

     const _arr = _str.split('-');
     return _isYmd(_arr[0], _arr[1], _arr[2], {nForecastDate, minYear});
	},

	isYmdOrEmpty(str){
		return (str === '')
		  ? true
			: DateUtils.isYmd(str);
	},

	getFromDate(yearMinus=2){
		const dNow = new Date();
		return (dNow.getUTCFullYear()-yearMinus)
		   + "-" + ("0"+(dNow.getUTCMonth() + 1)).slice(-2)
			 + "-" + ("0"+dNow.getUTCDate()).slice(-2);
	},

	getToDate(){
		return DateUtils.getFromDate(0);
	},

	mlsToDmy(mlsUTC){
		if (typeof mlsUTC !== 'number'
		    || !isFinite(mlsUTC)
		) {
			return '';
		}
		const d = new Date(mlsUTC);
		if (d.toString() === 'Invalid Date') {
			return '';
		}
	  return ("0" + d.getUTCDate()).slice(-2)
	         + "-" + ("0" + (d.getUTCMonth() + 1) ).slice(-2)
	         + "-" + d.getUTCFullYear() ;
	},

 dmyToUTC(str){
		const [d, m, y] = _splitDateStr(str);
    return _isYmd(y, m, d)
      ? Date.UTC(y, _toIntMonth(m), d)
      : NaN;
 },

 isDmyPeriod: (from, to) => DateUtils
   .dmyToUTC(from) <= DateUtils.dmyToUTC(to),

 isDmy(str, minYear=MIN_YEAR){
	 const [ d, m, y ] = _splitDateStr(str);
	 return _isYmd(y, m, d, { minYear });
 },

 ymdToUTC: (dateStr, option={}) => {
	 const _arr = _splitDateStr(dateStr)
	 , _len = _arr.length
   , [yearStr, mStr, dStr] = _arr;

	 if (_len === 3) {
		 return Date.UTC(yearStr, _toIntMonth(mStr), dStr);
	 }

   if ( _len === 2 && mStr !== ''){
		 const _m = parseInt(mStr, 10);
		 if (!_isNaN(_m)) {
				const _d = _getDaysInYm(yearStr, _m);
		    return Date.UTC(yearStr, _m - 1, _d);
		 // YYYY-Q format
	   } else if (_isLikelyQuarter(_arr[1])) {
			  const _q = parseInt(_arr[1][1], 10);
        if (_isNaN(_q)) { return _q; }
        const _d = _getDaysInYm(_arr[0], _q*3);
				return Date.UTC( _arr[0], _q*3 - 1, _d);
		 } else {
			 return _m;
		 }
	 }

   if ( _len === 1) {
     const { y=0 } = option
     , _y = parseInt(yearStr, 10) - y;
		 return !_isNaN(_y)
       ? Date.UTC(_y, 11, 31)
       : _y;
	 }

   return Date.UTC(yearStr, _toIntMonth(mStr), dStr);
 },
 ymdhmsToUTC(dateStr) {
	 const _dtArr = dateStr.split(' ')
	 , _ymdArr = _dtArr[0].split('-')
	 , _hmsArr = _dtArr[1].split(':');
	 return Date.UTC(
		 _ymdArr[0], (parseInt(_ymdArr[1], 10)-1), _ymdArr[2],
		 _hmsArr[0], _hmsArr[1], _hmsArr[2]
	 );
 },

 getUTCTime: (ms) => {
	 if (!Number.isInteger(ms)) {
     return '';
   }
   const _d = new Date(ms);
   return `${_pad2(_d.getUTCHours())}:${_pad2(_d.getUTCMinutes())}`;
 },

  addToDmy: (dmy, month) => {
	 if (!DateUtils.isDmy(dmy))	{
		 return new Date(0);
	 }
	 if (!Number.isInteger(month))	{
		 return new Date(DateUtils.dmyToUTC(dmy));
	 }
   const _to = new Date(DateUtils.dmyToUTC(dmy));
   return new Date(_to.setUTCMonth(_to.getUTCMonth()+month));
 },

 getYTDfromDmy: (dmy) => {
	 const _year = dmy.split('-')[2];
	 return DateUtils.dmyToUTC(`01-01-${_year}`)
 },

 getDaysFromYmd: ymd => {
   const _fromMls = DateUtils.ymdToUTC(ymd);
   return Math.ceil(((new Date()).getTime() - _fromMls)/DAY_IN_MLS);
 },

 monthIndex: str => {
   if (!_isStr(str)) {
     return -1;
   }
   const _monthIndex = MONTH_HP[String(str).toLowerCase()];
   return _isUndef(_monthIndex)
     ? -1
     : _monthIndex;
 }

};

export default DateUtils;
