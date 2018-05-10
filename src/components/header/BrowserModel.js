import { BrowserType as BT } from '../../constants/Type'

import CA from '../../flux/actions/ComponentActions'
import BA from '../../flux/actions/BrowserActions'

const CL_ROW = 'row__pane-topic';

const CL = {
  BR: `${CL_ROW} item__browser`,
  Q: `${CL_ROW} item__quandl`,
  EU: `${CL_ROW} item__eurostat`,
  W: `${CL_ROW} item__watch`,
  AB: `${CL_ROW} item__about`
};

const _fBD = (id) => () => {
  BA.showBrowserDynamic(id)
};
const _fB = (id) => () => {
  BA.showBrowser(id)
};

const crBrowserModel = () => {
  return {
    baseTitleCl: CL.BR,
    pageWidth: 235,
    maxPages: 2,
    page_0: [
      {
        id: 'page_01',
        type: 'sub',
        cn: CL.BR,
        name: 'Economics'
      },{
        id: 'page_02',
        type: 'sub',
        cn: CL.BR,
        name: 'Statistics Agencies'
      },{
        id: 'page_03',
        type: 'sub',
        cn: CL.BR,
        name: 'Stock Markets'
      },{
        cn: CL.EU,
        name: 'UN Comtrade',
        onClick: _fBD(BT.UN_COMTRADE),
        isClose: true
      },{
        cn: CL.EU,
        name: 'FAOSTAT',
        onClick: _fBD(BT.FAOSTAT),
        isClose: true
      },{
        cn: CL.EU,
        name: 'World Bank',
        onClick: _fBD(BT.WORLD_BANK),
        isClose: true
      },{
        cn: CL.BR,
        name: 'Blockchain',
        onClick: _fBD(BT.BLOCKCHAIN),
        isClose: true
      },{
        name: 'Quandl Premium Sample',
        cn: CL.Q,
        onClick: _fBD(BT.PREMIUM_SAMPLE),
        isClose: true
      },{
        cn: CL.W,
        name: 'Watch List',
        onClick: _fBD(BT.WATCH_LIST),
        isClose: true
      },{
        cn: CL.AB,
        name: 'About',
        onClick: CA.showAbout,
        isClose: true
      }
    ],
    page_01: [
      {
        cn: CL.Q,
        name: 'World Economy',
        onClick: _fB(BT.ECONOMIC),
        isClose: true
      },{
        cn: CL.BR,
        name: 'U.S. Economy',
        onClick: _fBD(BT.US_ECONOMY),
        isClose: true
      }
    ],
    page_02: [
      {
        cn: CL.EU,
        name: 'Eurostat',
        onClick: _fBD(BT.EUROSTAT),
        isClose: true
      },{
        cn: CL.EU,
        name: 'Insee: France Statistics',
        onClick: _fBD(BT.FRANCE_STATISTICS),
        isClose: true
      },{
        cn: CL.EU,
        name: 'Statistics Norway',
        onClick: _fBD(BT.NORWAY_STATISTICS),
        isClose: true
      },{
        cn: CL.EU,
        name: 'Statistics Norway All',
        onClick: _fBD(BT.NORWAY_STAT_ALL),
        isClose: true
      },{
        cn: CL.EU,
        name: 'Statistics Sweden',
        onClick: _fBD(BT.SWEDEN_STAT),
        isClose: true
      },{
        cn: CL.EU,
        name: 'Statistics Sweden All',
        onClick: _fBD(BT.SWEDEN_STAT_ALL),
        isClose: true
      },{
        cn: CL.Q,
        name: 'NBS China (Monthly)',
        onClick: _fBD(BT.NBSC),
        isClose: true
      }
    ],
    page_03: [
      {
         cn: CL.BR,
         name: 'Stock Markets',
         onClick: _fBD(BT.STOCK_MARKETS),
         isClose: true
      },{
        cn: CL.Q,
        name: 'NYSE by Sectors',
        onClick: _fBD(BT.NYSE_STOCKS),
        isClose: true
      },{
        cn: CL.Q,
        name: 'NASDAQ by Sectors',
        onClick: _fBD(BT.NASDAQ_STOCKS),
        isClose: true
      },{
        cn: CL.Q,
        name: '1000 Stocks by Sectors',
        onClick: _fBD(BT.US_STOCKS),
        isClose: true
      },{
        cn: CL.Q,
        name: 'LSE (Not Updated)',
        onClick: _fBD(BT.LONDON_STOCKS),
        isClose: true
      }
    ]
  };
}

export default crBrowserModel