(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"SE/H":function(e,t,n){"use strict";n.r(t);var r=n("VbXa"),o=n.n(r),i=n("q1tI"),a=n.n(i),s=n("0oc4"),c=n("L1LF"),u=n("LUDe"),l=n("pVnL"),d=n.n(l),p=n("PJYZ"),f=n.n(p),h=n("XNJZ"),m=n("+xHe"),g={dialogConf:!0,dialogType:"DialogStatN",dialogProps:{chartsType:"t2a",dfProps:{},isProxy:!0}},_=function(e){return function(){var t=e.rootUrl,n=e.id,r=e.proxy,o=e.bT,i=e.lT,a=e.dU,s=e.noTime,c=e.dS,u=function(e){var t=e.rootUrl,n=e.id,r=e.proxy,o=t+"/"+n;return r?""+r+o:o}(e),l=Object.assign({},g,d()({type:o+"_"+n},function(e){var t=e.text||"",n=t.length>35?t.substr(0,35)+"...":t;return{menuTitle:t.substr(0,27),contFullCaption:e.sP+": "+n}}(e)));Object.assign(l.dialogProps,{loadId:i,descrUrl:a,dataSource:c,dfProps:{metaUrl:u,baseMeta:t,dfId:n,proxy:r,noTime:s}}),m.b.showDialog(o+"_"+n,o,l)}},v=function(e,t){return e.text<t.text?-1:e.text>t.text?1:0},y=function(e,t){return fetch(t?t+e:e,{cache:"default"}).then((function(e){return e.json()})).then((function(e){return Array.isArray(e)&&e.sort(v),e}))},x={MSG_ERR:{paddingLeft:"12px",color:"#f44336",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px"},TITLE:{position:"relative",color:"silver",paddingLeft:"32px",paddingTop:"8px",paddingBottom:"4px",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",cursor:"pointer"},TITLE_ARROW:{position:"absolute",top:"8px",left:"16px"},ITEM_L:{color:"#1b2836",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",paddingLeft:"12px",cursor:"pointer"},ITEM_T:{color:"black",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",cursor:"pointer"}},S="menu-item",b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this)._refNode=function(e){return t._node=e},t.focus=function(){t._node&&t._node.focus()},t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=void 0===t?"":t,r=e.onClick;return a.a.createElement("div",{ref:this._refNode,className:S,style:x.TITLE,role:"menuitem",tabIndex:"0",onClick:r,onKeyPress:function(e){e.preventDefault();var t=e.which;13!==t&&32!==t||r()}},n,a.a.createElement("span",{style:x.TITLE_ARROW},"<"))},t}(i.Component),P=n("JyE6"),E="menu-item",w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this)._hKeyDown=function(e){Object(P.a)(e)&&(e.preventDefault(),t.props.onClick())},t._ref=function(e){return t._node=e},t.focus=function(){t._node&&t._node.focus()},t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.item,n=e.onClick,r=t.text,o="l"===t.type?x.ITEM_L:x.ITEM_T;return a.a.createElement("div",{ref:this._ref,className:E,style:o,tabIndex:"0",role:"menuitem",onClick:n,onKeyDown:this._hKeyDown},r)},t}(i.Component),C=function(e){var t=e.errMsg;return t?a.a.createElement("div",{style:x.MSG_ERR},t):null},T=Array.isArray,M=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={model:[]},t.loadMenu=function(e){var n=t.props,r=n.dfProps,o=void 0===r?{}:r,i=n.loadItems,a=n.store,s=o.lT,c=a.getProxy(s);i(o.rootUrl+"/"+e,c).then((function(e){T(e)&&t.setState({model:e,errMsg:void 0})})).catch((function(e){t.setState({errMsg:e.message})}))},t._renderMenu=function(){var e=t.props,n=e.dfProps,r=void 0===n?{}:n,o=e.pageNumber,i=e.store,s=r.lT,c=i.getProxy(s),u=t.state.model,l=t.props,p=l.onClickNext,f=l.fOnClickItem,h=l.id,m=u.map((function(e){var t=e.text,n=e.id,i="l"===e.type?p.bind(null,h+"/"+n,t,o):f(d()({id:h+"/"+n},r,{text:t,proxy:c}));return a.a.createElement(w,{key:n,item:e,onClick:i})}));return a.a.createElement("div",null,m)},t._refFirst=function(e){return t._firstNode=e},t.focusFirst=function(){t._firstNode&&t._firstNode.focus()},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.title,n=e.id;t&&this.loadMenu(n)},n.render=function(){var e=this.props,t=e.title,n=e.rootStyle,r=e.pageNumber,o=e.onClickPrev,i=this.state.errMsg;return a.a.createElement("div",{style:n},a.a.createElement(b,{ref:this._refFirst,title:t,onClick:o.bind(null,r)}),this._renderMenu(),a.a.createElement(C,{errMsg:i}))},n.componentDidUpdate=function(e){var t=this.props;t.pageNumber===t.pageCurrent&&setTimeout(this.focusFirst,1e3)},t}(i.Component),N={ROOT:{width:300,overflow:"hidden"},PAGES:{width:1500,overflowX:"hidden",display:"flex",flexFlow:"row nowrap",alignItems:"flex-start",transition:"all 750ms ease-out"},PAGE:{width:300}},A=function(e){var t=e.style.transform.substr(11).replace("px","").replace(")","");return parseInt(t,10)},I=function(e){function t(t){var n;return(n=e.call(this,t)||this)._loadItems=function(){var e=n.props,t=e.dfProps,r=void 0===t?{}:t,o=e.store,i=r.lT,a=o.getProxy(i);y(r.rootUrl,a).then((function(e){Array.isArray(e)&&n.setState({model:e,errMsg:void 0})})).catch((function(e){n.setState({errMsg:e.message})}))},n.hPrevPage=function(e){n.setState((function(t){return t.pageCurrent=e-1,n._direction=-1,t}))},n._addPage=function(e,t,r){var o=n.props,i=o.dfProps,s=o.store;e.push(a.a.createElement(M,{key:t,id:t,rootStyle:N.PAGE,store:s,title:r,dfProps:i,onClickPrev:n.hPrevPage,onClickNext:n.hNextPage,loadItems:y,fOnClickItem:_}))},n.hNextPage=function(e,t,r){n.setState((function(o){var i=o.pages;return i.length-1+1>r?i[r]&&i[r].key!==e&&(r>0?o.pages.splice(r):o.pages=[],n._addPage(o.pages,e,t)):n._addPage(i,e,t),o.pageCurrent=r+1,n._direction=1,o}))},n._refFirst=function(e){return n._firstNode=e},n._renderMenu=function(){var e=n.state,t=e.model,r=e.errMsg,o=t.map((function(e,t){var r=e.text,o=e.id,i=0===t?n._refFirst:void 0;return a.a.createElement(w,{ref:i,key:o,item:e,onClick:n.hNextPage.bind(null,o,r,0)})}));return a.a.createElement("div",{style:N.PAGE},o,a.a.createElement(C,{errMsg:r}))},n._renderPages=function(){var e=n.state,t=e.pages,r=e.pageCurrent;return t.map((function(e,t){return a.a.cloneElement(e,{pageCurrent:r,pageNumber:t+1})}))},n._crTransform=function(){var e="0";if(0!==n._direction&&n._menuNode){var t=A(n._menuNode);e=1===n._direction?t-300:t+300,n._direction=0}else 0===n._direction&&n._menuNode&&(e=A(n._menuNode));return{transform:"translateX("+e+"px)"}},n._refMenu=function(e){return n._menuNode=e},n.focusFirst=function(){n._firstNode&&n._firstNode.focus()},n.hNextPage=Object(h.a)(n.hNextPage.bind(f()(n))),n.hPrevPage=Object(h.a)(n.hPrevPage.bind(f()(n))),n._direction=0,n.state={model:[],pageCurrent:0,pages:[]},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._loadItems()},n.render=function(){var e=this._crTransform(),t=d()({},N.PAGES,{},e);return a.a.createElement("div",{style:N.ROOT},a.a.createElement("div",{ref:this._refMenu,style:t},this._renderMenu(),this._renderPages()))},n.componentDidUpdate=function(){0===this.state.pageCurrent&&setTimeout(this.focusFirst,1e3)},t}(i.Component),k={BROWSER:{paddingRight:"0"},SCROLL_DIV:{height:"92%"}},R=function(e){function t(t){var n;return(n=e.call(this)||this)._onStore=function(e,t){var r=n.props,o=r.browserType;e===r.showAction&&t===o&&n._handleShow()},n._handleHide=function(){n.setState({isShow:!1})},n._handleShow=function(){n.setState({isShow:!0})},n.state={isShow:!!t.isInitShow},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},n.shouldComponentUpdate=function(e,t){return this.state.isShow!==t.isShow},n.componentWillUnmount=function(){this.unsubscribe()},n.render=function(){var e=this.props.caption,t=this.state.isShow;return a.a.createElement(s.a,{isShow:t,style:k.BROWSER},a.a.createElement(c.a,{caption:e,onClose:this._handleHide}),a.a.createElement(u.a,{className:"scroll-container-y",style:k.SCROLL_DIV},a.a.createElement(I,this.props)))},t}(i.Component);t.default=R}}]);