import { fetchTxt, fetchJsonp } from '../../utils/fnFetch'
import Adapter from '../../adapters/RouterAdapter'

import f from './loadItem'

const {
  Quandl,
  DbNomics,
  UnComtrade, FaoStat, WorldBank,
  EuroStat, StatNorway, StatSweden, StatFinland,
  Insee,
  AlphaVantage, Barchart, Intrinio,
  Crc, Cmc,
  Iex, Wtd, Fmp,
  Bea, Bls, Eia
} = Adapter;

const LoadImpl = {
  Quandl: f({ ...Quandl }),
  DbNomics: f({ ...DbNomics }),
  UnComtrade: f({ ...UnComtrade }),
  FaoStat: f({ ...FaoStat }),
  WorldBank: f({ ...WorldBank}),
  EuroStat: f({ ...EuroStat }),

  StatNorway: f({ ...StatNorway.Dataset }),
  StatNorway2: f({ ...StatNorway.Table }),

  StatSweden: f({ ...StatSweden.Table }),
  StatFinland: f({ ...StatFinland.Table }),

  AlphaIndicator: f({ ...AlphaVantage.Indicator }),
  AlphaIntraday: f({ ...AlphaVantage.Intraday }),
  AlphaSector: f({ ...AlphaVantage.Sector }),

  Barchart: f({
    fnFetch: fetchJsonp,
    ...Barchart
  }),
  Iex: f({ ...Iex }),
  Wtd: f({ ...Wtd}),
  Fmp: f({ ...Fmp}),
  Intrinio: f({ ...Intrinio }),


  Crc: f({ ...Crc}),
  Cmc: f({ ...Cmc}),

  Insee: f({
    fnFetch: fetchTxt,
    ...Insee
  }),

  Bea: f({ ...Bea }),
  Bls: f({ ...Bls }),
  Eia: f({ ...Eia })
};

export default LoadImpl
