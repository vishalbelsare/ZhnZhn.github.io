import BrowserConfig from '../../../constants/BrowserConfig';

import crMenu from './crMenu'
import addDialogPropsTo from './addDialogPropsTo'
import findItem from './findItem'

const BrowserLogic = {
  crMenu: crMenu,

  isWithItemCounter: (browserType) => {
    const _config = BrowserConfig[browserType];
    return typeof _config === 'undefined'
      ? false
      : !_config.withoutItemCounter;
  },

  initBrowseMenu: (slice, option) => {
    const { json, browserType } = option
        , { menu, items } = json
        , elMenu = crMenu(menu, items, browserType);
    addDialogPropsTo(items);
    slice.routeDialog[browserType] = items;
    slice.browserMenu[browserType] = elMenu;
    return elMenu;
  },

  setIsOpen: (value, appMenu, bT, cT) => {
    if (BrowserLogic.isWithItemCounter(bT)) {
      const item = findItem(appMenu[bT], cT);
      if (item) {
        item.isOpen = value;
      }
    }
  },
  plusCounter: (value, appMenu, bT, cT) => {
    if (BrowserLogic.isWithItemCounter(bT)) {
      const item = findItem(appMenu[bT], cT);
      if (item){
        item.counter += value;
        item.isOpen = true;
      }
    }
  }
};

export default BrowserLogic
