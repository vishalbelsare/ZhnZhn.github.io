(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{IDOF:function(e,t,o){"use strict";o.r(t);var a,n=o("pVnL"),i=o.n(n),r=o("PJYZ"),s=o.n(r),l=o("VbXa"),c=o.n(l),h=o("q1tI"),u=o.n(h),p=o("4Fsi"),d=p.a.Decor,m=p.a.crMenuMore,g=[{caption:"Export Value",value:{rg:2,measure:"TradeValue"}},{caption:"Export Weight or Quantity",value:{rg:2,measure:"NetWeight"}},{caption:"Export Average Price",value:{rg:2,measure:"avgPrice"}},{caption:"Import Value",value:{rg:1,measure:"TradeValue"}},{caption:"Import Weight or Quantity",value:{rg:1,measure:"NetWeight"}},{caption:"Import Average Price",value:{rg:1,measure:"avgPrice"}}],w={UnDialog5:(0,d.dialog)(a=function(e){function t(t){var o;return(o=e.call(this,t)||this)._handleSelectOne=function(e){o.one=e},o._handleSelectTradeFlow=function(e){o.tradeFlow=e},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var e=[],t=o.groupItem.getValidation(),a=t.isValid,n=t.msg;a||(e=e.concat(n));var i=o.datesFragment.getValidation(),r=i.isValid,s=i.datesMsg;return r||(e=e.concat(s)),e.isValid=0===e.length,e},o._createLoadOption=function(){var e=o.groupItem.getValues(),t=e.one,a=e.two;return o.props.loadFn(o.props,{one:o.one,two:t,three:a,tradeFlow:o.tradeFlow})},o._handleClose=function(){o._handleWithValidationClose()},o._handleMode=function(e,t){o[e]=t},o._refGroupItem=function(e){return o.groupItem=e},o._refDates=function(e){return o.datesFragment=e},o._menuMore=m(s()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(t,{isShowOptions:!0}),o._commandButtons=o._crCommandsWithLoad(s()(o)),o.state=i()({},o._isWithInitialState(),{isShowDate:!1,isShowOptions:!1}),o}c()(t,e);var o=t.prototype;return o.shouldComponentUpdate=function(e,t){return this.props===e||this.props.isShow!==e.isShow},o.render=function(){var e=this.props,t=e.caption,o=e.isShow,a=e.onShow,n=e.onFront,i=e.oneCaption,r=e.oneURI,s=e.oneJsonProp,l=e.twoCaption,c=e.twoURI,h=e.twoJsonProp,d=e.threeCaption,m=e.msgOnNotSelected,w=e.initFromDate,S=e.initToDate,_=e.nForecastDate,f=e.msgOnNotValidFormat,D=e.onTestDate,F=this.state,V=F.isToolbar,v=F.isShowLabels,b=F.isShowDate,T=F.isShowOptions,I=F.validationMessages;return u.a.createElement(p.a.DraggableDialog,{isShow:o,caption:t,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:a,onFront:n,onClose:this._handleClose},u.a.createElement(p.a.Toolbar,{isShow:V,buttons:this.toolbarButtons}),u.a.createElement(p.a.SelectWithLoad,{isShow:o,isShowLabels:v,uri:r,jsonProp:s,caption:i,placeholder:"Default: All",onSelect:this._handleSelectOne}),u.a.createElement(p.a.SelectOneTwo,{ref:this._refGroupItem,isShow:o,isShowLabels:v,uri:c,oneCaption:l,oneJsonProp:h,twoCaption:d,msgOnNotSelected:m}),u.a.createElement(p.a.ShowHide,{isShow:b},u.a.createElement(p.a.DatesFragment,{ref:this._refDates,isShowLabels:v,initFromDate:w,initToDate:S,nForecastDate:_,msgOnNotValidFormat:f,onTestDate:D})),u.a.createElement(p.a.ShowHide,{isShow:T},u.a.createElement(p.a.RowInputSelect,{isShowLabels:v,caption:"Trade Flow",options:g,placeholder:"Default: Export Value",onSelect:this._handleSelectTradeFlow})),u.a.createElement(p.a.ValidationMessages,{validationMessages:I}))},t}(h.Component))||a};t.default=w}}]);