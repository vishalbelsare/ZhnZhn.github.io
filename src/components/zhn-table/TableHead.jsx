import React, { Component } from 'react'

import isKeyEnter from '../zhn/isKeyEnter'
import SvgMore from '../zhn/SvgMore'

import S from './Style'
import FN from './tableFn'

const C = {
  UP: 'UP',
  DOWN: 'DOWN',

  ASC: 'ascending',
  DESC: 'descending'
};

const ThMore = ({ name, onMenuMore }) => (
  <>
    <SvgMore
       style={S.BT_SVG_MORE}
       svgStyle={S.SVG_MORE}
       onClick={onMenuMore}
    />
    <span style={S.TH_MORE_SPAN}>
      {name}
    </span>
  </>
);

class TableHead extends Component {

  /*
  static propTypes = {
    gridId: PropTypes.string,
    thMoreStyle: PropTypes.object,
    headers: PropTypes.arrayOf(
       PropTypes.shape({
        isHide: PropTypes.bool,
        name: PropTypes.string,
        pn: PropTypes.string,
        isR: PropTypes.bool,
        isF: PropTypes.bool,
        isHref: PropTypes.bool,
        style: PropTypes.object
      })
    ),
    sortBy: PropTypes.string,
    sortTo: PropTypes.string,
    onSort: PropTypes.func,
    onMenuMore: PropTypes.func
  }
  */

  _hThKeyDown = (pn, evt) => {
    if (isKeyEnter(evt)) {
      this.props.onSort(pn)
    }
  }

  _renderHeader = () => {
    const {
      gridId, thMoreStyle, headers,
      sortBy, sortTo, onSort, onMenuMore
    } = this.props;
    return headers.map((h, hIndex) => {
      if (h.isHide) {
        return null;
      }
      const { name, pn } = h
      , {
          style,
          ariaSort, ariaLabel
        } = FN.crAppearance({
              S, C, pn, name, sortBy, sortTo
            })
      , _nameOrEl = hIndex === 0
          ? (<ThMore
               name={name}
               onMenuMore={onMenuMore}
             />)
          : name
      , _thStyle = hIndex === 0
           ? {...thMoreStyle, ...style}
           : style;
      return (
        <th
          key={h.name}
          style={{...S.TH, ..._thStyle }}
          rowSpan="1"
          colSpan="1"
          tabIndex="0"
          arial-controls={gridId}
          aria-label={ariaLabel}
          aria-sort={ariaSort}
          onClick={onSort.bind(null, pn)}
          onKeyDown={this._hThKeyDown.bind(null, pn)}
        >
          {_nameOrEl}
        </th>
      );
    }).filter(Boolean);
  }

  render(){
    return (
      <thead style={S.THEAD}>
         <tr>
           {this._renderHeader()}
         </tr>
      </thead>
    );
  }
}

export default TableHead
