
import Big from 'big.js'

import C from '../constants/Color'

const _compareArrByIndex = index => (arrA, arrB) => {
  if (arrA[index] < arrB[index]) return -1;
  else if (arrA[index] === arrB[index]) return 0;
  else return 1;
}
const _compareByTwoProp = (propName1, propName2) => (a, b) => {
  if (a[propName1] < b[propName1]) return -1;
  else if (a[propName1] > b[propName1]) return 1;
  else if (a[propName2] < b[propName2]) return -1;
  else if (a[propName2] > a[propName2]) return 1;
  else return 0;
}

const AdapterFn = {
  ymdToUTC(date) {
    const _arr = date.split('-')
    return Date.UTC(
      _arr[0], (parseInt(_arr[1], 10)-1), _arr[2]
    );
  },
  ymdtToUTC(date) {
    const _arr = date.split('-')
        , _d = _arr[2].split(' ')[0];
    return Date.UTC(
      _arr[0], (parseInt(_arr[1], 10)-1), _d
    );
  },
  ymdhmsToUTC(date) {
    const _dtArr = date.split(' ')
    , _ymdArr = _dtArr[0].split('-')
    , _hmsArr = _dtArr[1].split(':');
    return Date.UTC(
      _ymdArr[0], (parseInt(_ymdArr[1], 10)-1), _ymdArr[2],
      _hmsArr[0], _hmsArr[1], _hmsArr[2]
    );
  },

  volumeColumnPoint({ date, open, close, volume, option }) {
    let _color;
    if (open && close > open) {
      _color = C.GREEN
    } else if (open && close<open) {
      _color = C.RED
    } else {
      _color = C.GRAY
    }

    return Object.assign({
      x: date, y: volume, color: _color,
      _open: open, _close: close
    }, option);
  },

  athPoint({ date, prevClose, open }) {
    const _bDelta = (open && prevClose)
             ? Big(prevClose).minus(open)
             : Big('0.0')
        , _bPercent = (prevClose)
             ? _bDelta.times(100).div(prevClose).abs().toFixed(2)
             : Big('0.0');

    let _color;
    if (_bDelta.gt(0.0)){
      _color = C.RED;
    }
    else if (!_bDelta.gte(0.0)){
      _color = C.GREEN;
    } else {
      _color = (open) ? C.GRAY : C.WHITE;
    }

    return {
      x : date,
      y : parseFloat(_bPercent),
      close : prevClose,
      open : open ? open : 'Unknown',
      color : _color
    };
  },

  legendItem(index, color, name, is=false){
    return {
      index, color, name,
      isVisible: is
    };
  },

  stockSeriesLegend(){
    return [
      this.legendItem(0, C.S_STOCK_CLOSE, 'Close', true),
      this.legendItem(1, C.S_HIGH, 'High'),
      this.legendItem(2, C.S_LOW, 'Low'),
      this.legendItem(3, C.S_OPEN, 'Open')
    ];
  },

  compareByDate: _compareArrByIndex(0),
  compareByY: _compareArrByIndex('y'),
  compareByValue: _compareArrByIndex('value'),
  compareByValueId: _compareByTwoProp('value', 'id')

}

export default AdapterFn