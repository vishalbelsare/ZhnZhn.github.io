(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QjmX:function(t,e,o){"use strict";o.r(e);var n,a,i,r,s,l,c,h,p,u,d,S,_,m,g,f=o("pVnL"),C=o.n(f),w=o("PJYZ"),T=o.n(w),D=o("VbXa"),b=o.n(D),y=o("q1tI"),v=o.n(y),O=o("4Fsi"),M=o("/plH"),E=o("H9NR"),L=(0,E.a.dialog)((i=a=function(t){function e(e){var o;return(o=t.call(this,e)||this)._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=[];return o.one||a.push(o.props.msgOnNotSelected(e)),o.two||a.push(o.props.msgOnNotSelected(n)),a.isValid=0===a.length,a},o._createLoadOption=function(){return o.props.loadFn(o.props,{one:o.one,two:o.two})},o._handleClose=function(){o._handleWithValidationClose()},o._menuMore=Object(M.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{noDate:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o.state=C()({},o._isWithInitialState()),o}b()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.oneCaption,r=t.oneURI,s=t.oneJsonProp,l=t.twoCaption,c=t.twoURI,h=t.twoJsonProp,p=this.state,u=p.isToolbar,d=p.isShowLabels,S=p.validationMessages;return v.a.createElement(O.a.DraggableDialog,{caption:e,isShow:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},v.a.createElement(O.a.Toolbar,{isShow:u,buttons:this.toolbarButtons}),v.a.createElement(O.a.SelectWithLoad,{isShow:o,isShowLabels:d,uri:r,jsonProp:s,caption:i,optionNames:"Items",onSelect:this._handleSelectOne}),v.a.createElement(O.a.SelectWithLoad,{isShow:o,isShowLabels:d,uri:c,jsonProp:h,caption:l,optionNames:"Items",onSelect:this._handleSelectTwo}),v.a.createElement(O.a.ValidationMessages,{validationMessages:S}))},e}(y.Component),a.defaultProps={oneCaption:"Item",oneJsonProp:"items",twoCaption:"Metric",twoJsonProp:"metrics"},n=i))||n,B="Before Select Metric",F=12,R=24,P=4,W=3,I=function(t,e){return(t[e]||{}).value},A=function(t,e){var o,n,a=(new Date).getUTCMonth();for(n=0;n<12;n++)(a-=1)>-1?o=e+"M"+(a+1>9?a+1:"0"+(a+1)):(a=11,o=(e-=1)+"M12"),t.push({caption:o,value:o})},N=function(t,e,o){var n,a=(new Date).getUTCMonth(),i=Math.floor((a+1)/3),r=4===i?3:i;for(n=0;n<4;n++)r<1&&(e-=1,r=4),t.push({caption:""+e+o+r,value:""+e+o+r}),r-=1},V=function(t,e){return{dateOptions:t,dateDefault:I(t,e)}},U=function(t){void 0===t&&(t=1);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<F;n++)e.push({caption:""+o,value:""+o}),o-=1;return V(e,t)},k=function(t,e){switch(void 0===t&&(t="M"),t){case"M":return function(t){void 0===t&&(t=2);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<W;n++)A(e,o-n);return V(e,t)}(e);case"Q":case"K":return function(t,e){void 0===t&&(t=1),void 0===e&&(e="Q");for(var o=[],n=(new Date).getUTCFullYear(),a=0;a<P;a++)N(o,n-a,e);return V(o,t)}(e,t);case"S":return function(t){void 0===t&&(t=3);for(var e=[],o=(new Date).getUTCFullYear(),n=0;n<R;n++)e.push({caption:o+"S2",value:o+"S2"},{caption:o+"S1",value:o+"S1"}),o-=1;return V(e,t)}();case"Y":return U(e);case"EMPTY":return{dateDefault:B,dateOptions:[]};default:return U(e)}},Y=function(){if(this.date&&this.date.value)return this.date.value;var t=this.state,e=t.dateOptions,o=t.dateDefault;return Array.isArray(e)&&0!==e.length?o:""},J=function(t){Object.assign(t.prototype,{_getDateWithForDate:Y})},x=o("0TwO"),j="AREA",q="AREA_YEARLY",H="SPLINE",G="LINE",Z="COLUMN",Q="MAP",X="COLUMN_SET",z="COLUMN_CLUSTER",K="COLUMN_BY_2",$="BAR_SET",tt="BAR_CLUSTER",et="BAR_BY_2",ot="BAR_WITH_LABELS",nt="DOT_SET",at="TREE_MAP",it="TREE_MAP_CLUSTER",rt="TREE_MAP_2",st="TREE_MAP_2_CLUSTER",lt=[Q,X,z,K,$,tt,et,ot,nt,at,it,rt,st],ct="",ht=function(t){return{caption:t[0],value:t[1],dim:t[2],compType:t[3]}},pt=function(t){return t.map(ht)},ut=function(){return pt([["Default: Spline",H],["Area",j],["Column",Z],["Bar: All Countries",$],["Bar+Labels: All Countries",ot],["Column: All Countries",X],["Dots: All Countries",nt]])},dt=function(){return[ht(["Default: Spline",H]),ht(["Line",G]),ht(["Area",j]),ht(["Column",Z])]},St=function(t){return pt([["Column: By "+t,X,t],["Column: By "+t+": Cluster",z,t],["Bar: By "+t,$,t],["Bar: By "+t+": Cluster",tt,t]])},_t=function(t){var e=t[0];return[ht(["Default: Spline",j])].concat(St(e))},mt=function(t){var e=t[0];return[].concat(_t([e]),[ht(["TreeMap: By "+e,at,e]),ht(["TreeMap: By "+e+": Cluster",it,e])])},gt={DF:function(){return ut().concat(pt([["Map: All Countries",Q,void 0,x.c.EUROSTAT_MAP]]))},t1:function(){return[ht(["Default: Spline",H])]},t2:dt,t2a:function(){return[].concat(dt(),[ht(["Yearly by Months",q])])},t3:_t,t3b:function(t){var e=t[0];return[ht(["Default: Spline",j]),ht(["Yearly by Months",q])].concat(St(e))},t3a:mt,t3a2:function(t){var e=t[0];return[].concat(mt([e]),[ht(["TreeMap: By "+e+": Depth 2",rt,e]),ht(["TreeMap: By "+e+": Depth 2: Cluster",st,e])])},t4:function(t){var e=t[0],o=t[1];return[].concat(_t([e]),[ht(["Column: By "+o,K,o]),ht(["Bar: By "+o,et,o])])},df3:ut},ft={crOptions:function(t){var e,o,n,a,i,r,s=t.chartsType,l=(o=(e=t).dims,n=e.oneCaption,a=void 0===n?ct:n,i=e.twoCaption,r=void 0===i?ct:i,Array.isArray(o)?o.map((function(t){return t.c||ct})):[a,r]);return(gt[s]||gt.DF)(l)},isCategory:function(t){return!!t&&-1!==lt.indexOf(t.value)}},Ct=o("DA9w"),wt={CL:"popup-menu",ROOT:{left:8,zIndex:100,padding:"8px 12px",lineHeight:1.7},ROW_CB:{paddingLeft:0}},Tt=function(t){var e=t.isShow,o=t.style,n=t.className,a=void 0===n?wt.CL:n,i=t.toggleOption,r=t.onClose,s=i.bind(null,"isNotZoomToMinMax"),l=i.bind(null,"isFilterZero");return v.a.createElement(Ct.a,{isShow:e,style:C()({},wt.ROOT,{},o),className:a,onClose:r},v.a.createElement(O.a.RowCheckBox,{initValue:!1,rootStyle:wt.ROW_CB,caption:"Not Zoom to Min-Max",onToggle:s}),v.a.createElement(O.a.RowCheckBox,{initValue:!1,rootStyle:wt.ROW_CB,caption:"Filter Zero Values",onToggle:l}))},Dt=(0,E.a.dialog)(r=J((l=s=function(t){function e(e){var o;return(o=t.call(this,e)||this)._isCategory=function(){return ft.isCategory(o.chartType)},o._updateForDate=function(){o.date=null;var t=o.two?o.props.mapFrequency?o.props.mapFrequency:o.two.mapFrequency?o.two.mapFrequency:"M":null,e=o.props.mapDateDf,n=t?k(t,e):k("EMPTY");o.setState(C()({isShowDate:!0},n))},o._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t,o._isCategory()&&o._updateForDate()},o._handleSelectChartType=function(t){o.chartType=t,o._isCategory()?o._updateForDate():o.setState({isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._handleSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=[];return o._isCategory()||o.one||a.push(o.props.msgOnNotSelected(e)),o.two||a.push(o.props.msgOnNotSelected(n)),a.isValid=0===a.length,a},o._createLoadOption=function(){var t=T()(o),e=t.one,n=t.two,a=t.dialogOptions,i=t.chartType,r=t.colorComp,s=t.compSelect1,l=t.compSelect2,c=r?r.getColor():void 0,h=o._getDateWithForDate();return o.props.loadFn(o.props,{one:e,two:n,dialogOptions:a,chartType:i,seriaColor:c,date:h,selectOptions:[s.getOptions(),l.getOptions()]})},o._handleClose=function(){o._handleWithValidationClose()},o._refSelect1=function(t){o.compSelect1=t},o._refSelect2=function(t){o.compSelect2=t},o._menuMore=Object(M.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{isOptions:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=ft.crOptions(e),o.state=C()({},o._isWithInitialState(),{isOptions:!1,isShowDate:!1},k("EMPTY")),o}b()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.noDate,o=t.caption,n=t.isShow,a=t.onShow,i=t.onFront,r=t.oneCaption,s=t.oneURI,l=t.oneJsonProp,c=t.twoCaption,h=t.twoURI,p=t.twoJsonProp,u=this.state,d=u.isToolbar,S=u.isOptions,_=u.isShowLabels,m=u.isShowDate,g=u.dateDefault,f=u.dateOptions,C=u.validationMessages;return v.a.createElement(O.a.DraggableDialog,{isShow:n,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:a,onFront:i,onClose:this._handleClose},v.a.createElement(O.a.Toolbar,{isShow:d,buttons:this.toolbarButtons}),v.a.createElement(Tt,{isShow:S,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),v.a.createElement(O.a.SelectWithLoad,{ref:this._refSelect1,isShow:n,isShowLabels:_,uri:s,jsonProp:l,caption:r,optionNames:"Items",onSelect:this._handleSelectOne}),v.a.createElement(O.a.SelectWithLoad,{ref:this._refSelect2,isShow:n,isShowLabels:_,uri:h,jsonProp:p,caption:c,optionNames:"Metrics",onSelect:this._handleSelectTwo}),v.a.createElement(O.a.RowChart,{isShowLabels:_,options:this._chartOptions,onSelectChart:this._handleSelectChartType,onRegColor:this._onRegColor}),!e&&v.a.createElement(O.a.ShowHide,{isShow:m},v.a.createElement(O.a.RowInputSelect,{isShowLabels:_,caption:"For Date",placeholder:g,options:f,onSelect:this._handleSelectDate})),v.a.createElement(O.a.ValidationMessages,{validationMessages:C}))},e}(y.Component),s.defaultProps={oneCaption:"Item",oneJsonProp:"items",twoCaption:"Metric",twoJsonProp:"metrics"},r=l))||r)||r,bt=(0,E.a.dialog)(c=J((p=h=function(t){function e(e){var o;return(o=t.call(this,e)||this)._isCategory=function(){return ft.isCategory(o.chartType)},o._updateForDate=function(){o.date=void 0;var t=o.props.dfProps,e=void 0===t?{}:t,n=e.mapFrequency,a=e.mapDateDf,i=o.two?n:"M",r=i?k(i,a):k("EMPTY");o.setState(C()({isShowDate:!0},r))},o._handleSelectOne=function(t){o.one=t},o._handleSelectTwo=function(t){o.two=t,o._isCategory()&&o._updateForDate()},o._handleSelectThree=function(t){o.three=t},o._handleSelectChartType=function(t){o.chartType=t,o._isCategory()?o._updateForDate():o.setState({isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._handleSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){var t=o.props,e=t.oneCaption,n=t.twoCaption,a=t.threeCaption,i=t.msgOnNotSelected,r=[];return o._isCategory()||o.one||r.push(i(e)),o.two||r.push(i(n)),o.three||r.push(i(a)),r.isValid=0===r.length,r},o._createLoadOption=function(){var t=T()(o),e=t.one,n=t.two,a=t.three,i=t.dialogOptions,r=t.chartType,s=t.colorComp,l=t.compSelect1,c=t.compSelect2,h=s?s.getColor():void 0,p=o._getDateWithForDate();return o.props.loadFn(o.props,{one:e,group:n,metric:a,dialogOptions:i,chartType:r,seriaColor:h,date:p,selectOptions:[l.getOptions(),c.getOptions()]})},o._handleClose=function(){o._handleWithValidationClose()},o._refSelect1=function(t){o.compSelect1=t},o._refSelect2=function(t){o.compSelect2=t},o._menuMore=Object(M.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e,{isOptions:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=ft.crOptions(e),o.state=C()({},o._isWithInitialState(),{isOptions:!1,isShowDate:!1},k("EMPTY")),o}b()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.oneCaption,r=t.oneURI,s=t.oneJsonProp,l=t.twoCaption,c=t.twoURI,h=t.twoJsonProp,p=t.threeCaption,u=t.threeURI,d=t.threeJsonProp,S=t.noDate,_=this.state,m=_.isToolbar,g=_.isOptions,f=_.isShowLabels,C=_.isShowDate,w=_.dateDefault,T=_.dateOptions,D=_.validationMessages;return v.a.createElement(O.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},v.a.createElement(O.a.Toolbar,{isShow:m,buttons:this.toolbarButtons}),v.a.createElement(Tt,{isShow:g,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),v.a.createElement(O.a.SelectWithLoad,{ref:this._refSelect1,isShow:o,isShowLabels:f,uri:r,jsonProp:s,caption:i,optionNames:"Countries",onSelect:this._handleSelectOne}),v.a.createElement(O.a.SelectWithLoad,{ref:this._refSelect2,isShow:o,isShowLabels:f,uri:c,jsonProp:h,caption:l,optionNames:"Items",onSelect:this._handleSelectTwo}),v.a.createElement(O.a.SelectWithLoad,{isShow:o,isShowLabels:f,uri:u,jsonProp:d,caption:p,optionNames:"Metrics",onSelect:this._handleSelectThree}),v.a.createElement(O.a.RowChart,{isShowLabels:f,options:this._chartOptions,onSelectChart:this._handleSelectChartType,onRegColor:this._onRegColor}),!S&&v.a.createElement(O.a.ShowHide,{isShow:C},v.a.createElement(O.a.RowInputSelect,{isShowLabels:f,caption:"For Date",placeholder:w,options:T,onSelect:this._handleSelectDate})),v.a.createElement(O.a.ValidationMessages,{validationMessages:D}))},e}(y.Component),h.defaultProps={oneCaption:"Country",oneJsonProp:"countries",twoCaption:"Item",twoJsonProp:"items",threeCaption:"Metric",threeJsonProp:"items"},c=p))||c)||c,yt=o("8OQS"),vt=o.n(yt),Ot=function(t){var e=t.selectProps,o=t.crIsId,n=t.onToggle;return e.map((function(t){return v.a.createElement(O.a.RowCheckBox,{key:t.id,initValue:!0,rootStyle:wt.ROW_CB,checkedColor:"#1b75bb",caption:t.caption,onToggle:function(){return n(o(t.id))}})}))},Mt=function(t){var e=t.isShow,o=t.style,n=t.className,a=void 0===n?wt.CL:n,i=t.selectProps,r=void 0===i?[]:i,s=t.isShowDate,l=t.isShowChart,c=t.noForDate,h=t.crIsId,p=t.onToggle,u=t.toggleChart,d=t.toggleDate,S=t.onClose;return v.a.createElement(Ct.a,{isShow:e,style:C()({},wt.ROOT,{},o),className:a,onClose:S},v.a.createElement(Ot,{selectProps:r,crIsId:h,onToggle:p}),v.a.createElement(O.a.RowCheckBox,{key:"isShowChart",value:l,rootStyle:wt.ROW_CB,checkedColor:"#1b75bb",caption:"Chart",onToggle:u}),!c&&v.a.createElement(O.a.RowCheckBox,{key:"isForDate",value:s,rootStyle:wt.ROW_CB,checkedColor:"#1b75bb",caption:"For Date",onToggle:d}))},Et=function(t){return"is"+t+"Select"},Lt=(0,E.a.dialog)(u=J((S=d=function(t){function e(e){var o,n,a;return(o=t.call(this,e)||this)._toggleStateBy=function(t){o.setState((function(e){var o;return(o={})[t]=!e[t],o}))},o._isCategory=function(){return ft.isCategory(o.chartType)},o._updateForDate=function(){o.date=void 0;var t=o.props.dfProps,e=void 0===t?{}:t,n=e.mapFrequency,a=e.mapDateDf,i=k(n||"M",a);o.setState(C()({isShowDate:!0},i))},o._hSelectChartType=function(t){o.chartType=t,o._isCategory()?o._updateForDate():o.setState({isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._hSelectDate=function(t){o.date=t},o._handleLoad=function(){o._handleWithValidationLoad(o._createValidationMessages(),o._createLoadOption)},o._createValidationMessages=function(){for(var t=o.props,e=t.msgOnNotSelected,n=t.selectProps,a=n.length,i=[],r=o._isCategory()?1:0;r<a;r++)o._items[r]||i.push(e(n[r].caption));return i.isValid=0===i.length,i},o._createLoadOption=function(){var t=T()(o),e=t.chartType,n=t.colorComp,a=t.dialogOptions,i=n?n.getColor():void 0,r=o._getDateWithForDate(),s=ft.isCategory(e),l=s?o._items.slice(1):o._items;return o.props.loadFn(o.props,{items:l,dialogOptions:a,chartType:e,seriaColor:i,isCategory:s,date:r})},o._hClose=function(){o._handleWithValidationClose()},o._hSelect=function(t,e,n){n&&(n.id=t),o._items[e]=n},o._refSelect=function(t,e){o._compSelect[t]=e},o._renderSelects=function(t,e,n){return t.map((function(t,a){var i=t.id,r=vt()(t,["id"]),s=o.state[Et(i)];return v.a.createElement(O.a.ShowHide,{key:i,isShow:s},v.a.createElement(O.a.SelectWithLoad,C()({},r,{ref:o._refSelect.bind(null,i),isShow:e,isShowLabels:n,onSelect:o._hSelect.bind(null,i,a)})))}))},o._items=[],o._compSelect={},o._menuMore=Object(M.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o._toggleChart=o._toggleStateBy.bind(T()(o),"isShowChart"),o._toggleDate=o._toggleStateBy.bind(T()(o),"isShowDate"),o.toolbarButtons=o._createType2WithToolbar(e,{noDate:!0,isOptions:!0,isToggle:!0}),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=ft.crOptions(e),o.state=C()({},o._isWithInitialState(),{isOptions:!1,isToggle:!1,isShowChart:!0,isShowDate:!1},k("EMPTY"),{},(n=e.selectProps,a={},n.forEach((function(t){a[Et(t.id)]=!0})),a)),o}b()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=t.selectProps,r=t.noDate,s=t.noForDate,l=this.state,c=l.isToolbar,h=l.isOptions,p=l.isToggle,u=l.isShowLabels,d=l.isShowChart,S=l.isShowDate,_=l.dateDefault,m=l.dateOptions,g=l.validationMessages;return v.a.createElement(O.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._hClose},v.a.createElement(O.a.Toolbar,{isShow:c,buttons:this.toolbarButtons}),v.a.createElement(Tt,{isShow:h,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),v.a.createElement(Mt,{isShow:p,noForDate:s,selectProps:i,isShowChart:d,isShowDate:S,crIsId:Et,onToggle:this._toggleStateBy,toggleChart:this._toggleChart,toggleDate:this._toggleDate,onClose:this._hideToggleWithToolbar}),this._renderSelects(i,o,u),v.a.createElement(O.a.ShowHide,{isShow:d},v.a.createElement(O.a.RowChart,{isShowLabels:u,options:this._chartOptions,onSelectChart:this._hSelectChartType,onRegColor:this._onRegColor})),!r&&v.a.createElement(O.a.ShowHide,{isShow:S},v.a.createElement(O.a.RowInputSelect,{isShowLabels:u,caption:"For Date",placeholder:_,options:m,onSelect:this._hSelectDate})),v.a.createElement(O.a.ValidationMessages,{validationMessages:g}))},e}(y.Component),d.defaultProps={selectProps:[]},u=S))||u)||u,Bt=o("CrGp"),Ft=o("uYGB"),Rt=o.n(Ft),Pt={selection:{filter:"all",values:["*"]}},Wt={code:"Tid",selection:{filter:"top",values:["1"]}},It=function(t,e){var o=t.map((function(t){return e=t.v,C()({code:e},Pt);var e}));return e||o.push(Wt),{method:"POST",body:JSON.stringify({query:o,response:{format:"json-stat"}})}},At=function(t,e){for(var o=[],n=e.v,a=t.Dimension(n),i=a.length,r=0;r<i;r++){var s;o.push({caption:a.Category(r).label,slice:(s={},s[n]=a.id[r],s)})}return o},Nt=!1,Vt=function(t){_=t,m=setTimeout(function(t){return function(){t===_&&(Nt=!1)}}(t),5e3),Nt=!0},Ut=function(){Nt=!1,clearTimeout(m)},kt=function(t){var e=t.proxy,o=t.baseMeta,n=t.id,a=t.dims,i=t.noTime;if(Nt)return Promise.resolve({errMsg:"Another dims are still loading"});var r=function(t,e,o){return t?""+t+e+"/"+o:e+"/"+o}(e,o,n),s=It(a,i);return Vt(r),fetch(r,s).then((function(t){var e=t.status;if(e>=200&&e<400)return t.json();if(403===e)throw Error("HTTP Code 403: Forbitten.\nMaybe, require API key.");throw Error("HTTP Code: "+e)})).then((function(t){var e=Rt()(t).Dataset(0),o=a.map((function(t){return{id:t.v,caption:t.c,options:At(e,t)}}));return Ut(),{configs:o}})).catch((function(t){return Ut(),{errMsg:t.message}}))},Yt={SPINNER_LOADING:{position:"relative",display:"block",textAlign:"middle",margin:"16px auto 32px",width:32,height:32},SPINNER_FAILED:{borderColor:"#f44336",animation:"none"}},Jt={Eurostat:L,Eurostat2:Dt,Eurostat3A:bt,SelectN:Lt,StatN:(0,E.a.dialog)(g=function(t){function e(e){var o;return(o=t.call(this,e)||this)._loadDims=function(){var t=o.props,e=t.proxy,n=t.baseMeta,a=t.dims,i=t.timeId,r=t.dfProps,s=void 0===r?{}:r,l=t.noTime,c=s.dfId;kt({id:c,proxy:e,baseMeta:n,dims:a,noTime:l,timeId:i}).then((function(t){var e=t.configs,n=t.errMsg;if(e){var a=e.filter(function(t){return function(e){return e.id!==t}}(i));o._selectOptions=a.map((function(t){return t.options})),o.setState({isLoading:!1,isLoadFailed:!1,configs:a})}else o.setState({isLoading:!1,isLoadFailed:!0,validationMessages:[n]})}))},o._isCategory=function(){return ft.isCategory(o.chartType)},o._updateForDate=function(){o.date=null;var t=o._items[1]?o.props.mapFrequency?o.props.mapFrequency:o.two.mapFrequency?o.two.mapFrequency:"M":null,e=o.props.mapDateDf,n=k(t||"Y",e);o.setState(C()({isShowDate:!0},n))},o._handleLoad=function(){var t=o._crValidationMessages();if(0===t.length){var e=T()(o),n=e._items,a=e.chartType,i=e.colorComp,r=e.date,s=i?i.getColor():void 0,l=o.state.dateDefault,c=o.props.loadFn(o.props,{chartType:a,seriaColor:s,date:r,dateDefault:l,items:n,selectOptions:o._selectOptions});o.props.onLoad(c)}o.setState({validationMessages:t})},o._crValidationMessages=function(){var t=[],e=o.state,n=e.configs;return e.isLoadFailed?t.push("Dims for request haven't been loaded.\nClose, open dialog for trying load again."):n.forEach((function(e,n){var a=e.caption;o._items[n]||t.push(o.props.msgOnNotSelected(a))})),t},o._handleClose=function(){o._handleWithValidationClose()},o._hSelectChartType=function(t){o.chartType=t,o._isCategory()?o._updateForDate():o.setState({isShowDate:!1})},o._onRegColor=function(t){o.colorComp=t},o._fSelect=function(t){return function(e){this._items[t]=e}},o._hSelectDate=function(t){o.date=t},o._renderSelectInputs=function(){var t=o.state,e=t.isShowLabels;return t.configs.map((function(t,n){var a=t.id,i=t.caption,r=t.options,s={isShowLabels:e,caption:i,options:r};return v.a.createElement(O.a.RowInputSelect,C()({key:a},s,{onSelect:o._fSelect(n).bind(T()(o))}))}))},o._menuMore=Object(M.a)(T()(o),{toggleToolBar:o._toggleWithToolbar,onAbout:o._clickInfoWithToolbar}),o.toolbarButtons=o._createType2WithToolbar(e),o._commandButtons=o._crCommandsWithLoad(T()(o)),o._chartOptions=ft.crOptions(e),o._items=[],o._selectOptions=[],o.state=C()({},o._isWithInitialState(),{isLoading:!0,isLoadFailed:!1,isShowDate:!1},k("EMPTY")),o}b()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return this.props===t||this.props.isShow!==t.isShow},o.componentDidMount=function(){this._loadDims()},o.componentDidUpdate=function(t){(function(t,e,o){return e!==t&&!t.isShow&&e.isShow&&o.isLoadFailed})(t,this.props,this.state)&&(this.setState({isLoading:!0,isLoadFailed:!1}),this._loadDims())},o.render=function(){var t=this.props,e=t.caption,o=t.isShow,n=t.onShow,a=t.onFront,i=this.state,r=i.isToolbar,s=i.isShowLabels,l=i.isLoading,c=i.isLoadFailed,h=i.isShowDate,p=i.dateDefault,u=i.dateOptions,d=i.validationMessages,S=c?C()({},Yt.SPINNER_LOADING,{},Yt.SPINNER_FAILED):Yt.SPINNER_LOADING;return v.a.createElement(O.a.DraggableDialog,{isShow:o,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},v.a.createElement(O.a.Toolbar,{isShow:r,buttons:this.toolbarButtons}),(l||c)&&v.a.createElement(Bt.a,{style:S}),!l&&!c&&this._renderSelectInputs(),v.a.createElement(O.a.RowChart,{isShowLabels:s,options:this._chartOptions,onSelectChart:this._hSelectChartType,onRegColor:this._onRegColor}),v.a.createElement(O.a.ShowHide,{isShow:h},v.a.createElement(O.a.RowInputSelect,{isShowLabels:s,caption:"For Date",placeholder:p,options:u,onSelect:this._hSelectDate})),v.a.createElement(O.a.ValidationMessages,{validationMessages:d}))},e}(y.Component))||g};e.default=Jt}}]);