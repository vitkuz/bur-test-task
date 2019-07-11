import React from 'react';

import UserMenuAuth from './UserMenuAuth.container';
import UserMenuNotAuth from './UserMenuNotAuth';

import './userMenu.scss';

export const UserMenu = (props) => {
  return (
      <>
        { props.auth ? <UserMenuAuth /> : <UserMenuNotAuth /> }
      </>

  )
};

export default UserMenu;
