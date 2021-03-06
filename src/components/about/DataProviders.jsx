import React from 'react'

import C from '../styles/Color'

import OpenClose from '../zhn/OpenClose'
import Link from '../links/ProviderLinks'

import S from './About.Style'

const CL = {
  BR: "provider__note__br"
};

const OPEN_COLOR_L2 = C.GREEN;

const ST = {
  ROOT_CHILD: {
    borderLeft: `1px dashed ${C.YELLOW}`,
    marginLeft: -5,
    paddingLeft: 8
  },
  OPEN_CLOSE: {
    paddingTop: 6,
    lineHeight: 1.8
  },
  CHILD_STYLE: {
    borderLeft: `1px dotted ${C.GREEN}`,
    marginLeft: 2,
    paddingLeft: 6
  },
  P4: {
    paddingTop: 4
  },
  NOTE: {
    padding: '8px 4px 4px 6px',
    lineHeight: 1.4
  },
  MAX_WIDTH: {
    maxWidth: 450
  },
  SETTINGS: {
    color: '#607d8b'
  }
};

const DataProviders = ({ isClose, ocCaptionStyle }) => (
  <OpenClose
     isClose={isClose}
     caption="Data Providers (All 22):"
     style={{...S.LINE_HEIGHT, ...S.P_BOTTOM}}
     captionStyle={ocCaptionStyle}
     openColor={C.YELLOW}
     childStyle={ST.ROOT_CHILD}
  >
    <div>
      <p>
        <span style={S.PROVIDER}>
          <Link.Quandl />
          <span style={S.BLACK}>
            &nbsp;(50 per day)
          </span>
        </span>
        <span style={S.PROVIDER}>
          <Link.DbNomics />
        </span>
        <span style={S.PROVIDER}>
          <Link.Eurostat />
        </span>
        <span style={S.PROVIDER}>
          <Link.UnComtrade />
        </span>
        <span style={S.PROVIDER}>
          <Link.WorldBank />
        </span>
        <span style={S.PROVIDER}>
          <Link.Insee/>
        </span>
        <span style={S.PROVIDER}>
          <Link.ONS/>
        </span>
        <span style={S.PROVIDER}>
          <Link.StatNorway />
        </span>
        <span style={S.PROVIDER}>
          <Link.StatSweden />
        </span>
        <span style={S.PROVIDER}>
          <Link.StatFinland />
        </span>
        <span style={S.PROVIDER}>
          <Link.Bsl/>
        </span>
        <span style={S.PROVIDER}>
          <Link.CryptoCompare/>
        </span>
        <span style={S.PROVIDER}>
          <Link.CoinGecko />
        </span>
        <span style={S.PROVIDER}>
          <Link.Coinpaprika />
        </span>
      </p>
      <OpenClose
        caption="(8) Required API Key:"
        style={ST.OPEN_CLOSE}
        captionStyle={ocCaptionStyle}
        openColor={OPEN_COLOR_L2}
        childStyle={ST.CHILD_STYLE}
      >
      <p style={ST.P4}>
        <span style={S.PROVIDER}>
          <Link.Quandl/>
          <span style={S.BLACK}>
             &nbsp;(50 000 per day)
          </span>
        </span>
        <span style={S.PROVIDER}>
          <Link.Barchart/>
        </span>
        <span style={S.PROVIDER}>
          <Link.AlphaVantage/>
        </span>
        <span style={S.PROVIDER}>
          <Link.Iex />
        </span>
        <span style={S.PROVIDER}>
          <Link.Bea/>
        </span>
        <span style={S.PROVIDER}>
          <Link.Eia/>
        </span>
        <span style={S.PROVIDER}>
          <Link.Fmp/>
        </span>
        <span style={S.PROVIDER}>
          <Link.Intrinio/>
        </span>
      </p>
      <div style={ST.NOTE}>
        <p>
          <span style={S.BLACK}>Note:&nbsp;</span>
          User API key from data provider required for request.&nbsp;
          <br className={CL.BR} />
          Can be set in <span style={ST.SETTINGS}>SETTINGS&nbsp;[s]</span>.
        </p>
      </div>
      <div style={ST.NOTE}>
        <p style={ST.MAX_WIDTH}>
          <span style={S.BLACK}>Note:&nbsp;</span>
          This product uses the Bureau of Economic Analysis (BEA)
          Data API but is not endorsed or certified by BEA.
        </p>
      </div>
      </OpenClose>
      <OpenClose
        caption="(2) Required Https Proxy:"
        style={ST.OPEN_CLOSE}
        captionStyle={ocCaptionStyle}
        openColor={OPEN_COLOR_L2}
        childStyle={ST.CHILD_STYLE}
      >
        <p style={ST.P4}>
          <span style={S.PROVIDER}>
           <Link.FaoStat />
          </span>
          <span style={S.PROVIDER}>
            <Link.CryptoCompare/>
            <span style={S.BLACK}>
               &nbsp;(Coin Inform.)
            </span>
          </span>
        </p>
        <div style={ST.NOTE}>
          <p>
            <span style={S.BLACK}>Note:&nbsp;</span>
            Https Proxy is required for CORS Http API services.&nbsp;
            <br className={CL.BR} />
            By default set. Can be changed in <span style={ST.SETTINGS}>SETTINGS&nbsp;[s]</span>.
          </p>
        </div>
      </OpenClose>
     </div>
   </OpenClose>
);

export default DataProviders
