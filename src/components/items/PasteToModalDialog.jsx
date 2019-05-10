import React, { Component } from 'react'

import ModalDialog from '../zhn-moleculs/ModalDialog'
import FlatButton from '../zhn-m/FlatButton'

import SeriesPane from './SeriesPane'


const S = {
  MODAL: {
    position: 'static',
    width: 365,
    height: 340,
    margin: '70px auto 0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: 250,
    paddingRight: 10
  }
};

class PasteToModalDialog extends Component {
  constructor(){
    super()

    this._commandButtons = [
      <FlatButton
        key="paste"
        caption="Paste & Close"
        isPrimary={true}
        onClick={this._handlePasteTo}
      />
    ]
  }

  shouldComponentUpdate(nextProps, nextState){
    if ( nextProps !== this.props
      && nextProps.isShow === this.props.isShow
    ) {
      return false;
    }
    return true;
  }

  _handlePasteTo = () => {
    const { data:dData, onClose } = this.props
    , { toChart } = dData || {};

    this.seriesPaneComp
      .getValues()
      .forEach(conf => {
         const { color, toYAxis={}, data } = conf;
         toChart.zhAddSeriaToYAxis({
             data, color, index: toYAxis.value
         })
      })

    onClose()
  }

  _refSeriesPaneComp = comp => this.seriesPaneComp = comp

  render(){
    const {
        isShow, data={}, onClose
      } = this.props
    , { fromChart, toChart } = data;
    return (
      <ModalDialog
        style={S.MODAL}
        caption="Paste Series To"
        isShow={isShow}
        commandButtons={this._commandButtons}
        onClose={onClose}
      >
        <SeriesPane
           ref={this._refSeriesPaneComp}
           rootStyle={S.SCROLL_PANE}
           fromChart={fromChart}
           toChart={toChart}
        />
      </ModalDialog>
    );
  }
}

export default PasteToModalDialog
