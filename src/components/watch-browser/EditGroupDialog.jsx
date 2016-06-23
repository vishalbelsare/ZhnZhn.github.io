import React from 'react';

import WatchActions from '../../flux/actions/WatchActions';
import {WatchActionTypes} from '../../flux/actions/WatchActions';

import Msg from '../../constants/Msg';

import ModalDialog from '../zhn/ModalDialog';
import TabPane from '../zhn/TabPane';
import Tab from '../zhn/Tab';
import GroupAddPane from './GroupAddPane';
import GroupEditPane from './GroupEditPane';
import GroupDeletePane from './GroupDeletePane';

const EditGroupDialog = React.createClass({
  displayName : 'EditGroupDialog',
  propTypes : {
    isShow : React.PropTypes.bool,
    store : React.PropTypes.object,
    onClose : React.PropTypes.func
  },

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },

  render(){
    const {isShow, store, onClose} = this.props;
    return (
      <ModalDialog
         caption="Watch Groups Edit"
         isShow={isShow}
         isWithButton={false}
         onClose={onClose}
      >
        <TabPane key="1" width="380px" >
           <Tab title="Create">
             <GroupAddPane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                actionFailed={WatchActionTypes.EDIT_WATCH_FAILED}
                forActionType={WatchActionTypes.ADD_GROUP}
                msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
                onCreate={WatchActions.addGroup}
                onClose={onClose}
              />
           </Tab>
           <Tab title="Rename">
             <GroupEditPane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                actionFailed={WatchActionTypes.EDIT_WATCH_FAILED}
                forActionType={WatchActionTypes.RENAME_GROUP}
                msgOnNotSelect={Msg.NOT_SELECTED}
                msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
                onRename={WatchActions.renameGroup}
                onClose={onClose}
             />
           </Tab>
           <Tab title="Delete">
             <GroupDeletePane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                forActionType={WatchActionTypes.DELETE_GROUP}
                msgOnNotSelect={Msg.NOT_SELECTED}
                onDelete={WatchActions.deleteGroup}
                onClose={onClose}
             />
           </Tab>
        </TabPane>
      </ModalDialog>
    )
  }
});

export default EditGroupDialog