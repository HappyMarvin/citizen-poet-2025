import React from 'react';

function HeaderNavBarBurger(props) {
  return (
    <nav className="header__menu-burger">
        <button className="header__menu-burger-button-container" type="button" onClick={props.onMenuMobile}>
            <div className="header__menu-burger-button"></div>
            <div className="header__menu-burger-button"></div>
            <div className="header__menu-burger-button"></div>
        </button>
    </nav>
  );
}

export default HeaderNavBarBurger;