webpackJsonp([2],{465:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,o,i,l,d,u=r(2),s=a(u),p=r(3),f=a(p),c=r(4),D=a(c),h=r(5),g=a(h),_=r(0),v=a(_),S=r(6),I=r(16),L=a(I),E=r(61),y=a(E),m=r(63),T=a(m),b=r(41),O=a(b),M=r(135),C=a(M),G=r(31),w=a(G),P=r(89),W=a(P),x=r(515),R=a(x),k=r(516),j=a(k),N=r(517),U=a(N),V={SCROLL:"scroll-container-y scroll-watch",WATCH_ITEM:"row__type2-topic not-selected"},A="#80c040",B={GROUP:"GROUP",LIST:"LIST",ITEM:"ITEM"},H={BROWSER:{paddingRight:"0px"},BT_CIRCLE:{marginLeft:"20px",position:"relative",top:"-2px"},GROUP_DIV:{lineHeight:2},LIST_DIV:{marginLeft:"8px",paddingLeft:"12px",borderLeft:"1px solid yellow",lineHeight:2},ITEM_NOT_SELECTED:{borderBottom:"1px solid rgba(128, 192, 64, 0.6)",marginRight:"10px"}},J=(n=U.default.withDnDStyle,o=U.default.withDnDGroup(B,y.default),i=U.default.withDnDList(B,y.default),l=U.default.withDnDItem(B,y.default),n(d=o(d=i(d=l(d=function(e){function t(e){(0,s.default)(this,t);var r=(0,D.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._onStore=function(e,t){var a=r.props,n=a.browserType,o=a.showAction,i=a.updateAction;e===o&&t===n?r._handlerShow():e===i&&r.setState({watchList:t})},r._handlerHide=function(){r.setState({isShow:!1})},r._handlerShow=function(){r.setState({isShow:!0})},r._handlerToggleEditMode=function(){r.setState({isModeEdit:!r.state.isModeEdit})},r._renderWatchList=function(e){var t=r.state.isModeEdit;return e.groups.map(function(e,a){var n=e.caption,o=e.lists;return v.default.createElement(W.default,{key:a,style:H.GROUP_DIV,caption:n,isClose:!0,isDraggable:t,option:{caption:n},onDragStart:r._handlerDragStartGroup,onDragEnter:r._handlerDragEnterGroup,onDragOver:r._handlerDragOverGroup,onDragLeave:r._handlerDragLeaveGroup,onDrop:r._handlerDropGroup},o&&r._renderLists(o,n))})},r._renderLists=function(e,t){var a=r.state.isModeEdit;return e.map(function(e,n){var o=e.caption,i=e.items;return v.default.createElement(W.default,{key:n,fillOpen:A,style:H.LIST_DIV,styleNotSelected:H.ITEM_NOT_SELECTED,caption:o,isClose:!0,isDraggable:a,option:{groupCaption:t,caption:o},onDragStart:r._handlerDragStartList,onDragEnter:r._handlerDragEnterList,onDragOver:r._handlerDragOverList,onDragLeave:r._handlerDragLeaveList,onDrop:r._handlerDropList},i&&r._renderItems(i,t,o))})},r._renderItems=function(e,t,a){var n=r.state.isModeEdit;return e.map(function(e,o){var i=e.id,l=e.caption;return v.default.createElement(j.default,{key:i,className:V.WATCH_ITEM,isModeEdit:n,item:e,option:{groupCaption:t,listCaption:a,caption:l},onClick:r._handlerClickItem,onClose:r._handlerRemoveItem,onDragStart:r._handlerDragStartItem,onDragOver:r._handlerDragOverItem,onDragEnter:r._handlerDragEnterItem,onDragLeave:r._handlerDragLeaveItem,onDrop:r._handlerDropItem})})},r._handlerDragStartGroup=r._handlerDragStartGroup.bind(r),r._handlerDropGroup=r._handlerDropGroup.bind(r),r._handlerDragEnterGroup=r._handlerDragEnterGroup.bind(r),r._handlerDragLeaveGroup=r._handlerDragLeaveGroup.bind(r),r._handlerDragStartList=r._handlerDragStartList.bind(r),r._handlerDropList=r._handlerDropList.bind(r),r._handlerDragEnterList=r._handlerDragEnterList.bind(r),r._handlerDragLeaveList=r._handlerDragLeaveList.bind(r),r._handlerDragStartItem=r._handlerDragStartItem.bind(r),r._handlerDropItem=r._handlerDropItem.bind(r),r._handlerDragEnterItem=r._handlerDragEnterItem.bind(r),r._handlerDragLeaveItem=r._handlerDragLeaveItem.bind(r),r.state={isShow:!!e.isInitShow,isModeEdit:!1,watchList:e.store.getWatchList()},r}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.props.store.listen(this._onStore)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"_handlerSaveWatch",value:function(){y.default.saveWatch()}},{key:"_handlerEditGroup",value:function(){L.default.showModalDialog(S.ModalDialog.EDIT_WATCH_GROUP)}},{key:"_handlerEditList",value:function(){L.default.showModalDialog(S.ModalDialog.EDIT_WATCH_LIST)}},{key:"_handlerClickItem",value:function(e){L.default.showModalDialog(S.ModalDialog.LOAD_ITEM,e)}},{key:"_handlerRemoveItem",value:function(e,t){t.stopPropagation(),y.default.removeItem(e)}},{key:"render",value:function(){var e=this.props.caption,t=this.state,r=t.isShow,a=t.isModeEdit,n=t.watchList,o=a?"V":"E";return v.default.createElement(T.default,{isShow:r,style:H.BROWSER},v.default.createElement(O.default,{caption:e,onClose:this._handlerHide},v.default.createElement(C.default,{caption:"S",title:"Save to LocalStorage",style:H.BT_CIRCLE,onClick:this._handlerSaveWatch}),v.default.createElement(C.default,{caption:o,title:"Toggle Edit Mode: E/V",style:H.BT_CIRCLE,onClick:this._handlerToggleEditMode})),v.default.createElement(R.default,{isShow:a,onClickGroup:this._handlerEditGroup,onClickList:this._handlerEditList}),v.default.createElement(w.default,{className:V.SCROLL},n&&this._renderWatchList(n)))}}]),t}(_.Component))||d)||d)||d)||d);t.default=J},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={setTransferTo:function(e){var t=e.event,r=e.dragId,a=e.xType;Object.assign(t.dataTransfer,{effectAllowed:"move",dropEffect:"move"}).setData("text",JSON.stringify({dragId:r,xType:a}))}};t.default=a},515:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=a(n),i=r(135),l=a(i),d={ROOT:{marginBottom:"10px"},BT_LIST:{marginLeft:"20px"}},u=function(e){var t=e.isShow,r=e.onClickGroup,a=e.onClickList;return t?o.default.createElement("div",{style:d.ROOT},o.default.createElement(l.default,{caption:"GROUP",isWithoutDefault:!0,className:"bt__watch__bar",onClick:r}),o.default.createElement(l.default,{caption:"LIST",isWithoutDefault:!0,className:"bt__watch__bar",style:d.BT_LIST,onClick:a})):null};t.default=u},516:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=a(n),i=r(43),l=a(i),d={ITEM_DIV:{position:"relative",paddingRight:"40px",lineHeight:1.4,paddingTop:"5px",paddingBottom:"5px"},ITEM_SPAN:{display:"inline-block",verticalAlign:"middle",width:"100%",maxWidth:"250px",textOverflow:"ellipsis",overflow:"hidden"},SVG_CLOSE:{position:"absolute",right:0}},u=function(e){var t=e.item,r=e.className,a=e.isModeEdit,n=e.option,i=e.onClick,u=e.onClose,s=e.onDragStart,p=e.onDragEnter,f=e.onDragOver,c=e.onDragLeave,D=e.onDrop,h=t.caption,g=a?o.default.createElement(l.default,{style:d.SVG_CLOSE,onClose:u.bind(null,n)}):void 0;return o.default.createElement("div",{className:r,style:d.ITEM_DIV,onClick:i.bind(null,t),draggable:a,onDragStart:a&&s.bind(null,n),onDrop:a&&D.bind(null,n),onDragOver:a&&f,onDragEnter:a&&p,onDragLeave:a&&c},o.default.createElement("span",{style:d.ITEM_SPAN},h),g)};t.default=u},517:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(518),o=a(n),i=r(519),l=a(i),d=r(520),u=a(d),s=r(521),p=a(s),f={withDnDStyle:o.default,withDnDGroup:l.default,withDnDList:u.default,withDnDItem:p.default};t.default=f},518:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,n=void 0,o=void 0,i=void 0,l=function(e,t){e.persist(),n=e.currentTarget;var r=e.currentTarget.style;o=r.getPropertyValue("border-bottom"),a=t},d=function(e){var t=n.style;e.currentTarget.style.removeProperty("border-left"),t.removeProperty("border"),t.setProperty("border-bottom",o)},u=function(e,t){var r=e.currentTarget.style;i=r.getPropertyValue("border-left"),-1!==a.indexOf(t)?r.setProperty("border-left","4px solid green"):r.setProperty("border-left","4px solid red")},s=function(e){var t=e.currentTarget.style;t.removeProperty("border-left"),t.setProperty("border-left",i)},p=function(e){Object.assign(e.prototype,{dragStartWithDnDStyle:l,dropWithDnDStyle:d,dragEnterWithDnDStyle:u,dragLeaveWithDnDStyle:s})};t.default=p},519:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(471),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){return function(t,r){var a=t.caption;this.dragStartWithDnDStyle(r,[e.GROUP]),n.default.setTransferTo({event:r,dragId:a+";",xType:e.GROUP})}},i=function(e,t){return function(r,a){var n=r.caption;this.dropWithDnDStyle(a);var o=JSON.parse(a.dataTransfer.getData("text")),i=o.xType,l=o.dragId,d=n+";";if(i===e.GROUP){if(l===d)return;a.preventDefault(),t.dragDropGroup({dragId:l,dropId:d})}else i===e.LIST&&(a.preventDefault(),t.dragDropList({dragId:l,dropId:d}))}},l=function(e){return function(t){t.preventDefault(),this.dragEnterWithDnDStyle(t,e.GROUP)}},d=function(e){e.preventDefault()},u=function(e){e.preventDefault(),this.dragLeaveWithDnDStyle(e)},s=function(e,t){return function(r){Object.assign(r.prototype,{_handlerDragStartGroup:o(e),_handlerDropGroup:i(e,t),_handlerDragEnterGroup:l(e),_handlerDragOverGroup:d,_handlerDragLeaveGroup:u})}};t.default=s},520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(471),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){return function(t,r){var a=t.groupCaption,o=t.caption;this.dragStartWithDnDStyle(r,[e.GROUP,e.LIST]),n.default.setTransferTo({event:r,dragId:a+";"+o,xType:e.LIST})}},i=function(e,t){return function(r,a){var n=r.groupCaption,o=r.caption;this.dropWithDnDStyle(a);var i=JSON.parse(a.dataTransfer.getData("text")),l=i.xType,d=i.dragId,u=n+";"+o+";";if(l===e.LIST){if(d===u)return;a.preventDefault(),t.dragDropList({dragId:d,dropId:u})}else l===e.ITEM&&(a.preventDefault(),t.dragDropItem({dragId:d,dropId:u}))}},l=function(e){return function(t){t.preventDefault(),this.dragEnterWithDnDStyle(t,e.LIST)}},d=function(e){e.preventDefault()},u=function(e){e.preventDefault(),this.dragLeaveWithDnDStyle(e)},s=function(e,t){return function(r){Object.assign(r.prototype,{_handlerDragStartList:o(e),_handlerDropList:i(e,t),_handlerDragEnterList:l(e),_handlerDragOverList:d,_handlerDragLeaveList:u})}};t.default=s},521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(471),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=function(e){return function(t,r){var a=t.groupCaption,o=t.listCaption,i=t.caption;this.dragStartWithDnDStyle(r,[e.LIST,e.ITEM]),n.default.setTransferTo({event:r,dragId:a+";"+o+";"+i,xType:e.ITEM})}},i=function(e,t){return function(r,a){var n=r.groupCaption,o=r.listCaption,i=r.caption;this.dropWithDnDStyle(a);var l=JSON.parse(a.dataTransfer.getData("text")),d=l.xType,u=l.dragId,s=n+";"+o+";"+i;if(d===e.ITEM){if(u===s)return;a.preventDefault(),t.dragDropItem({dragId:u,dropId:s})}}},l=function(e){return function(t){t.preventDefault(),this.dragEnterWithDnDStyle(t,e.ITEM)}},d=function(e){e.preventDefault()},u=function(e){e.preventDefault(),this.dragLeaveWithDnDStyle(e)},s=function(e,t){return function(r){Object.assign(r.prototype,{_handlerDragStartItem:o(e),_handlerDropItem:i(e,t),_handlerDragEnterItem:l(e),_handlerDragOverItem:d,_handlerDragLeaveItem:u})}};t.default=s}});