import React from 'react'

const S = {
  RENDER_ERR: {
    color: '#f44336',
    fontWeight: 'bold'
  }
};

const MsgRenderErr = ({ isShow, style, msg='' }) => isShow
 ? <div style={{...S.RENDER_ERR, ...style}}>
      {`Error occured during rendering ${msg}`.trim() + '.'}
   </div>
 : null;

 export default MsgRenderErr
