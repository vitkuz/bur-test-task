import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

export const Header = () => {
  return (
    <div className={`menu`}>
      <ul className={`menu__items`}>
        <li className={`menu__item`}>
          <NavLink to={`/`} exact className={`menu__link`} activeClassName={`menu__link--active`}>Home</NavLink>
        </li>
        <li className={`menu__item`}>
          <NavLink to={`/posts`} className={`menu__link`} activeClassName={`menu__link--active`}>Posts</NavLink>
        </li>
        <li className={`menu__item`}>
          <NavLink to={`/users`} className={`menu__link`} activeClassName={`menu__link--active`}>Users</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default Header;
