webpackJsonp([3],{472:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=n(o),i=r(3),u=n(i),s=r(4),l=n(s),d=r(5),f=n(d),c=r(0),p=n(c),_=r(66),h=n(_),v=r(42),m=n(v),y=r(35),g=n(y),M=r(528),P=n(M),b={BROWSER:{paddingRight:"0"},SCROLL_DIV:{height:"92%"}},x=function(e){function t(e){(0,a.default)(this,t);var r=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._onStore=function(e,t){var n=r.props,o=n.browserType;e===n.showAction&&t===o&&r._handleShow()},r._handleHide=function(){r.setState({isShow:!1})},r._handleShow=function(){r.setState({isShow:!0})},r.state={isShow:!!e.isInitShow},r}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.props.store.listen(this._onStore)}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isShow!==t.isShow}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props.caption,t=this.state.isShow;return p.default.createElement(h.default,{isShow:t,style:b.BROWSER},p.default.createElement(m.default,{caption:e,onClose:this._handleHide}),p.default.createElement(g.default,{className:"scroll-container-y",style:b.SCROLL_DIV},p.default.createElement(P.default,this.props)))}}]),t}(c.Component);t.default=x},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={MSG_ERR:{paddingLeft:"12px",color:"#f44336",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px"},TITLE:{position:"relative",color:"silver",paddingLeft:"32px",paddingTop:"8px",paddingBottom:"4px",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",cursor:"pointer"},TITLE_ARROW:{position:"absolute",top:"8px",left:"16px"},ITEM_L:{color:"#a487d4",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",paddingLeft:"12px",cursor:"pointer"},ITEM_T:{color:"black",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",cursor:"pointer"}};t.default=n},486:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=n(o),i=r(3),u=n(i),s=r(4),l=n(s),d=r(5),f=n(d),c=r(0),p=n(c),_=r(478),h=n(_),v={ITEM:"menu-item"},m=function(e){function t(){var e,r,n,o;(0,a.default)(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=n=(0,l.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n._hKeyPress=function(e){e.preventDefault();var t=e.which;13!==t&&32!==t||n.props.onClick()},n._ref=function(e){return n._node=e},n.focus=function(){n._node&&n._node.focus()},o=r,(0,l.default)(n,o)}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.item,r=e.onClick,n=t.text,o=t.type,a="l"===o?h.default.ITEM_L:h.default.ITEM_T;return p.default.createElement("div",{ref:this._ref,className:v.ITEM,style:a,tabIndex:"0",role:"menuitem",onClick:r,onKeyPress:this._hKeyPress},n)}}]),t}(c.Component);t.default=m},487:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),i=r(478),u=n(i),s=function(e){var t=e.errMsg;return t?a.default.createElement("div",{style:u.default.MSG_ERR},t):null};t.default=s},528:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),i=r(2),u=n(i),s=r(3),l=n(s),d=r(4),f=n(d),c=r(5),p=n(c),_=r(0),h=n(_),v=r(529),m=n(v),y=r(530),g=n(y),M=r(531),P=n(M),b=r(486),x=n(b),E=r(487),S=n(E),T={ROOT:{width:"300px",overflow:"hidden"},PAGES:{width:"1500px",overflowX:"hidden",display:"flex",flexFlow:"row nowrap",alignItems:"flex-start",transition:"all 750ms ease-out"},PAGE:{width:"300px"}},C=function(e){var t=e.style.transform.substr(11).replace("px","").replace(")","");return parseInt(t,10)},O=function(e){function t(e){(0,u.default)(this,t);var r=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._loadItems=function(){var e=r.props,t=e.dfProps,n=void 0===t?{}:t,o=e.store,a=n.lT,i=o.getProxy(a);(0,g.default)(n.rootUrl,i).then(function(e){Array.isArray(e)&&r.setState({model:e,errMsg:void 0})}).catch(function(e){r.setState({errMsg:e.message})})},r.hPrevPage=function(e){r.setState(function(t){return t.pageCurrent=e-1,r._direction=-1,t})},r._addPage=function(e,t,n){var o=r.props,a=o.dfProps,i=o.store;e.push(h.default.createElement(P.default,{key:t,id:t,rootStyle:T.PAGE,store:i,title:n,dfProps:a,onClickPrev:r.hPrevPage,onClickNext:r.hNextPage,loadItems:g.default,fOnClickItem:m.default}))},r.hNextPage=function(e,t,n){r.setState(function(o){var a=o.pages;return a.length-1+1>n?a[n]&&a[n].key!==e&&(n>0?o.pages.splice(n):o.pages=[],r._addPage(o.pages,e,t)):r._addPage(a,e,t),o.pageCurrent=n+1,r._direction=1,o})},r._refFirst=function(e){return r._firstNode=e},r._renderMenu=function(){var e=r.state,t=e.model,n=e.errMsg,o=t.map(function(e,t){var n=e.text,o=e.id,a=0===t?r._refFirst:void 0;return h.default.createElement(x.default,{ref:a,key:o,item:e,onClick:r.hNextPage.bind(null,o,n,0)})});return h.default.createElement("div",{style:T.PAGE},o,h.default.createElement(S.default,{errMsg:n}))},r._renderPages=function(){var e=r.state,t=e.pages,n=e.pageCurrent;return t.map(function(e,t){return h.default.cloneElement(e,{pageCurrent:n,pageNumber:t+1})})},r._crTransform=function(){var e="0";if(0!==r._direction&&r._menuNode){var t=C(r._menuNode);e=1===r._direction?t-300:t+300,r._direction=0}else 0===r._direction&&r._menuNode&&(e=C(r._menuNode));return{transform:"translateX("+e+"px)"}},r._refMenu=function(e){return r._menuNode=e},r.focusFirst=function(){r._firstNode&&r._firstNode.focus()},r._direction=0,r.state={model:[],pageCurrent:0,pages:[]},r}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this._loadItems()}},{key:"render",value:function(){var e=this._crTransform(),t=(0,a.default)({},T.PAGES,e);return h.default.createElement("div",{style:T.ROOT},h.default.createElement("div",{ref:this._refMenu,style:t},this._renderMenu(),this._renderPages()))}},{key:"componentDidUpdate",value:function(){0===this.state.pageCurrent&&setTimeout(this.focusFirst,1e3)}}]),t}(_.Component);t.default=O},529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a={dialogConf:!0,dialogType:"DialogStatN",dialogProps:{chartsType:"t2",dfProps:{},isProxy:!0}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.substr(1)},u=function(e){var t=[],r=e.variables,n=void 0===r?[]:r,o="Y";return n.forEach(function(e){var r=e.code,n=e.text;"Tid"!==r?t.push({c:i(n),v:r}):"month"===n?o="M":"quarter"===n&&(o="K")}),{mapFrequency:o,dims:t}},s=function(e){var t=e.rootUrl,r=e.id,n=e.bT,i=e.lT,s=e.sP,l=e.dU,d=e.proxy;return function(){var e=d?""+d+t+"/"+r:t+"/"+r;fetch(e).then(function(e){var t=e.status,r=e.statusText;if(t>=200&&t<400)return e.json();throw Error(r)}).then(function(e){var f=u(e),c=f.mapFrequency,p=f.dims,_=e.title,h=void 0===_?"":_,v=h.length>35?h.substr(0,35)+"...":h,m=Object.assign({},a,{type:n+"_"+r,menuTitle:h.substr(0,27),chartContainerCaption:s+": "+v});Object.assign(m.dialogProps,{baseMeta:t,loadId:i,mapFrequency:c,dims:p,descrUrl:l,dfProps:{dfId:r},proxy:d}),o.default.showDialog(n+"_"+r,n,m)}).catch(function(e){console.log(e.message)})}};t.default=s},530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return e.text<t.text?-1:e.text>t.text?1:0},o=function(e,t){var r=t?t+e:e;return fetch(r,{cache:"default"}).then(function(e){return e.json()}).then(function(e){return Array.isArray(e)&&e.sort(n),e})};t.default=o},531:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),i=r(2),u=n(i),s=r(3),l=n(s),d=r(4),f=n(d),c=r(5),p=n(c),_=r(0),h=n(_),v=r(532),m=n(v),y=r(486),g=n(y),M=r(487),P=n(M),b=function(e){function t(e){(0,u.default)(this,t);var r=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.loadMenu=function(e){var t=r.props,n=t.dfProps,o=void 0===n?{}:n,a=t.loadItems,i=t.store,u=o.lT,s=i.getProxy(u);a(o.rootUrl+"/"+e,s).then(function(e){Array.isArray(e)&&r.setState({model:e,errMsg:void 0})}).catch(function(e){r.setState({errMsg:e.message})})},r._renderMenu=function(){var e=r.props,t=e.dfProps,n=void 0===t?{}:t,o=e.pageNumber,i=e.store,u=n.lT,s=i.getProxy(u),l=r.state.model,d=r.props,f=d.onClickNext,c=d.fOnClickItem,p=d.id,_=l.map(function(e){var t=e.text,r=e.id,i=e.type,u="l"===i?f.bind(null,p+"/"+r,t,o):c((0,a.default)({id:p+"/"+r},n,{proxy:s}));return h.default.createElement(g.default,{key:r,item:e,onClick:u})});return h.default.createElement("div",null,_)},r._refFirst=function(e){return r._firstNode=e},r.focusFirst=function(){r._firstNode&&r._firstNode.focus()},r.state={model:[]},r}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.title,r=e.id;t&&this.loadMenu(r)}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.rootStyle,n=e.pageNumber,o=e.onClickPrev,a=this.state.errMsg;return h.default.createElement("div",{style:r},h.default.createElement(m.default,{ref:this._refFirst,title:t,onClick:o.bind(null,n)}),this._renderMenu(),h.default.createElement(P.default,{errMsg:a}))}},{key:"componentDidUpdate",value:function(e){var t=this.props;t.pageNumber===t.pageCurrent&&setTimeout(this.focusFirst,1e3)}}]),t}(_.Component);t.default=b},532:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=n(o),i=r(3),u=n(i),s=r(4),l=n(s),d=r(5),f=n(d),c=r(0),p=n(c),_=r(478),h=n(_),v={ITEM:"menu-item"},m=function(e){function t(){var e,r,n,o;(0,a.default)(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=n=(0,l.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n._refNode=function(e){return n._node=e},n.focus=function(){n._node&&n._node.focus()},o=r,(0,l.default)(n,o)}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,r=void 0===t?"":t,n=e.onClick;return p.default.createElement("div",{ref:this._refNode,className:v.ITEM,style:h.default.TITLE,role:"menuitem",tabIndex:"0",onClick:n,onKeyPress:function(e){e.preventDefault();var t=e.which;13!==t&&32!==t||n()}},r,p.default.createElement("span",{style:h.default.TITLE_ARROW},"<"))}}]),t}(c.Component);t.default=m}});