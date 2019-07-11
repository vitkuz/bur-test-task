import React from 'react';
import { NavLink } from 'react-router-dom';
import './userMenu.scss';

export const UserMenu = () => {
  return (
    <div className={`user-menu`}>
      <ul className={`user-menu__items`}>
        <li className={`user-menu__item`}>
          <NavLink to={`/user`} className={`user-menu__link`} activeClassName={`user-menu__link--active`}>Protected page</NavLink>
        </li>
        <li className={`user-menu__item`}>
          <NavLink to={`/login`} className={`user-menu__link`} activeClassName={`user-menu__link--active`}>Login</NavLink>
        </li>
        <li className={`user-menu__item`}>
          <NavLink to={`/system`} className={`user-menu__link`} activeClassName={`user-menu__link--active`}>System</NavLink>
        </li>
        <li className={`user-menu__item`}>
          <NavLink to={`/register`} className={`user-menu__link`} activeClassName={`user-menu__link--active`}>Register</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default UserMenu;
