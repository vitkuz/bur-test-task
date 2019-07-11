import React from 'react';
import { NavLink } from 'react-router-dom';

export const UserMenuAuth = (props) => {
    console.log(props);
    return (
        <div className={`user-menu`}>
            <ul className={`user-menu__items`}>
                <li className={`user-menu__item`}>
                    <NavLink to={`/user`} className={`user-menu__link`} activeClassName={`user-menu__link--active`}>Profile</NavLink>
                </li>
                <li className={`user-menu__item`}>
                    <NavLink to={`/logout`} className={`user-menu__link`} activeClassName={`user-menu__link--active`} onClick={(e) => {e.preventDefault(); props.logOut()}}>Log out</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default UserMenuAuth;
