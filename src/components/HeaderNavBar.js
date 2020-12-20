import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavBar() {
  return (
    <nav className="header__links">
        <ul className="header__menu">
            <li className="header__menu-item"><NavLink exact to="/" className="header__link" activeClassName="header__link_active">Главная</NavLink></li>
            <li className="header__menu-item"><NavLink to="/chat-bot" className="header__link" activeClassName="header__link_active">Подать инициативу</NavLink></li>
            <li className="header__menu-item"><NavLink to="*" className="header__link" activeClassName="header__link_active">Контакты</NavLink></li>
        </ul> 
    </nav>
  );
}

export default HeaderNavBar;