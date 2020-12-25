import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';
import UserRequest from './UserRequest';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function UserProfile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <header className="header">
                <section className="header__section-one">
                    <HeaderNavBarBurger
                    onMenuMobile={props.onMenuMobile}
                    />
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
                                <h2 className="profile__name">{currentUser.name}</h2>
                                <p className="profile__description">Дата рождения: <span>{currentUser.birthday}</span></p>
                            </div>
                            <button className="profile__requests-history-button-mobile" type="button">Создать запрос</button>
                            <button className="profile__settings-button" type="button" onClick={props.onUpdateUserPopup}/>
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
                        <NavLink to="/chat-bot"><button className="profile__requests-history-button" type="button">Создать запрос</button></NavLink>
                    </div>
                    <div className="profile__requests-history-cards">
                        { props.requests.map((request) => (
                            <UserRequest
                            request={request}
                            key={request._id}
                            onRequestDelete={props.onRequestDelete}
                            />
                            ))}
                        <button className="profile__requests-history-more-button">Посмотреть еще</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;