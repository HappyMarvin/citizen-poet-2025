import React from 'react';
import { NavLink } from 'react-router-dom';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';
import chatBotAvatar from '../images/chat-bot-image.png';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';

function Header() {
    return (
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
                <a className="header__user" href="#" target="_blank">
                    <img className="header__user-avatar" src={userAvatar} alt="Аватар пользователя" />
                </a>
            </section>
            <section className="header__section-two">
                <div className="header__text-container">
                    <h1 className="header__title">Министерство гражданских инициатив</h1>
                    <p className="header__description">Мы поможем сформулировать и направить запрос по стихам знаменитых классиков согластно закону номер 1111111 от 12.03.2025 “О цензуре в административных запросах.”</p>
                    <button className="header__button"><NavLink to="/chat-bot" className="header__button-link">Начать</NavLink></button>
                </div>
                <div className="header__phone-container">
                    <div className="header__phone-message-container header__phone-message-container_incoming">
                        <img className="header__phone-message-image header__phone-message-image_incoming" src={chatBotAvatar} alt="Аватар чат бота" />
                        <div className="header__phone-message header__phone-message_incoming">
                            <p className="header__phone-message-text">Привет, меня зовут Николай Васильевич! Напиши свой запрос и я найду его в строчках знаменитых классиков</p>
                        </div>
                    </div>
                    <div className="header__phone-message-container header__phone-message-container_outgoing">
                        <div className="header__phone-message header__phone-message_outgoing">
                            <p className="header__phone-message-text">Заменить скамейку у дома</p>
                        </div>
                        <img className="header__phone-message-image header__phone-message-image_outgoing" src={userAvatar} alt="Аватар пользователя" />
                    </div>
                    <div className="header__phone-message-container header__phone-message-container_incoming header__phone-message-container_last-tablet">
                        <img className="header__phone-message-image header__phone-message-image_incoming" src={chatBotAvatar} alt="Аватар чат бота" />
                        <div className="header__phone-message header__phone-message_incoming">
                            <p className="header__phone-message-text">Утраты сердца <span className="header__phone-message-text-span">заменить</span> Зеленой садовой <span className="header__phone-message-text-span">скамейки</span> В ночь таежную <span className="header__phone-message-text-span">у</span> костра Стучащаяся пальчиком в <span className="header__phone-message-text-span">дома</span></p>
                        </div>
                    </div>
                    <div className="header__phone-message-container header__phone-message-container_incoming header__phone-message-container_last">
                        <img className="header__phone-message-image header__phone-message-image_incoming" src={chatBotAvatar} alt="Аватар чат бота" />
                        <div className="header__phone-message header__phone-message_incoming">
                            <p className="header__phone-message-text">Все верно, регистрируем?</p>
                        </div>
                    </div>
                    <div className="header__phone-buttons-container">
                        <div className="header__phone-button" type="submit">Зарегистрировать</div>
                        <div className="header__phone-button" type="reset">Отмена</div>
                    </div>
                    <button className="header__phone-button-mobile"><NavLink to="/chat-bot" className="header__button-link">Начать</NavLink></button>
                </div>
            </section>
        </header>
    );
}

export default Header;
