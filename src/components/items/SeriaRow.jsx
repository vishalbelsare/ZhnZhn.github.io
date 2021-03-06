import React, { Component } from 'react'

import Model from '../../constants/Model'
import HandleF from '../f-handle/HandleF'

import CellColor from '../zhn-moleculs/CellColor'
import ModalPalette from '../zhn-moleculs/ModalPalette'
import InputSelect from '../zhn-select/InputSelect'
import D from '../dialogs/DialogCell'

const DF = {
  COLOR: '#7cb5ec'
};
const CL = {
  ELL: 'ellipsis'
};
const S = {
  ROOT: {
    paddingLeft: 16,
    paddingBottom: 16
  },
  TITLE: {
    verticalAlign: 'middle',
    color: 'rgb(27, 117, 187)',
    textAlign: 'right',
    width: 100,
    paddingLeft: 4,
    paddingRight: 16,
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none'
  },
  COLOR: {
    position: 'relative',
    display: 'inline-block',
    height: 32,
    width: 32,
    borderRadius: 2,
    verticalAlign: 'middle',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  },
  ROW_CHECK_BOX: {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingLeft: 0
  },
  SELECT: {
     verticalAlign: 'middle',
     marginLeft: 24
  },
  SELECT_OPTIONS: {
    minHeight: 100
  }
};

class SeriaRow extends Component {
  constructor(){
    super()

    this.isChecked = false
    this._hCheck = HandleF
      .set('isChecked', true)
      .bind(this)
    this._hUnCheck = HandleF
      .set('isChecked', false)
      .bind(this)

    this._hSelectYAxis = HandleF
      .reg('toYAxis')
      .bind(this)

    this._hRegCellColor = HandleF
      .reg('cellColorNode')
      .bind(this)
    this._hEnterColor = HandleF
      .enterTo('colorEntered')
      .bind(this)
    this._hClosePalette = HandleF
      .closeTo('isShowPallete')
      .bind(this)
    this._hClickPallete = HandleF
      .toggleModalTo('isShowPallete', 'cellColorNode')
      .bind(this)

    this.state = {
      isShowPallete: false,
      colorEntered: void 0
    }
  }

  componentDidMount(){
    const { onReg } = this.props;
    if (typeof onReg === 'function') {
      onReg(this)
    }
  }
  componentWillUnmount(){
    const { onUnReg } = this.props;
    if (typeof onUnReg === 'function') {
      onUnReg(this)
    }
  }

  _getColor = () => {
    const { colorEntered } = this.state
        , { color } = this.props.seria.options;
    return colorEntered || color || DF.COLOR;
  }

  render(){
    const { isShowPallete } = this.state
        , { seria={}, yAxisOptions } = this.props
        , { name, options={} } = seria
        , { zhValueText } = options
        , _name = zhValueText || name
        , _bgColor = { backgroundColor: this._getColor() };

    return (
      <div style={S.ROOT}>
        <D.RowCheckBox
           rootStyle={S.ROW_CHECK_BOX}
           caption=""
           onCheck={this._hCheck}
           onUnCheck={this._hUnCheck}
        />
        <span
           className={CL.ELL}
           style={S.TITLE}
        >
          {_name}
        </span>
        <CellColor
           style={{ ...S.COLOR, ..._bgColor}}
           onReg={this._hRegCellColor}
           onClick={this._hClickPallete}
        >
          <ModalPalette
             isShow={isShowPallete}
             model={Model.palette}
             onClickCell={this._hEnterColor}
             onClose={this._hClosePalette}
          />
        </CellColor>
        <InputSelect
          placeholder="withYAxis"
          width="150"
          rootStyle={S.SELECT}
          rootOptionsStyle={S.SELECT_OPTIONS}
          options={yAxisOptions}
          onSelect={this._hSelectYAxis}
        />
      </div>
    )
  }

  getValue() {
    return {
      isChecked: this.isChecked,
      color: this._getColor(),
      yIndex: this.toYAxis ? this.toYAxis.value : void 0,
      data: this.props.seria.userOptions.data
    };
  }
}

export default SeriaRow
