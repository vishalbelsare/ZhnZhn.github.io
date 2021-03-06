import React, { Component } from 'react'

import CaptionInput from './CaptionInput'

const CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
const S = {
  PRIMARY: {
    color: '#607d8b'
  }
};
const POINTER_EVENTS = 'pointer-events';

const _isNotZeroNumber = n => n
 && typeof n === 'number'
 && n-n === 0;

class FlatButton extends Component {

  static defaultProps = {
    timeout: 3000
  }

  _setPointerEvents = (value='auto') => {
    if (this && this.rootNode && this.rootNode.style) {
       this.rootNode.style[POINTER_EVENTS] = value
    }
  }

  _hClick = (event) => {
    const { timeout, onClick } = this.props;
    if (_isNotZeroNumber(timeout)) {
      this._setPointerEvents('none')
      setTimeout(this._setPointerEvents, timeout)
    }
    onClick(event)
  }

  _refNode = node => this.rootNode = node

  render() {
    const {
           className, style, clDiv=CL.BT_DIV, isPrimary,
           title='', caption, accessKey,
           children
          } = this.props
        , _style = isPrimary
             ? {...style, ...S.PRIMARY }
             : style
        , _className = className
             ? `${CL.BT} ${className}`
             : CL.BT
        , _title = accessKey
             ? `${title} [${accessKey}]`
             : title;
  return (
    <button
      type="button"
      ref = {this._refNode}
      className={_className}
      style={_style}
      accessKey={accessKey}
      tabIndex={0}
      title={_title}
      onClick={this._hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={CL.BT_SPAN}
          caption={caption}
          accessKey={accessKey}
        />
        {children}
      </div>
    </button>
  );
 }

}

export default FlatButton
