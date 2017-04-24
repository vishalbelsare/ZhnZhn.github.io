
import React, { Component } from 'react';

import { BrowserType } from '../../constants/Type';

import QuandlBrowser from '../quandl-browser/QuandlBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer3 from '../zhn-containers/DialogContainer3';


class BrowserContainer extends Component {
  constructor(props){
    super()
    this.state = {
      elBrowsers : []
    }
  }

  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore)
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, data) => {
     if (actionType === this.props.initBrowserAction){
       this.setState(prevState => {
         prevState.elBrowsers.unshift(data)
         return prevState;
       })
     }
  }

  render(){
    const {
            store, showBrowserAction, updateBrowserAction,
            updateWatchAction,
            initDialogAction, showDialogAction, showOptionDialogAction
          } = this.props
        , { elBrowsers } = this.state;

    return (
      <div className="hrz-container">
           <QuandlBrowser
              browserType={BrowserType.ECONOMIC}
              caption="Quandl Economic"
              store={store}
              showAction={showBrowserAction}
              updateAction={updateBrowserAction}
           />
           <WatchBrowser
              browserType={BrowserType.WATCH_LIST}
              caption="Watch List"
              store={store}
              showAction={showBrowserAction}
              updateAction={updateWatchAction}
            />
           {elBrowsers}
           <DialogContainer3
              maxDialog={3}
              store={store}
              initAction={initDialogAction}
              showAction={showDialogAction}
              showOptionAction={showOptionDialogAction}
           />
      </div>
    );
  }
}

export default BrowserContainer
