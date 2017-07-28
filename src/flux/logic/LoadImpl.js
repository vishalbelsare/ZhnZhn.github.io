import { fnFetch } from '../../utils/fn'
import { fnFetch as fnFetchJsonp } from '../../utils/fnJsonp'

import loadItem from './loadItem'

import Api from '../../api/Api'

import EuroStatAdapter from '../../adapters/eurostat/EuroStatAdapter'
import AlphaAdapter from '../../adapters/alpha/Adapter'
import BarchartAdapter from '../../adapters/barchart/BarchartAdapter'
import QuandlAdapter from '../../adapters/QuandlAdapter'

const Quandl = loadItem({
  fnFetch: fnFetch,
  api: Api.Quandl,
  adapter: QuandlAdapter
})

const EuroStat = loadItem({
  fnFetch: fnFetch,
  api: Api.EuroStat,
  adapter: EuroStatAdapter
})

const AlphaIndicator = loadItem({
  fnFetch: fnFetch,
  api: Api.Alpha,
  adapter: AlphaAdapter.Indicator
})

const AlphaIntraday = loadItem({
  fnFetch: fnFetch,
  api: Api.Alpha,
  adapter: AlphaAdapter.Intraday
})

const AlphaSector = loadItem({
  fnFetch: fnFetch,
  api: Api.Alpha,
  adapter: AlphaAdapter.Sector
})

const Barchart = loadItem({
  fnFetch: fnFetchJsonp,
  api: Api.Barchart,
  adapter: BarchartAdapter
})

export default {
  Quandl,
  EuroStat,

  AlphaIndicator,
  AlphaIntraday,
  AlphaSector,

  Barchart
}