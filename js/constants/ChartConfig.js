'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartConfig = {};

ChartConfig.theme = {
  credits: {
    enabled: true,
    position: {
      align: 'left',
      x: 150,
      verticalAlign: 'top',
      y: 15
    }
  },
  chart: {
    //width: 600,
    height: 300,
    spacingTop: 20,
    spacingBottom: 24,
    plotBackgroundColor: "rgba(77,77,77,1)",
    backgroundColor: "rgba(77,77,77,1)",
    reflow: false,

    events: {
      load: function load() {
        this.zhTooltip = new _highcharts2.default.Tooltip(this, this.options.tooltip);
      }
    }
  },
  colors: ['#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
  labels: {
    items: []
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [[0, "rgba(69, 114, 167, 1)"], [1, "rgba(2, 0, 0, 0)"]]
      },
      marker: {
        states: {
          hover: {
            enabled: true,
            radiusPlus: 2
          }
        }
      }
    },
    series: {
      stickyTracking: false,
      events: {
        click: function click(event) {
          this.chart.zhTooltip.refresh(event.point, event);
        }
      }
    }
  },
  tooltip: {
    useHTML: true,
    enabled: false,
    hideDelay: 100,
    followPointer: false,
    shared: false,

    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderWidth: 2,
    borderRadius: 10,

    headerFormat: '<span style="font-weight: bold; font-size: 12px; color:rgba(194,149,23,1);">{point.key}</span><br/>',
    pointFormat: '<span style="color:rgba(69, 114, 167, 1);font-weight:bold;">Value: </span>' + '<span style="font-weight: bold; color:rgba(194,149,23,1);">{point.y}</span><br/>'
  },
  xAxis: {
    lineColor: "rgba(194,149,23,1)",
    lineWidth: 3,
    tickColor: "rgba(194,149,23,1)",
    tickWidth: 3,
    tickLenght: 5,
    gridLineColor: "rgba(194,149,23,1)",
    gridLineDashStyle: "ShortDashDotDot",
    gridLineWidth: 1,
    labels: {
      style: {
        color: "rgba(194,149,23,1)",
        fontWeight: "rgba(194,149,23,1)"
      }
    }
  },
  yAxis: {
    lineColor: "rgba(194,149,23,1)",
    lineWidth: 3,
    tickColor: "rgba(194,149,23,1)",
    tickWidth: 3,
    tickLenght: 5,
    gridLineColor: "rgba(194,149,23,1)",
    gridLineDashStyle: "ShortDashDotDot",
    labels: {
      style: {
        color: "rgba(194,149,23,1)",
        fontWeight: "rgba(194,149,23,1)"
      }
    }
  }
};

ChartConfig.fnNumberFormat = function (value) {
  var arrSplit = (value + '').split('.'),
      decimal = arrSplit[1] ? arrSplit[1].length : 0;

  return _highcharts2.default.numberFormat(value, decimal, '.', ' ');
};

ChartConfig.fBaseAreaConfig = function () {
  return {

    zhSeries: {
      count: 0
    },
    zhDetailCharts: [],

    chart: {
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 48
        },
        relativeTo: 'chart'
      },
      marginRight: 45
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      labels: {},
      crosshair: {
        color: 'yellow',
        width: 1
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      plotLines: [{
        value: 0.00,
        color: 'green',
        dashStyle: 'solid',
        width: 1,
        zIndex: 4,
        label: {
          text: 'max',
          verticalAlign: 'top',
          style: {
            color: 'green',
            fontWeight: 'bold',
            fontSize: 'medium'
          }
        }
      }, {
        value: 0.00,
        color: '#ED5813',
        dashStyle: 'solid',
        width: 1,
        zIndex: 4,
        label: {
          text: 'min',
          verticalAlign: 'top',
          y: 15,
          style: {
            color: '#ED5813',
            fontWeight: 'bold',
            fontSize: 'medium'
          }
        }
      }]
    },
    series: [{
      zhValueText: 'Value',
      type: 'area',
      tooltip: {
        pointFormatter: _Tooltip2.default.fnBasePointFormatter,
        headerFormat: ''
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      }
    }]
  };
};

ChartConfig.legendVolume = {
  enabled: true,
  align: 'left',
  verticalAlign: 'top',
  x: 110,
  y: -2,
  floating: true,

  symbolHeight: 12,
  symbolWidth: 12,
  symbolRadius: 6,

  itemStyle: {
    color: 'rgba(164, 135, 212, 1)'
  },
  itemHoverStyle: {
    color: '#2F7ED8'
  },
  itemHiddenStyle: {
    color: 'gray'
  }
};

ChartConfig.fMarkerExDividend = function () {
  return {
    y: 0,
    exValue: 0.5,
    marker: {
      symbol: 'circle',
      fillColor: 'rgba(0, 128, 0, 0.9)',
      radius: 6,
      states: {
        hover: {
          enable: true,
          fillColor: '#4D4D4D',
          lineColor: 'green',
          lineWidth: 2,
          radius: 6
        }
      }
    },
    dataLabels: {
      enabled: true,
      inside: true,
      style: {
        color: 'green',
        fontSize: '11px',
        fontWeight: 'bold',
        textShadow: 'none'
      },
      crop: false,
      overflow: 'none',
      y: 32,
      formatter: function formatter() {
        return this.point.exValue;
      }
    }
  };
};

ChartConfig.fMarkerSplitRatio = function () {
  var objPoint = ChartConfig.fMarkerExDividend();
  objPoint.marker.fillColor = '#ED5813';
  objPoint.marker.states.hover.lineColor = '#ED5813';
  objPoint.dataLabels.style.color = '#ED5813';
  objPoint.dataLabels.formatter = function () {
    return this.point.splitRatio;
  };
  return objPoint;
};

var _fScatterSeria = function _fScatterSeria(color, pointFormatter, data) {
  return {
    type: 'scatter',
    color: color,
    tooltip: {
      pointFormatter: pointFormatter,
      headerFormat: ''
    },
    data: data
  };
};
ChartConfig.fExDividendSeria = function (data) {
  return _fScatterSeria('green', _Tooltip2.default.fnExDividendPointFormatter, data);
};
ChartConfig.fSplitRatioSeria = function (data) {
  return _fScatterSeria('#ED5813', _Tooltip2.default.fnSplitRatioPointFormatter, data);
};

ChartConfig.fSeries = function () {
  return {
    type: 'spline',
    lineWidth: 1,
    tooltip: {
      pointFormatter: _Tooltip2.default.fnBasePointFormatter,
      headerFormat: ''
    }
  };
};

ChartConfig.creditsMetric = {
  position: {
    align: 'right',
    x: -10,
    verticalAlign: 'bottom',
    y: -5
  }
};

ChartConfig.fTitleMetric = function (text) {
  return {
    text: text,
    style: {
      color: 'rgba(164, 135, 212, 1)',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    floating: true,
    align: 'left',
    verticalAlign: 'top',
    x: 8,
    y: 15
  };
};

ChartConfig.zoomMetricCharts = function (event) {
  var zhDetailCharts = this.chart.options.zhDetailCharts;
  if (event.userMin) {
    zhDetailCharts.forEach(function (chart) {
      chart.xAxis[0].setExtremes(event.userMin, event.userMax, true, true);
    });
  } else {
    zhDetailCharts.forEach(function (chart) {
      chart.xAxis[0].setExtremes(event.min, event.max, true, true);
    });
  }
};

exports.default = ChartConfig;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\constants\ChartConfig.js.map