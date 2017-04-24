"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crDragStartList = function _crDragStartList(DRAG) {
  return function (_ref, ev) {
    var groupCaption = _ref.groupCaption,
        caption = _ref.caption;

    this.dragStartWithDnDStyle(ev, [DRAG.GROUP, DRAG.LIST]);
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dropEffect = "move";
    var _data = {
      dragId: groupCaption + ";" + caption,
      xType: DRAG.LIST
    };
    ev.dataTransfer.setData("text", JSON.stringify(_data));
  };
};

var _crDropList = function _crDropList(DRAG, WatchActions) {
  return function (_ref2, ev) {
    var groupCaption = _ref2.groupCaption,
        caption = _ref2.caption;

    this.dropWithDnDStyle(ev);
    //ev.currentTarget.style.borderLeft = "";

    var data = JSON.parse(ev.dataTransfer.getData("text")),
        xType = data.xType,
        dragId = data.dragId,
        dropId = groupCaption + ";" + caption + ";";


    if (xType === DRAG.LIST) {
      if (dragId !== dropId) {
        ev.preventDefault();
        WatchActions.dragDropList({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    } else if (xType === DRAG.ITEM) {
      ev.preventDefault();
      WatchActions.dragDropItem({
        dragId: dragId,
        dropId: dropId
      });
    }
  };
};

var _crDragEnterList = function _crDragEnterList(DRAG) {
  return function (ev) {
    ev.preventDefault();
    this.dragEnterWithDnDStyle(ev, DRAG.LIST);
  };
};

var _handlerDragOverList = function _handlerDragOverList(ev) {
  ev.preventDefault();
};

var _handlerDragLeaveList = function _handlerDragLeaveList(ev) {
  ev.preventDefault();
  this.dragLeaveWithDnDStyle(ev);
};

var withDnDList = function withDnDList(DRAG, WatchActions) {
  return function (target) {
    var _proto = target.prototype;
    _proto._handlerDragStartList = _crDragStartList(DRAG);
    _proto._handlerDropList = _crDropList(DRAG, WatchActions);
    _proto._handlerDragEnterList = _crDragEnterList(DRAG);
    _proto._handlerDragOverList = _handlerDragOverList;
    _proto._handlerDragLeaveList = _handlerDragLeaveList;
  };
};

exports.default = withDnDList;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\watch-browser\decorators\withDnDList.js.map