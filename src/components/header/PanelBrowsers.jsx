import React from 'react';

import ShowHide from '../zhn/ShowHide';

const STYLE = {
  ROOT : {
    position : 'absolute',
    zIndex : 10,
    top : '45px',
    left : '100px',

    backgroundColor: 'rgb(77, 77, 77)',
    border : '2px solid rgb(35, 47, 59)',
    borderBottom: '4px solid green',
    borderRadius : '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 5px',

    padding : '10px',
    paddingTop : '5px',
    paddingBottom : '5px',

    width: '210px'    
  }
}


const PanelBrowsers = (props) => {
  const {
          isShow, browserConfig,
          onClickQuandl, onClickDynamic, onClickWatch
        } = props;
  return (
    <ShowHide isShow={isShow} style={STYLE.ROOT}>
      <div>
        <div
          className="row__topic__odd item__quandl"
          onClick={onClickQuandl}
        >
          Quandl Economic
        </div>
        <div
          className="row__topic__even item__quandl"
          onClick={onClickDynamic.bind(null, browserConfig.YAHOO)}
        >
          Quandl Yahoo Stocks
        </div>
        <div
          className="row__topic__odd item__quandl"
          onClick={onClickDynamic.bind(null, browserConfig.GOOGLE)}
        >
          Quandl Google Stocks
        </div>
        <div
          className="row__topic__even item__eurostat"
          onClick={onClickDynamic.bind(null, browserConfig.EUROSTAT)}
        >
          Eurostat
        </div>
        <div
          className="row__topic__odd item__watch"
          onClick={onClickWatch}
        >
          Watch
        </div>
      </div>
    </ShowHide>
 );
};

export default PanelBrowsers