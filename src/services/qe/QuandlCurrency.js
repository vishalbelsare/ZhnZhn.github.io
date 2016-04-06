
let QuandlCurrency = {};

const currencySource = [
       { caption: "Bank of England", value: "BOE"},
		   { caption: "European Central Bank", value: "ECB"},
		   { caption: "Federal Reserve Economic Data", value: "FRED"},
];

const boeCurrencies = [
       { caption: "Australian Dollar (AUD)", value: "XUDLADS"},
		   { caption: "Canadian Dollar (CAD)", value: "XUDLCDS"},
		   { caption: "Chinese Yuan (CNY)", value: "XUDLBK89"},
		   { caption: "Czech Koruna (CZK)", value: "XUDLBK25"},
		   { caption: "Danish Krone (DKK)", value: "XUDLDKS"},
		   { caption: "Hong Kong Dollar (HKD)", value: "XUDLHDS"},
		   { caption: "Hungarian Forint (HUF)", value: "XUDLBK33"},
		   { caption: "Indian Rupee (INR)", value: "XUDLBK97"},
		   { caption: "Israeli Shekel (NIS)", value: "XUDLBK78"},
		   { caption: "Japanese Yen (JPY)", value: "XUDLJYS"},
		   { caption: "Lithuanian Litas (LTL)", value: "XUDLBK36"},
		   { caption: "Malaysian Ringgit (MYR)", value: "XUDLBK83"},
		   { caption: "New Zealand Dollar (NZD)", value: "XUDLNDS"},
		   { caption: "Norwegian Krone (NOK)", value: "XUDLNKS"},
		   { caption: "Polish Zloty (PLN)", value: "XUDLBK47"},
		   { caption: "Pound Sterling (GBP)", value: "XUDLGBG"},
		   { caption: "Russian Ruble (RUB)", value: "XUDLBK85"},
		   { caption: "Saudi Riyal (SAR)", value: "XUDLSRS"},
		   { caption: "Singapore Dollar (SGD)", value: "XUDLSGS"},
		   { caption: "South African Rand (ZAR)", value: "XUDLZRS"},
		   { caption: "South Korean Won (KRW)", value: "XUDLBK93"},
		   { caption: "Swedish Krona (SEK)", value: "XUDLSKS"},
		   { caption: "Swiss Franc (CHF)", value: "XUDLSFS"},
		   { caption: "New Taiwan Dollar (TWD)", value: "XUDLTWS"},
		   { caption: "Thai Baht (THB)", value: "XUDLBK87"},
		   { caption: "Turkish Lira (TRY)", value: "XUDLBK95"},
];
const ecbCurrencies = [
      { caption: "Australian Dollar (AUD)", value: "EURAUD"},
      { caption: "Bulgarian Lev (BGN)", value: "EURBGN"},
      { caption: "Brazilian Real (BRL)", value: "EURBRL"},
      { caption: "Canadian Dollar (CAD)", value: "EURCAD"},
      { caption: "Swiss Franc (CHF)", value: "EURCHF"},
      { caption: "Chinese Yuan (CNY)", value: "EURCNY"},
      { caption: "Czech Koruna (CZK)", value: "EURCZK"},
      { caption: "Danish Krone (DKK) ", value: "EURDKK"},
      { caption: "British Pound (GBP) ", value: "EURGBP"},
      { caption: "Hong Kong Dollar (HKD)", value: "EURHKD"},
      { caption: "Croatian Kuna (HRK)", value: "EURHRK"},
      { caption: "Hungarian Forint (HUF) ", value: "EURHUF"},
      { caption: "Indonesian Rupiah (IDR) ", value: "EURIDR"},
      { caption: "New Israeli Shekel (ILS) ", value: "EURILS"},
      { caption: "Indian Rupee (INR) ", value: "EURINR"},
      { caption: "Icelandic Krona (ISK)", value: "EURISK"},
      { caption: "Japanese Yen (JPY)", value: "EURJPY"},
      { caption: "Korean Won (KRW)", value: "EURKRW"},
      { caption: "Lithuanian Lita (LTL)", value: "EURLTL"},
      { caption: "Mexican Peso (MXN)", value: "EURMXN"},
      { caption: "Malaysian Ringgit (MYR)", value: "EURMYR"},
      { caption: "Norwegian Krone (NOK)", value: "EURNOK"},
      { caption: "New Zealand Dollar (NZD)", value: "EURNZD"},
      { caption: "Philippine Peso (PHP)", value: "EURPHP"},
      { caption: "Polish Zloty (PLN)", value: "EURPLN"},
      { caption: "Romanian Leu (RON)", value: "EURRON"},
      { caption: "Russian Rubble (RUB)", value: "EURRUB"},
      { caption: "Swedish Krona (SEK)", value: "EURSEK"},
      { caption: "Singapore Dollar (SGD)", value: "EURSGD"},
      { caption: "Thai Baht (THB)", value: "EURTHB"},
      { caption: "Turkish Lira (TRY)", value: "EURTRY"},
      { caption: "US Dollar (USD)", value: "EURUSD"},
      { caption: "South African Rand (ZAR)", value: "EURZAR"},
];
const fredCurrencies = [
        { caption: "Australian Dollar (AUD)", value: "DEXUSAL"},
		    { caption: "Brazilian Real (BRL)", value: "DEXBZUS"},
		    { caption: "British Pound (GBP)", value: "DEXUSUK"},
		    { caption: "Canadaian Dollar (CAD)", value: "DEXCAUS"},
		    { caption: "Chinese Yuan (CNY)", value: "DEXCHUS"},
		    { caption: "Denish Krone (DKK)", value: "DEXDNUS"},
		    { caption: "Euro (EUR)", value: "DEXUSEU"},
		    { caption: "Hong Kong Dollar (HKD)", value: "DEXHKUS"},
		    { caption: "Indian Rupee (INR)", value: "DEXINUS"},
		    { caption: "Japanese Yen (JPY)", value: "DEXJPUS"},
		    { caption: "Malaysian Ringgit (MYR)", value: "DEXMAUS"},
		    { caption: "Mexican Peso (MXN)", value: "DEXMXUS"},
		    { caption: "New Taiwan Dollar (TWD)", value: "DEXTAUS"},
		    { caption: "New Zealand Dollar (NZD)", value: "DEXUSNZ"},
		    { caption: "Norwegian Krone(NOK)", value: "DEXNOUS"},
		    { caption: "Singapore Dollar (SGD)", value: "DEXSIUS"},
		    { caption: "South African Rand(ZAR)", value: "DEXSFUS"},
		    { caption: "South Korean Won (KRW)", value: "DEXKOUS"},
		    { caption: "Sri Lankan Rupee(LKR)", value: "DEXSLUS"},
		    { caption: "Swedish Krona (SEK)", value: "DEXSDUS"},
		    { caption: "Swiss Franc (CHF)", value: "DEXSZUS"},
		    { caption: "Thai Baht (THB)", value: "DEXTHUS"},
		    { caption: "Venezuelan Bolivar (VEF)", value: "DEXVZUS"},
];

let hmCurrencies = Object.create(null);
hmCurrencies['BOE'] = boeCurrencies;
hmCurrencies['ECB'] = ecbCurrencies;
hmCurrencies['FRED'] = fredCurrencies;

QuandlCurrency.getCurrencySource = function(){
  return currencySource;
}

QuandlCurrency.getCurrencies = function(currencySource){
  return hmCurrencies[currencySource.value];
}

export default QuandlCurrency;
