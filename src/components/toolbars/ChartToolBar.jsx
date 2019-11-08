import React, { Component } from 'react';
//import PropTypes from "prop-types";

import ButtonTab from '../zhn/ButtonTab'

import MenuTabItem from '../zhn-moleculs/MenuTabItem'
import ModalMenuIndicator from './ModalMenuIndicator'
import ModalMenuFn from './ModalMenuFn'
import ModalMenuMini from './ModalMenuMini'

const S = {
  TAB_INDICATOR: {
    left: 10
  },
  PANE_INDICATOR: {
     width: 240
  },
  BT_LEGEND: {
    left: 115
  },
  TAB_MINI: {
    left: 350
  },
  TAB_FN: {
    left: 190
  },
  BT_ADD: {
    left: 250
  },
  BT_CONF: {
    left: 430
  }
};

const INDICATOR_TAB_TYPES = [ 'area', 'spline', 'line' ];
const _isIndicatorTab = ({ series }, isWithoutIndicator) => !isWithoutIndicator
  && Array.isArray(series)
  && series[0]
  && INDICATOR_TAB_TYPES.indexOf(series[0].type) !== -1;

class ChartToolbar extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,
    config: PropTypes.object
  }
  */

  shouldComponentUpdate(){
    return false;
  }

  render(){
    const {
            style, config={},
            chartId,
            onMiniChart,
            getChart,
            onAddMfi, onRemoveMfi,
            onClickLegend,
            onClick2H,
            onAddToWatch,
            onCopy,
            onPasteTo,
            onMinMax,
            onZoom,
            onClickInfo
          } = this.props
        , { zhConfig={}, info, zhMiniConfigs } = config
        , { isWithoutIndicator, isWithLegend, isWithoutAdd } = zhConfig;

    const _btTabIndicator = _isIndicatorTab(config, isWithoutIndicator) ? (
      <MenuTabItem
        style= {S.TAB_INDICATOR}
        caption="Indicator"
      >
        <ModalMenuIndicator
          chartId={chartId}
          config={config}
          getChart={getChart}
          onAddMfi={onAddMfi}
          onRemoveMfi={onRemoveMfi}
        />
      </MenuTabItem>
     ) : null;

    const _btLegend = isWithLegend ? (
      <ButtonTab
        style={S.BT_LEGEND}
        caption="Legend"
        onClick={onClickLegend}
      />
    ) : null;

    const _btAdd = !isWithoutAdd ? (
      <ButtonTab
        style={S.BT_ADD}
        caption="Add"
        isUpdatable={false}
        onClick={onAddToWatch}
      />
    ) : null;

    const _btInfo = info ? (
      <ButtonTab
        caption="Info"
        onClick={onClickInfo}
      />
    ) : null;

  const _btTabMini = zhMiniConfigs && zhMiniConfigs.length
      ? (
       <MenuTabItem
         style= {S.TAB_MINI}
         caption="Mini"
       >
         <ModalMenuMini
           configs={zhMiniConfigs}
           onClickItem={onMiniChart}
         />
       </MenuTabItem>
     ) : null;


    return (
      <div style={style}>
         {_btTabIndicator}
         {_btLegend}
         <MenuTabItem
           style={S.TAB_FN}
           caption="Fn"
         >
           <ModalMenuFn
             config={config}
             getChart={getChart}
             onX2H={onClick2H}
             onMinMax={onMinMax}
             onZoom={onZoom}
             onCopy={onCopy}
             onPasteTo={onPasteTo}
           />
         </MenuTabItem>
         {_btAdd}
         {_btInfo}
         {_btTabMini}    
      </div>
    );
  }
}

export default ChartToolbar