import React from 'react';
//import PropTypes from 'prop-types'

import OpenClose from '../zhn/OpenClose';
import MenuItems from './MenuItems'

const MenuTopic = ({
  style, openColor,
  caption, isInitOpen,
  items
}) => {
  const _isClose = isInitOpen === true
    ? false : true;
  return (
    <OpenClose
       rootStyle={style}
       openColor={openColor}
       caption={caption}
       isClose={_isClose}
    >
       <MenuItems items={items} />
    </OpenClose>
  );
};

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  isOpen: PropTypes.bool,
  items: PropTypes.arrayOf(
     PropTypes.shape({
       isOpen: PropTypes.bool,
       title: PropTypes.string,
       counter: PropTypes.number,
       isNew: PropTypes.bool,
       onClick: PropTypes.func,
       onBadgeClick: PropTypes.func,
       onBadgeClose: PropTypes.func
     })
  )
}
*/

export default MenuTopic