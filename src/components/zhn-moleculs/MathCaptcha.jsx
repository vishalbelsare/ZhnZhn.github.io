import React, { Component } from 'react';
//import PropTypes from "prop-types";

import InputSlider from '../zhn/InputSlider'

const MSG = 'Before loading, please, enter sum using slider'

const S = {
  MSG: {
    color: 'grey',
    fontWeight: 'bold'
  },
  P_SUM: {
    textAlign: 'center',
    fontSize: '22px',
    paddingTop: 4
  },
  SUM_OK: {
    color: '#4caf50'
  },
  SUM_NOT_OK: {
    color: '#f44336'
  }
};

const _crRandomNumber = (m=0, n=10) => {
  return m + (Math.floor((n-m+1)*Math.random()));
}

class MatchCaptcha extends Component {
  /*
  static propTypes = {
    rootStyle: PropTypes.object
  }
  */

  constructor(props){
    super(props)
    this.firstNumber = _crRandomNumber(0, 10)
    this.secondNumber = _crRandomNumber(0, 10)
    this.state = {
      isOk: false,
      resultSum: ''
    }
  }

  _hChangeSlider = (event, value) => {
    const _isOk = (this.firstNumber + this.secondNumber === value)
      ? true
      : false;
    this.setState({
       isOk: _isOk,
       resultSum: value
    })
  }

  render(){
    const { rootStyle } = this.props
    , { isOk, resultSum } = this.state
    , _sumStyle = isOk
         ? S.SUM_OK
         : S.SUM_NOT_OK;
    return(
      <div style={rootStyle} >
        <p style={S.MSG}>
          {MSG}
        </p>
        <p style={S.P_SUM}>
          <span>
            {`${this.firstNumber} + ${this.secondNumber} = `}
          </span>
          <span style={_sumStyle}>
            {resultSum}
          </span>
        </p>
        <InputSlider
            onChange={this._hChangeSlider}
        />
      </div>
    );
  }

  isOk() {
    return this.state.isOk;
  }

}

export default MatchCaptcha
