import React from 'react'

import ModalPopup from '../zhn-moleculs/ModalPopup'
import D from '../dialogs/DialogCell'
import STYLE from './Modal.Style'

const CHECKED_COLOR = '#1b75bb';

const CheckBoxList = ({
  selectProps, crIsId, onToggle
}) => selectProps
 .map(item => (
    <D.RowCheckBox
      key={item.id}
      initValue={true}
      rootStyle={STYLE.ROW_CB}
      checkedColor={CHECKED_COLOR}
      caption={item.caption}
      onToggle={() => onToggle(crIsId(item.id))}
    />
));

const ModalToggle = ({
  isShow, style, className=STYLE.CL,
  selectProps=[], isShowDate,
  crIsId, onToggle,
  onClose
}) => (
  <ModalPopup
    isShow={isShow}
    style={{...STYLE.ROOT, ...style}}
    className={className}
    onClose={onClose}
  >
    <CheckBoxList
      selectProps={selectProps}
      crIsId={crIsId}
      onToggle={onToggle}
    />
    <D.RowCheckBox
      key="isForDate"
      value={isShowDate}
      rootStyle={STYLE.ROW_CB}
      checkedColor={CHECKED_COLOR}
      caption="For Date"
      onToggle={() => onToggle('isShowDate')}
    />
  </ModalPopup>
);

export default ModalToggle
