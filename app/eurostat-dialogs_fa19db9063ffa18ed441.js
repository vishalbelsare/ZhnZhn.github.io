(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QjmX:function(t,e,o){"use strict";o.r(e);var n,a,i,r,s,l,c,h,p,u,d,S,_,f,m,C=o("pVnL"),g=o.n(C),w=o("PJYZ"),T=o.n(w),b=o("VbXa"),O=o.n(b),D=o("q1tI"),y=o.n(D),v=o("4Fsi"),E=o("/plH"),M=o("H9NR"),L=(0,M.a.dialog)((i=a=function(t){function e(e){var o;return(o=t.call(this,e)||this)._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=[];return o.one||a.push(o.props.msgOnNotSelected(e)),o.two||a.push(o.props.msgOnNotSelected(n)),a.isValid=0===a.length,a},o._createLoadOption=function(){return o.props.loadFn(o.props,{one:o.one,two:o.two})},o._handleClose=function(){o._handleWithValidationClose()},o._menuMore=Object(E.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{noDate:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o.state=g()({},o._isWithInitialState()),o}O()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.oneCaption,r=t.oneURI,s=t.oneJsonProp,l=t.twoCaption,c=t.twoURI,h=t.twoJsonProp,p=this.state,u=p.isToolbar,d=p.isShowLabels,S=p.validationMessages;return y.a.createElement(v.a.DraggableDialog,{caption:e,isShow:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},y.a.createElement(v.a.Toolbar,{isShow:u,buttons:this.toolbarButtons}),y.a.createElement(v.a.SelectWithLoad,{isShow:o,isShowLabels:d,uri:r,jsonProp:s,caption:i,optionNames:"Items",onSelect:this._handleSelectOne}),y.a.createElement(v.a.SelectWithLoad,{isShow:o,isShowLabels:d,uri:c,jsonProp:h,caption:l,optionNames:"Items",onSelect:this._handleSelectTwo}),y.a.createElement(v.a.ValidationMessages,{validationMessages:S}))},e}(D.Component),a.defaultProps={oneCaption:"Item",oneJsonProp:"items",twoCaption:"Metric",twoJsonProp:"metrics"},n=i))||n,B="Before Select Metric",W=12,F=24,I=4,P=3,R=function(t,e){return(t[e]||{}).value},N=function(t,e){var o,n,a=(new Date).getUTCMonth();for(n=0;n<12;n++)(a-=1)>-1?o=e+"M"+(a+1>9?a+1:"0"+(a+1)):(a=11,o=(e-=1)+"M12"),t.push({caption:o,value:o})},k=function(t,e,o){var n,a=(new Date).getUTCMonth(),i=Math.floor((a+1)/3),r=4===i?3:i;for(n=0;n<4;n++)r<1&&(e-=1,r=4),t.push({caption:""+e+o+r,value:""+e+o+r}),r-=1},A=function(t,e){return{dateOptions:t,dateDefault:R(t,e)}},V=function(t){void 0===t&&(t=1);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<W;n++)e.push({caption:""+o,value:""+o}),o-=1;return A(e,t)},U=function(t,e){switch(void 0===t&&(t="M"),t){case"M":return function(t){void 0===t&&(t=2);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<P;n++)N(e,o-n);return A(e,t)}(e);case"Q":case"K":return function(t,e){void 0===t&&(t=1),void 0===e&&(e="Q");for(var o=[],n=(new Date).getUTCFullYear(),a=0;a<I;a++)k(o,n-a,e);return A(o,t)}(e,t);case"S":return function(t){void 0===t&&(t=3);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<F;n++)e.push({caption:o+"S2",value:o+"S2"},{caption:o+"S1",value:o+"S1"}),o-=1;return A(e,t)}();case"Y":return V(e);case"EMPTY":return{dateDefault:B,dateOptions:[]};default:return V(e)}},Y=function(){if(this.date&&this.date.value)return this.date.value;var t=this.state,e=t.dateOptions,o=t.dateDefault;return Array.isArray(e)&&0!==e.length?o:""},x=function(t){Object.assign(t.prototype,{_getDateWithForDate:Y})},j=o("0TwO"),J="AREA",q="AREA_YEARLY",H="SPLINE",G="LINE",Z="COLUMN",Q="MAP",X="COLUMN_SET",z="COLUMN_CLUSTER",K="COLUMN_BY_2",$="BAR_SET",tt="BAR_CLUSTER",et="BAR_BY_2",ot="BAR_WITH_LABELS",nt="DOT_SET",at="TREE_MAP",it="TREE_MAP_CLUSTER",rt="TREE_MAP_2",st="TREE_MAP_2_CLUSTER",lt=[Q,X,z,K,$,tt,et,ot,nt,at,it,rt,st],ct="",ht=function(t){return{caption:t[0],value:t[1],dim:t[2],compType:t[3]}},pt=function(t){return t.map(ht)},ut=function(){return pt([["Default: Spline",H],["Area",J],["Column",Z],["Bar: All Countries",$],["Bar+Labels: All Countries",ot],["Column: All Countries",X],["Dots: All Countries",nt]])},dt=function(){return[ht(["Default: Spline",H]),ht(["Line",G]),ht(["Area",J]),ht(["Column",Z])]},St=function(t){return pt([["Column: By "+t,X,t],["Column: By "+t+": Cluster",z,t],["Bar: By "+t,$,t],["Bar: By "+t+": Cluster",tt,t]])},_t=function(t){var e=t[0];return[ht(["Default: Spline",J])].concat(St(e))},ft=function(t){var e=t[0];return[].concat(_t([e]),[ht(["TreeMap: By "+e,at,e]),ht(["TreeMap: By "+e+": Cluster",it,e])])},mt={DF:function(){return ut().concat(pt([["Map: All Countries",Q,void 0,j.c.EUROSTAT_MAP]]))},t1:function(){return[ht(["Default: Spline",H])]},t2:dt,t2a:function(){return[].concat(dt(),[ht(["Yearly by Months",q])])},t3:_t,t3b:function(t){var e=t[0];return[ht(["Default: Spline",J]),ht(["Yearly by Months",q])].concat(St(e))},t3a:ft,t3a2:function(t){var e=t[0];return[].concat(ft([e]),[ht(["TreeMap: By "+e+": Depth 2",rt,e]),ht(["TreeMap: By "+e+": Depth 2: Cluster",st,e])])},t4:function(t){var e=t[0],o=t[1];return[].concat(_t([e]),[ht(["Column: By "+o,K,o]),ht(["Bar: By "+o,et,o])])},df3:ut},Ct={crOptions:function(t){var e,o,n,a,i,r,s=t.chartsType,l=(o=(e=t).dims,n=e.oneCaption,a=void 0===n?ct:n,i=e.twoCaption,r=void 0===i?ct:i,Array.isArray(o)?o.map((function(t){return t.c||ct})):[a,r]);return(mt[s]||mt.DF)(l)},isCategory:function(t){return!!t&&-1!==lt.indexOf(t.value)}},gt=o("DA9w"),wt={CL:"popup-menu",ROOT:{left:8,zIndex:100,padding:"8px 12px",lineHeight:1.7},ROW_CB:{paddingLeft:0}},Tt=function(t){var e=t.isShow,o=t.style,n=t.className,a=void 0===n?wt.CL:n,i=t.toggleOption,r=t.onClose,s=i.bind(null,"isNotZoomToMinMax"),l=i.bind(null,"isFilterZero");return y.a.createElement(gt.a,{isShow:e,style:g()({},wt.ROOT,{},o),className:a,onClose:r},y.a.createElement(v.a.RowCheckBox,{initValue:!1,rootStyle:wt.ROW_CB,caption:"Not Zoom to Min-Max",onToggle:s}),y.a.createElement(v.a.RowCheckBox,{initValue:!1,rootStyle:wt.ROW_CB,caption:"Filter Zero Values",onToggle:l}))},bt=function(t){return Ct.isCategory(t)},Ot=(0,M.a.dialog)(r=x((l=s=function(t){function e(e){var o;return(o=t.call(this,e)||this)._updateForDate=function(t){o.date=null;var e=o.two?o.props.mapFrequency?o.props.mapFrequency:o.two.mapFrequency?o.two.mapFrequency:"M":null,n=o.props.mapDateDf,a=e?U(e,n):U("EMPTY");o.setState(g()({isShowDate:!0},a,{chartType:t}))},o._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t;var e=o.state.chartType;bt(e)&&o._updateForDate(e)},o._handleSelectChartType=function(t){bt(t)?o._updateForDate(t):o.setState({chartType:t,isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._handleSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=o.state.chartType,i=[];return bt(a)||o.one||i.push(o.props.msgOnNotSelected(e)),o.two||i.push(o.props.msgOnNotSelected(n)),i.isValid=0===i.length,i},o._createLoadOption=function(){var t=T()(o),e=t.one,n=t.two,a=t.dialogOptions,i=t.colorComp,r=t.compSelect1,s=t.compSelect2,l=o.state.chartType,c=i?i.getConf():{},h=c.seriaColor,p=c.seriaWidth,u=o._getDateWithForDate();return o.props.loadFn(o.props,{one:e,two:n,dialogOptions:a,chartType:l,seriaColor:h,seriaWidth:p,date:u,selectOptions:[r.getOptions(),s.getOptions()]})},o._handleClose=function(){o._handleWithValidationClose()},o._refSelect1=function(t){o.compSelect1=t},o._refSelect2=function(t){o.compSelect2=t},o._menuMore=Object(E.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{isOptions:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=Ct.crOptions(e),o.state=g()({},o._isWithInitialState(),{isOptions:!1,isShowDate:!1},U("EMPTY")),o}O()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.noDate,o=t.caption,n=t.isShow,a=t.onShow,i=t.onFront,r=t.oneCaption,s=t.oneURI,l=t.oneJsonProp,c=t.twoCaption,h=t.twoURI,p=t.twoJsonProp,u=this.state,d=u.chartType,S=u.isToolbar,_=u.isOptions,f=u.isShowLabels,m=u.isShowDate,C=u.dateDefault,g=u.dateOptions,w=u.validationMessages;return y.a.createElement(v.a.DraggableDialog,{isShow:n,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:a,onFront:i,onClose:this._handleClose},y.a.createElement(v.a.Toolbar,{isShow:S,buttons:this.toolbarButtons}),y.a.createElement(Tt,{isShow:_,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),y.a.createElement(v.a.SelectWithLoad,{ref:this._refSelect1,isShow:n,isShowLabels:f,uri:s,jsonProp:l,caption:r,optionNames:"Items",onSelect:this._handleSelectOne}),y.a.createElement(v.a.SelectWithLoad,{ref:this._refSelect2,isShow:n,isShowLabels:f,uri:h,jsonProp:p,caption:c,optionNames:"Metrics",onSelect:this._handleSelectTwo}),y.a.createElement(v.a.RowChart,{chartType:d,isShowLabels:f,options:this._chartOptions,onSelectChart:this._handleSelectChartType,onRegColor:this._onRegColor}),!e&&y.a.createElement(v.a.ShowHide,{isShow:m},y.a.createElement(v.a.RowInputSelect,{isShowLabels:f,caption:"For Date",placeholder:C,options:g,onSelect:this._handleSelectDate})),y.a.createElement(v.a.ValidationMessages,{validationMessages:w}))},e}(D.Component),s.defaultProps={oneCaption:"Item",oneJsonProp:"items",twoCaption:"Metric",twoJsonProp:"metrics"},r=l))||r)||r,Dt=function(t){return Ct.isCategory(t)},yt=(0,M.a.dialog)(c=x((p=h=function(t){function e(e){var o;return(o=t.call(this,e)||this)._updateForDate=function(t){o.date=void 0;var e=o.props.dfProps,n=void 0===e?{}:e,a=n.mapFrequency,i=n.mapDateDf,r=o.two?a:"M",s=r?U(r,i):U("EMPTY");o.setState(g()({isShowDate:!0},s,{chartType:t}))},o._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t;var e=o.state.chartType;Dt(e)&&o._updateForDate(e)},o._handleSelectThree=function(t){o.three=t},o._handleSelectChartType=function(t){Dt(t)?o._updateForDate(t):o.setState({chartType:t,isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._handleSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=t.threeCaption,i=t.msgOnNotSelected,r=o.state.chartType,s=[];return Dt(r)||o.one||s.push(i(e)),o.two||s.push(i(n)),o.three||s.push(i(a)),s.isValid=0===s.length,s},o._createLoadOption=function(){var t=T()(o),e=t.one,n=t.two,a=t.three,i=t.dialogOptions,r=t.colorComp,s=t.compSelect1,l=t.compSelect2,c=o.state.chartType,h=r?r.getConf():{},p=h.seriaColor,u=h.seriaWidth,d=o._getDateWithForDate();return o.props.loadFn(o.props,{one:e,group:n,metric:a,dialogOptions:i,chartType:c,seriaColor:p,seriaWidth:u,date:d,selectOptions:[s.getOptions(),l.getOptions()]})},o._handleClose=function(){o._handleWithValidationClose()},o._refSelect1=function(t){o.compSelect1=t},o._refSelect2=function(t){o.compSelect2=t},o._menuMore=Object(E.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{isOptions:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=Ct.crOptions(e),o.state=g()({},o._isWithInitialState(),{isOptions:!1,isShowDate:!1},U("EMPTY")),o}O()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.oneCaption,r=t.oneURI,s=t.oneJsonProp,l=t.twoCaption,c=t.twoURI,h=t.twoJsonProp,p=t.threeCaption,u=t.threeURI,d=t.threeJsonProp,S=t.noDate,_=this.state,f=_.chartType,m=_.isToolbar,C=_.isOptions,g=_.isShowLabels,w=_.isShowDate,T=_.dateDefault,b=_.dateOptions,O=_.validationMessages;return y.a.createElement(v.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},y.a.createElement(v.a.Toolbar,{isShow:m,buttons:this.toolbarButtons}),y.a.createElement(Tt,{isShow:C,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),y.a.createElement(v.a.SelectWithLoad,{ref:this._refSelect1,isShow:o,isShowLabels:g,uri:r,jsonProp:s,caption:i,optionNames:"Countries",onSelect:this._handleSelectOne}),y.a.createElement(v.a.SelectWithLoad,{ref:this._refSelect2,isShow:o,isShowLabels:g,uri:c,jsonProp:h,caption:l,optionNames:"Items",onSelect:this._handleSelectTwo}),y.a.createElement(v.a.SelectWithLoad,{isShow:o,isShowLabels:g,uri:u,jsonProp:d,caption:p,optionNames:"Metrics",onSelect:this._handleSelectThree}),y.a.createElement(v.a.RowChart,{chartType:f,isShowLabels:g,options:this._chartOptions,onSelectChart:this._handleSelectChartType,onRegColor:this._onRegColor}),!S&&y.a.createElement(v.a.ShowHide,{isShow:w},y.a.createElement(v.a.RowInputSelect,{isShowLabels:g,caption:"For Date",placeholder:T,options:b,onSelect:this._handleSelectDate})),y.a.createElement(v.a.ValidationMessages,{validationMessages:O}))},e}(D.Component),h.defaultProps={oneCaption:"Country",oneJsonProp:"countries",twoCaption:"Item",twoJsonProp:"items",threeCaption:"Metric",threeJsonProp:"items"},c=p))||c)||c,vt=o("8OQS"),Et=o.n(vt),Mt={ROW:{display:"flex",justifyContent:"space-between"},INLINE:{display:"inline-block"},CAPTION:{maxWidth:150},CHB_CAPTION:{display:"inline-block",paddingLeft:40}},Lt=function(t){var e=t.selectProps,o=t.crIsId,n=t.onToggle,a=t.onCheckCaption,i=t.onUnCheckCaption;return e.map((function(t,e){return y.a.createElement("div",{style:Mt.ROW,key:t.id},y.a.createElement(v.a.RowCheckBox,{initValue:!0,rootStyle:g()({},wt.ROW_CB,{},Mt.INLINE),checkedColor:"#1b75bb",caption:t.caption,captionStyle:Mt.CAPTION,onToggle:function(){return n(o(t.id))}}),y.a.createElement(v.a.RowCheckBox,{initValue:0===e,rootStyle:Mt.CHB_CAPTION,checkedColor:"#a487d4",onCheck:function(){return a(e)},onUnCheck:function(){return i(e)}}))}))},Bt=function(t){var e=t.isShow,o=t.style,n=t.className,a=void 0===n?wt.CL:n,i=t.selectProps,r=void 0===i?[]:i,s=t.isShowDate,l=t.isShowChart,c=t.noForDate,h=void 0!==c&&c,p=t.crIsId,u=t.onToggle,d=t.onCheckCaption,S=t.onUnCheckCaption,_=t.onClose,f=Object(D.useCallback)(u.bind(null,"isShowChart"),[]),m=Object(D.useCallback)(u.bind(null,"isShowDate"),[]);return y.a.createElement(v.a.ModalPopup,{isShow:e,style:g()({},wt.ROOT,{},o),className:a,onClose:_},y.a.createElement(Lt,{selectProps:r,crIsId:p,onToggle:u,onCheckCaption:d,onUnCheckCaption:S}),y.a.createElement(v.a.RowCheckBox,{key:"isShowChart",value:l,rootStyle:wt.ROW_CB,checkedColor:"#1b75bb",caption:"Chart",onToggle:f}),!h&&y.a.createElement(v.a.RowCheckBox,{key:"isForDate",value:s,rootStyle:wt.ROW_CB,checkedColor:"#1b75bb",caption:"For Date",onToggle:m}))},Wt=function(t){var e=t.chartType,o=t.isShowLabels,n=t.isShowChart,a=t.chartOptions,i=t.onSelectChart,r=t.onRegColor,s=t.isShowDate,l=t.noDate,c=void 0!==l&&l,h=t.dateDefault,p=t.dateOptions,u=t.onSelecDate;return y.a.createElement(y.a.Fragment,null,y.a.createElement(v.a.ShowHide,{isShow:n},y.a.createElement(v.a.RowChart,{chartType:e,isShowLabels:o,options:a,onSelectChart:i,onRegColor:r})),!c&&y.a.createElement(v.a.ShowHide,{isShow:s},y.a.createElement(v.a.RowInputSelect,{isShowLabels:o,caption:"For Date",placeholder:h,options:p,onSelect:u})))},Ft=function(t){return"is"+t+"Select"},It=function(t){return Ct.isCategory(t)},Pt=(0,M.a.dialog)(u=x((S=d=function(t){function e(e){var o,n,a;return(o=t.call(this,e)||this)._toggleStateBy=function(t){o.setState((function(e){var o;return(o={})[t]=!e[t],o}))},o._checkCaptionBy=function(t){o._titles.push(t)},o._uncheckCaption=function(t){o._titles=o._titles.filter((function(e){return e!==t}))},o._updateForDate=function(t){o.date=void 0;var e=o.props.dfProps,n=void 0===e?{}:e,a=n.mapFrequency,i=n.mapDateDf,r=U(a||"M",i);o.setState(g()({isShowDate:!0,chartType:t},r))},o._hSelectChartType=function(t){It(t)?o._updateForDate(t):o.setState({chartType:t,isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._hSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){for(var t=o.props,e=t.msgOnNotSelected,n=t.selectProps,a=o.state.chartType,i=n.length,r=[],s=It(a)?1:0;s<i;s++)o._items[s]||r.push(e(n[s].caption));return r.isValid=0===r.length,r},o._createLoadOption=function(){var t=T()(o),e=t.colorComp,n=t.dialogOptions,a=o.state.chartType,i=e?e.getConf():{},r=i.seriaColor,s=i.seriaWidth,l=o._getDateWithForDate(),c=It(a),h=c?o._items.slice(1):o._items;return o.props.loadFn(o.props,{items:h,titles:o._titles,dialogOptions:n,chartType:a,seriaColor:r,seriaWidth:s,isCategory:c,date:l})},o._hClose=function(){o._handleWithValidationClose()},o._hSelect=function(t,e,n){n&&(n.id=t),o._items[e]=n},o._refSelect=function(t,e){o._compSelect[t]=e},o._renderSelects=function(t,e,n){return t.map((function(t,a){var i=t.id,r=Et()(t,["id"]),s=o.state[Ft(i)];return y.a.createElement(v.a.ShowHide,{key:i,isShow:s},y.a.createElement(v.a.SelectWithLoad,g()({},r,{ref:o._refSelect.bind(null,i),isShow:e,isShowLabels:n,onSelect:o._hSelect.bind(null,i,a)})))}))},o._items=[],o._titles=[0],o._compSelect={},o._menuMore=Object(E.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{noDate:!0,isOptions:!0,isToggle:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=Ct.crOptions(e),o.state=g()({},o._isWithInitialState(),{isOptions:!1,isToggle:!1,isShowChart:!0,isShowDate:!1},U("EMPTY"),{},(n=e.selectProps,a={},n.forEach((function(t){a[Ft(t.id)]=!0})),a)),o}O()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.selectProps,r=t.noDate,s=t.noForDate,l=this.state,c=l.chartType,h=l.isToolbar,p=l.isOptions,u=l.isToggle,d=l.isShowLabels,S=l.isShowChart,_=l.isShowDate,f=l.dateDefault,m=l.dateOptions,C=l.validationMessages;return y.a.createElement(v.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._hClose},y.a.createElement(v.a.Toolbar,{isShow:h,buttons:this.toolbarButtons}),y.a.createElement(Tt,{isShow:p,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),y.a.createElement(Bt,{isShow:u,noForDate:s,selectProps:i,isShowChart:S,isShowDate:_,crIsId:Ft,onToggle:this._toggleStateBy,onCheckCaption:this._checkCaptionBy,onUnCheckCaption:this._uncheckCaption,onClose:this._hideToggleWithToolbar}),this._renderSelects(i,o,d),y.a.createElement(Wt,{chartType:c,isShowLabels:d,isShowChart:S,chartOptions:this._chartOptions,onSelectChart:this._hSelectChartType,onRegColor:this._onRegColor,noDate:r,isShowDate:_,dateDefault:f,dateOptions:m,onSelecDate:this._hSelectDate}),y.a.createElement(v.a.ValidationMessages,{validationMessages:C}))},e}(D.Component),d.defaultProps={selectProps:[]},u=S))||u)||u,Rt=o("CrGp"),Nt=o("uYGB"),kt=o.n(Nt),At={selection:{filter:"all",values:["*"]}},Vt={code:"Tid",selection:{filter:"top",values:["1"]}},Ut=function(t,e){var o=t.map((function(t){return e=t.v,g()({code:e},At);var e}));return e||o.push(Vt),{method:"POST",body:JSON.stringify({query:o,response:{format:"json-stat"}})}},Yt=function(t,e){for(var o=[],n=e.v,a=t.Dimension(n),i=a.length,r=0;r<i;r++){var s;o.push({caption:a.Category(r).label,slice:(s={},s[n]=a.id[r],s)})}return o},xt=!1,jt=function(t){_=t,f=setTimeout(function(t){return function(){t===_&&(xt=!1)}}(t),5e3),xt=!0},Jt=function(){xt=!1,clearTimeout(f)},qt=function(t){var e=t.proxy,o=t.baseMeta,n=t.id,a=t.dims,i=t.noTime;if(xt)return Promise.resolve({errMsg:"Another dims are still loading"});var r=function(t,e,o){return t?""+t+e+"/"+o:e+"/"+o}(e,o,n),s=Ut(a,i);return jt(r),fetch(r,s).then((function(t){var e=t.status;if(e>=200&&e<400)return t.json();if(403===e)throw Error("HTTP Code 403: Forbitten.\nMaybe, require API key.");throw Error("HTTP Code: "+e)})).then((function(t){var e=kt()(t).Dataset(0),o=a.map((function(t){return{id:t.v,caption:t.c,options:Yt(e,t)}}));return Jt(),{configs:o}})).catch((function(t){return Jt(),{errMsg:t.message}}))},Ht={SPINNER_LOADING:{position:"relative",display:"block",textAlign:"middle",margin:"16px auto 32px",width:32,height:32},SPINNER_FAILED:{borderColor:"#f44336",animation:"none"}},Gt=function(t){return"is"+t+"Select"},Zt={Eurostat:L,Eurostat2:Ot,Eurostat3A:yt,SelectN:Pt,StatN:(0,M.a.dialog)(m=function(t){function e(e){var o;return(o=t.call(this,e)||this)._toggleStateBy=function(t){o.setState((function(e){var o;return(o={})[t]=!e[t],o}))},o._checkCaptionBy=function(t){o._titles.push(t)},o._uncheckCaption=function(t){o._titles=o._titles.filter((function(e){return e!==t}))},o._loadDims=function(){var t=o.props,e=t.proxy,n=t.baseMeta,a=t.dims,i=t.timeId,r=t.dfProps,s=void 0===r?{}:r,l=t.noTime,c=s.dfId;qt({id:c,proxy:e,baseMeta:n,dims:a,noTime:l,timeId:i}).then((function(t){var e=t.configs,n=t.errMsg;if(e){var a=e.filter(function(t){return function(e){return e.id!==t}}(i));o._selectOptions=a.map((function(t){return t.options})),o.setState({isLoading:!1,isLoadFailed:!1,configs:a,captions:a.map((function(t){return{id:t.id,caption:t.caption}}))})}else o.setState({isLoading:!1,isLoadFailed:!0,validationMessages:[n]})}))},o._updateForDate=function(t){o.date=null;var e=o._items[1]?o.props.mapFrequency?o.props.mapFrequency:o.two.mapFrequency?o.two.mapFrequency:"M":null,n=o.props.mapDateDf,a=U(e||"Y",n);o.setState(g()({isShowDate:!0},a,{chartType:t}))},o._handleLoad=function(){var t=o._crValidationMessages();if(0===t.length){var e=T()(o),n=e._items,a=e.dialogOptions,i=e.colorComp,r=e.date,s=o.state.chartType,l=i?i.getConf():{},c=l.seriaColor,h=l.seriaWidth,p=o.state.dateDefault,u=o.props.loadFn(o.props,{dialogOptions:a,chartType:s,seriaColor:c,seriaWidth:h,date:r,dateDefault:p,items:n,titles:o._titles,selectOptions:o._selectOptions});o.props.onLoad(u)}o.setState({validationMessages:t})},o._crValidationMessages=function(){var t=[],e=o.state,n=e.configs;return e.isLoadFailed?t.push("Dims for request haven't been loaded.\nClose, open dialog for trying load again."):n.forEach((function(e,n){var a=e.caption;o._items[n]||t.push(o.props.msgOnNotSelected(a))})),t},o._handleClose=function(){o._handleWithValidationClose()},o._hSelectChartType=function(t){!function(t){return Ct.isCategory(t)}(t)?o.setState({chartType:t,isShowDate:!1}):o._updateForDate(t)},o._onRegColor=function(t){o.colorComp=t},o._fSelect=function(t){return function(e){this._items[t]=e}},o._hSelectDate=function(t){o.date=t},o._renderSelectInputs=function(){var t=o.state,e=t.isShowLabels;return t.configs.map((function(t,n){var a=t.id,i=t.caption,r=t.options,s={isShowLabels:e,caption:i,options:r},l=!o.state[Gt(a)];return y.a.createElement(v.a.ShowHide,{key:a,isShow:l},y.a.createElement(v.a.RowInputSelect,g()({},s,{onSelect:o._fSelect(n).bind(T()(o))})))}))},o._menuMore=Object(E.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{noDate:!0,isOptions:!0,isToggle:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=Ct.crOptions(e),o._items=[],o._titles=[],o._selectOptions=[],o.state=g()({},o._isWithInitialState(),{isLoading:!0,isLoadFailed:!1,isShowChart:!0,isShowDate:!1},U("EMPTY"),{isOptions:!1,isToggle:!1,captions:[]}),o}O()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.componentDidMount=function(){this._loadDims()},o.componentDidUpdate=function(t){(function(t,e,o){return e!==t&&!t.isShow&&e.isShow&&o.isLoadFailed})(t,this.props,this.state)&&(this.setState({isLoading:!0,isLoadFailed:!1}),this._loadDims())},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=this.state,r=i.chartType,s=i.isToolbar,l=i.isOptions,c=i.isToggle,h=i.isShowLabels,p=i.isLoading,u=i.isLoadFailed,d=i.isShowChart,S=i.isShowDate,_=i.dateDefault,f=i.dateOptions,m=i.captions,C=i.validationMessages,w=u?g()({},Ht.SPINNER_LOADING,{},Ht.SPINNER_FAILED):Ht.SPINNER_LOADING;return y.a.createElement(v.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},y.a.createElement(v.a.Toolbar,{isShow:s,buttons:this.toolbarButtons}),y.a.createElement(Tt,{isShow:l,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),y.a.createElement(Bt,{isShow:c,selectProps:m,isShowChart:d,isShowDate:S,crIsId:Gt,onToggle:this._toggleStateBy,onCheckCaption:this._checkCaptionBy,onUnCheckCaption:this._uncheckCaption,onClose:this._hideToggleWithToolbar}),(p||u)&&y.a.createElement(Rt.a,{style:w}),!p&&!u&&this._renderSelectInputs(),y.a.createElement(Wt,{chartType:r,isShowLabels:h,isShowChart:d,chartOptions:this._chartOptions,onSelectChart:this._hSelectChartType,onRegColor:this._onRegColor,isShowDate:S,dateDefault:_,dateOptions:f,onSelecDate:this._hSelectDate}),y.a.createElement(v.a.ValidationMessages,{validationMessages:C}))},e}(D.Component))||m};e.default=Zt}}]);