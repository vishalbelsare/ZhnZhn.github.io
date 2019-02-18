webpackJsonp([6],{510:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(560),i=n(a),l=o(561),r=n(l),s=o(562),u=n(s),d={Indicator:i.default,Intraday:r.default,Sector:u.default};e.default=d},560:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,i,l,r=o(2),s=n(r),u=o(3),d=n(u),c=o(4),h=n(c),f=o(5),p=n(f),m=o(0),_=n(m),S=o(29),b=n(S),w=o(38),T=n(w),C=o(37),g=n(C),v={INDICATOR:"SMA",PERIOD:30,FOR_DAYS:501},O="hasSecondYAxis",k=function(t){return""!==String(t).trim()},y=function(t,e){return function(o){if(""===String(o).trim())return!0;var n=parseInt(String(o).trim(),10);return!Number.isNaN(n)&&n>t&&n<e}},D=y(0,201),I=y(250,2500),M=function(t,e){switch(t){case"MACD":return"MACD(12, 24, 9)";case"STOCH":return"STOCH(5, 3, 3, SMA)";default:return t+" ("+e+")"}},E=(a=T.default.withToolbar,i=T.default.withLoad,a(l=i(l=function(t){function e(t){(0,s.default)(this,e);var o=(0,h.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._handleClickOptions=function(){o.setState({isShowOptions:!o.state.isShowOptions})},o._handleSelectOne=function(t){o.indicator=t},o._handleLoad=function(){var t=o.periodComp.isValid()&&""!==o.periodComp.getValue()?o.periodComp.getValue():v.PERIOD,e=o.forDaysComp.isValid()&&""!==o.forDaysComp.getValue()?o.forDaysComp.getValue():v.FOR_DAYS,n=o.ticketComp.isValid()?o.ticketComp.getValue():void 0,a=o.indicator?o.indicator.value:v.INDICATOR,i={loadId:"AL",indicator:a,ticket:n,period:t,forDays:e,value:M(a,t),hasSecondYAxis:o[O]};o.props.onLoad(i)},o._handleClose=function(){o.props.onClose()},o._refTicket=function(t){o.ticketComp=t},o._refPeriod=function(t){o.periodComp=t},o._refForDays=function(t){o.forDaysComp=t},o._handleMode=function(t,e){o[t]=e},o._menuMore=(0,g.default)(o,{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(t,{noDate:!0}),o.toolbarButtons.push({caption:"O",title:"Toggle Options Input",onClick:o._handleClickOptions}),o._commandButtons=o._crCommandsWithLoad(o),o.state={isToolbar:!0,isShowLabels:!0,isShowOptions:!1},o}return(0,p.default)(e,t),(0,d.default)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props===t||this.props.isShow!==t.isShow}},{key:"render",value:function(){var t=this.props,e=t.isShow,o=t.caption,n=t.oneURI,a=t.oneJsonProp,i=t.oneCaption,l=t.onShow,r=t.onFront,s=this.state,u=s.isToolbar,d=s.isShowLabels,c=s.isShowOptions;return _.default.createElement(b.default.DraggableDialog,{isShow:e,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:l,onFront:r,onClose:this._handleClose},_.default.createElement(b.default.Toolbar,{isShow:u,buttons:this.toolbarButtons}),_.default.createElement(b.default.SelectWithLoad,{isShow:e,isShowLabels:d,uri:n,jsonProp:a,caption:i,optionNames:"Items",onSelect:this._handleSelectOne}),_.default.createElement(b.default.RowPattern,{ref:this._refTicket,isShowLabels:d,title:"Ticket",placeholder:"Nyse or Nasdaq Ticket",onTest:k,errorMsg:"Not Empty"}),_.default.createElement(b.default.ShowHide,{isShow:c},_.default.createElement(b.default.RowPattern,{ref:this._refPeriod,isShowLabels:d,title:"Period",placeholder:"Default: "+v.PERIOD,onTest:D,errorMsg:"Number in range 1-200"}),_.default.createElement(b.default.RowPattern,{ref:this._refForDays,isShowLabels:d,title:"For Days",placeholder:"Default: "+v.FOR_DAYS+" (2 Years)",onTest:I,errorMsg:"Number in range 250-2500"})),_.default.createElement(b.default.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:this._handleMode.bind(null,O,!0),onUnCheck:this._handleMode.bind(null,O,!1)}))}}]),e}(m.Component))||l)||l);e.default=E},561:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,i,l,r=o(2),s=n(r),u=o(3),d=n(u),c=o(4),h=n(c),f=o(5),p=n(f),m=o(0),_=n(m),S=o(29),b=n(S),w=o(38),T=n(w),C=o(37),g=n(C),v={INTERVAL:"15min"},O=function(t){return""!==String(t).trim()},k=[{caption:"1 min",value:"1min"},{caption:"5 min",value:"5min"},{caption:"15 min",value:"15min"},{caption:"30 min",value:"30min"},{caption:"60 min",value:"60min"}],y=(a=T.default.withToolbar,i=T.default.withLoad,a(l=i(l=function(t){function e(t){(0,s.default)(this,e);var o=(0,h.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._handleSelectInterval=function(t){o.interval=t},o._handleLoad=function(){var t=o.ticketComp.isValid()?o.ticketComp.getValue():void 0,e=o.interval?o.interval.value:v.INTERVAL,n=t+" ("+e+")",a={loadId:"AL_I",indicator:"TIME_SERIES_INTRADAY",interval:e,ticket:t,value:n};o.props.onLoad(a)},o._handleClose=function(){o.props.onClose()},o._refTicket=function(t){o.ticketComp=t},o._menuMore=(0,g.default)(o,{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(t,{noDate:!0}),o._commandButtons=o._crCommandsWithLoad(o),o.state={isToolbar:!0,isShowLabels:!0},o}return(0,p.default)(e,t),(0,d.default)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props===t||this.props.isShow!==t.isShow}},{key:"render",value:function(){var t=this.props,e=t.isShow,o=t.caption,n=t.onShow,a=t.onFront,i=this.state,l=i.isToolbar,r=i.isShowLabels;return _.default.createElement(b.default.DraggableDialog,{isShow:e,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},_.default.createElement(b.default.Toolbar,{isShow:l,buttons:this.toolbarButtons}),_.default.createElement(b.default.RowPattern,{ref:this._refTicket,isShowLabels:r,title:"Ticket",placeholder:"Nyse or Nasdaq Ticket",onTest:O,errorMsg:"Not Empty"}),_.default.createElement(b.default.RowInputSelect,{isShowLabels:r,caption:"Interval",placeholder:"Default: 15min",options:k,onSelect:this._handleSelectInterval}))}}]),e}(m.Component))||l)||l);e.default=y},562:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a,i,l,r=o(2),s=n(r),u=o(3),d=n(u),c=o(4),h=n(c),f=o(5),p=n(f),m=o(0),_=n(m),S=o(29),b=n(S),w=o(38),T=n(w),C=o(37),g=n(C),v={ROW_TEXT:{paddingRight:"16px"}},O=(a=T.default.withToolbar,i=T.default.withLoad,a(l=i(l=function(t){function e(t){(0,s.default)(this,e);var o=(0,h.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._handleLoad=function(){var t=o.props,e=t.loadId;(0,t.onLoad)({loadId:e,indicator:"SECTOR"})},o._handleClose=function(){o.props.onClose()},o._menuMore=(0,g.default)(o,{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(t,{noDate:!0,noLabels:!0}),o._commandButtons=o._crCommandsWithLoad(o),o.state={isToolbar:!0},o}return(0,p.default)(e,t),(0,d.default)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props===t||this.props.isShow!==t.isShow}},{key:"render",value:function(){var t=this.props,e=t.isShow,o=t.caption,n=t.onShow,a=t.onFront,i=this.state.isToolbar;return _.default.createElement(b.default.DraggableDialog,{isShow:e,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},_.default.createElement(b.default.Toolbar,{isShow:i,buttons:this.toolbarButtons}),_.default.createElement(b.default.Row.Text,{styleRoot:v.ROW_TEXT,caption:"Alpha:",text:"Performance by Sector"}))}}]),e}(m.Component))||l)||l);e.default=O}});