import React from 'react'

import CA, { ComponentActionTypes as CAT } from '../../flux/actions/ComponentActions'
import BA from '../../flux/actions/BrowserActions'
import { T as LPAT } from '../../flux/actions/LoadingProgressActions'

import use from '../hooks/use'
import Comp from '../Comp'

import ProgressLoading from './ProgressLoading'
import AppLabel from './AppLabel'
import IconLogoErc from './IconLogoErc'
import HotBar from './HotBar'
import LimitRemainingLabel from './LimitRemainingLabel'
import crBrowserModel from './BrowserModel'

const {
  FlatButton, ModalButton,
  SvgSettings, SvgInfo,
  ModalSlider
} = Comp;

const { useTheme, useToggle, useFnFocus } = use;

const LOGO_TITLE = "Web app ERC (Economic RESTful Client)"
    , CAPTION = "ERC v0.17.0";

const ID = 'HEADER_BAR';

const CL = {
  HEADER: "header",
  ICON: `header__icon-erc`,
  LABEL: "header__app-label",
  BM: "popup-menu header__panel-browser",
  TOPICS: "header__bt-topics",
  ARROW: "arrow-down",
  QUANDL: "header__bt-quandl",
  EUROSTAT: "header__bt-eurostat",
  WATCH: "header__bt-watch",
  BTS_RIGHT: "header__bts-right",
  ABOUT: "header__bt-about",

  BROWSER_MENU: "popup-menu header__panel-browser"
};

const STYLE = {
  SVG_BT: {
    position: 'relative',
    top: -1,
    verticalAlign: 'middle',
    marginLeft: 8,
    marginRight: 8
  }
};

const MODEL = crBrowserModel();

const HeaderBar = ({ store, showSettings }) => {
  const [isTopics, toggleTopics] = useToggle(false)
  , [refBt, _toggleTopics] = useFnFocus(toggleTopics)
  , TS = useTheme(ID);

  return (
    <div className={CL.HEADER} style={TS.ROOT} >
       <ProgressLoading store={store} ACTIONS={LPAT} />
       <IconLogoErc
          className={CL.ICON}
          title={LOGO_TITLE}
       />
       <AppLabel
          className={CL.LABEL}
          caption={CAPTION}
       />
       <ModalButton
           refBt={refBt}
           className={CL.TOPICS}
           rootStyle={TS.BT}
           caption="Topics"
           title="Click to open topics menu"
           accessKey="t"
           onClick={_toggleTopics}
        >
          <span className={CL.ARROW} />
        </ModalButton>
        <FlatButton
          className={CL.QUANDL}
          style={TS.BT}
          caption="Quandl"
          title="Quandl Browser"
          accessKey="q"
          onClick={BA.showQuandl}
        />
        <FlatButton
          className={CL.EUROSTAT}
          style={TS.BT}
          caption="Eurostat"
          title="Eurostat Statistics Browser"
          accessKey="u"
          onClick={BA.showEurostat}
        />
        <FlatButton
           className={CL.WATCH}
           style={TS.BT}
           caption="Watch"
           title="Watch List Browser"
           accessKey="w"
           onClick={BA.showWatch}
        />
        <HotBar
          store={store}
          closeDialogAction={CAT.CLOSE_DIALOG}
          onShowDialog={CA.showDialog}
        />
        <div className={CL.BTS_RIGHT}>
          <LimitRemainingLabel
             store={store}
          />
          <FlatButton
             style={TS.BT}
             isPrimary={true}
             title="User Settings Dialog"
             accessKey="s"
             timeout={500}
             onClick={showSettings}
           >
             <SvgSettings style={STYLE.SVG_BT} />
           </FlatButton>
           <FlatButton
             className={CL.ABOUT}
             style={TS.BT}
             title="About Web Application ERC"
             accessKey="a"
             timeout={0}
             onClick={CA.showAbout}
           >
             <SvgInfo style={STYLE.SVG_BT} />
           </FlatButton>
        </div>
         <ModalSlider
           isShow={isTopics}
           className={CL.BROWSER_MENU}
           INIT_ID="page_0"
           model={MODEL}
           onClose={_toggleTopics}
         />
    </div>
  );
}

export default HeaderBar
