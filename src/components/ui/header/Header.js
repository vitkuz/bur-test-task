import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import UserMenu from '../userMenu/UserMenu.container';

import './header.scss';

export const Header = () => {
  return (
    <header className={`header`}>
      <div className={`header__row`}>
        <div className={`header__col`}>
          <Logo />
        </div>

        <div className={`header__col`}>
          <Menu />
        </div>

        <div className={`header__col`}>
          <UserMenu />
        </div>
      </div>
    </header>
  )
};

export default Header;
