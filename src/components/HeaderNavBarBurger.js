import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavBarBurger() {
  return (
    <nav className="header__menu-burger">
        <button className="header__menu-burger-button-container">
            <div className="header__menu-burger-button"></div>
            <div className="header__menu-burger-button"></div>
            <div className="header__menu-burger-button"></div>
        </button>
        <ul className="header__menu-burger-box">
            <li className="header__menu-burger-item"><NavLink exact to="/" className="header__menu-burger-link" activeClassName="header__menu-burger-link_active">О компании</NavLink></li>
            <li className="header__menu-burger-item"><NavLink to="/chat-bot" className="header__menu-burger-link" activeClassName="header__menu-burger-link_active">Подать инициативу</NavLink></li>
            <li className="header__menu-burger-item"><NavLink to="*" className="header__menu-burger-link" activeClassName="header__menu-burger-link_active">Контакты</NavLink></li>
        </ul>
    </nav>
  );
}

export default HeaderNavBarBurger;