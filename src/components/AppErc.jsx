
import React from 'react';

import ChartStore from '../flux/stores/ChartStore';
import HeaderBar from './header/HeaderBar';

import BrowserContainer from './browser-container/BrowserContainer';
import About from './about/About';
import ComponentHrzContainer from './chart-container/ComponentHrzContainer';
import DialogContainer from './dialogs/DialogContainer';

const AppErc = React.createClass({
  render(){
    return (
      <div>
        <HeaderBar store={ChartStore} />
        <div className="component-container">
           <BrowserContainer store={ChartStore} />
           <About store={ChartStore} isShow={true} />
           <ComponentHrzContainer />
       </div>
       <DialogContainer store={ChartStore} />
     </div>
    )
  }
});

export default AppErc
