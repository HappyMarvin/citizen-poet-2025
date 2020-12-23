import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';

function UserProfile() {
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
                    <NavLink to="/profile" className="header__user" activeClassName="header__user_active">
                        <img className="header__user-avatar" src={userAvatar} alt="Аватар пользователя" />
                    </NavLink>
                </section>
            </header>
            <div className="profile">
                <div className="profile__user-container">
                    <button className="profile__settings-button-mobile" type="button"/>
                    <img className="profile__user-avatar" src={userAvatar} />
                    <div className="profile__user-about">
                        <div className="profile__name-settings-container">
                            <div className="profile__name-about-container">
                                <h2 className="profile__name">Иванов Иван Иванович</h2>
                                <p className="profile__description">Дата рождения: 22.01.2000</p>
                            </div>
                            <button className="profile__requests-history-button-mobile" type="button">Создать запрос</button>
                            <button className="profile__settings-button" type="button" />
                        </div>
                        <div className="profile__dashboard">
                            <div className="profile__dashboard-column">
                                <h3 className="profile__dashboard-title">26</h3>
                                <p className="profile__dashboard-description">Запросов было подано</p>
                            </div>
                            <div className="profile__dashboard-column">
                                <h3 className="profile__dashboard-title">2</h3>
                                <p className="profile__dashboard-description">Находятся на рассмотрении</p>
                            </div>
                            <div className="profile__dashboard-column">
                                <h3 className="profile__dashboard-title">18</h3>
                                <p className="profile__dashboard-description">Положительных решений</p>
                            </div>
                            <div className="profile__dashboard-column">
                                <h3 className="profile__dashboard-title">6</h3>
                                <p className="profile__dashboard-description">Отрицательных решений</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__requests-history-container">
                    <div className="profile__requests-history">
                        <h2 className="profile__requests-history-title">История запросов</h2>
                        <button className="profile__requests-history-button" type="button">Создать запрос</button>
                    </div>
                    <div className="profile__requests-history-cards">
                        <div className="profile__requests-history-card-item">
                            <h3 className="profile__requests-history-card-title">Заменить скамейку у дома</h3>
                            <div className="profile__requests-history-message">
                                <p className="profile__requests-history-text-message">Утраты сердца<span className="profile__requests-history-text-message-span"> заменить </span>Зеленой садовой<span className="profile__requests-history-text-message-span"> скамейки </span>
В ночь таежную<span className="profile__requests-history-text-message-span"> у </span>костра Стучащаяся пальчиком в<span className="profile__requests-history-text-message-span"> дома</span></p>
                            </div>
                            <p className="profile__requests-history-description">Дата подачи: 30.02.2025</p>
                            <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                            <button className="profile__requests-history-delete-button" type="button"/>
                        </div>
                        <div className="profile__requests-history-card-item">
                            <h3 className="profile__requests-history-card-title">Заменить скамейку у дома</h3>
                            <div className="profile__requests-history-message">
                                <p className="profile__requests-history-text-message">Утраты сердца<span className="profile__requests-history-text-message-span"> заменить </span>Зеленой садовой<span className="profile__requests-history-text-message-span"> скамейки </span>
В ночь таежную<span className="profile__requests-history-text-message-span"> у </span>костра Стучащаяся пальчиком в<span className="profile__requests-history-text-message-span"> дома</span></p>
                            </div>
                            <p className="profile__requests-history-description">Дата подачи: 30.02.2025</p>
                            <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                            <button className="profile__requests-history-delete-button" type="button"/>
                        </div>
                        <div className="profile__requests-history-card-item">
                            <h3 className="profile__requests-history-card-title">Заменить скамейку у дома</h3>
                            <div className="profile__requests-history-message">
                                <p className="profile__requests-history-text-message">Утраты сердца<span className="profile__requests-history-text-message-span"> заменить </span>Зеленой садовой<span className="profile__requests-history-text-message-span"> скамейки </span>
В ночь таежную<span className="profile__requests-history-text-message-span"> у </span>костра Стучащаяся пальчиком в<span className="profile__requests-history-text-message-span"> дома</span></p>
                            </div>
                            <p className="profile__requests-history-description">Дата подачи: 30.02.2025</p>
                            <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                            <button className="profile__requests-history-delete-button" type="button"/>
                        </div>
                        <div className="profile__requests-history-card-item">
                            <h3 className="profile__requests-history-card-title">Заменить скамейку у дома</h3>
                            <div className="profile__requests-history-message">
                                <p className="profile__requests-history-text-message">Утраты сердца<span className="profile__requests-history-text-message-span"> заменить </span>Зеленой садовой<span className="profile__requests-history-text-message-span"> скамейки </span>
В ночь таежную<span className="profile__requests-history-text-message-span"> у </span>костра Стучащаяся пальчиком в<span className="profile__requests-history-text-message-span"> дома</span></p>
                            </div>
                            <p className="profile__requests-history-description">Дата подачи: 30.02.2025</p>
                            <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                            <button className="profile__requests-history-delete-button" type="button"/>
                        </div>
                        <div className="profile__requests-history-card-item">
                            <h3 className="profile__requests-history-card-title">Заменить скамейку у дома</h3>
                            <div className="profile__requests-history-message">
                                <p className="profile__requests-history-text-message">Утраты сердца<span className="profile__requests-history-text-message-span"> заменить </span>Зеленой садовой<span className="profile__requests-history-text-message-span"> скамейки </span>
В ночь таежную<span className="profile__requests-history-text-message-span"> у </span>костра Стучащаяся пальчиком в<span className="profile__requests-history-text-message-span"> дома</span></p>
                            </div>
                            <p className="profile__requests-history-description">Дата подачи: 30.02.2025</p>
                            <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                            <button className="profile__requests-history-delete-button" type="button"/>
                        </div>
                        <button className="profile__requests-history-more-button">Посмотреть еще</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;