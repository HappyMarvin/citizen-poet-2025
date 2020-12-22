import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';

function PageNotFound () {
  return (
      <>
        <header className="header">
            <section className="header__section-one">
                <HeaderNavBarBurger />
                <div className="logo__container logo__container_header">
                    <NavLink to="/" className="logo__link">
                        <img className="logo__image logo__image_header" src={citizenLogo} alt="Логотип сервиса Гражданин-поэт 2025" />
                    </NavLink>
                    <p className="logo__text logo__text_header">Министерство гражданских инициатив</p>
                </div>
                <HeaderNavBar />
                <NavLink to="/profile" className="header__user">
                    <img className="header__user-avatar" src={userAvatar} alt="Аватар пользователя" />
                </NavLink>
            </section>
        </header>
        <div className="page-not-found">
        <h2 className="page-not-found__title">404 - СТРАНИЦА НЕ НАЙДЕНА</h2>
        <Link className="page-not-found__button" to="/">Вернуться на главную</Link>
        </div>
    </>
  )
}

export default PageNotFound;