import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';
import chatBotAvatar from '../images/chat-bot-image.png';

function ChatBot() {
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
                    <a className="header__user" href="#" target="_blank">
                        <img className="header__user-avatar" src={userAvatar} alt="Аватар пользователя" />
                    </a>
                </section>
            </header>
            <div className="chat-content">
                <div className="chat-container">
                <div className="chat-container__massage chat-container__massage_bot">
                    <img src={chatBotAvatar} alt="Аватар чат-бота" className="chat-container__message-avatar" />
                    <p className="chat-container__massage-text">Привет, меня зовут Николай Васильевич! Напиши свой запрос и я найду
                    его в строчках знаменитых классиков </p>
                </div>

                <div className="chat-container__massage chat-container__massage_user">
                    <img src={userAvatar} alt="Аватар пользователя"
                        className="chat-container__message-avatar chat-container__message-avatar_user" />
                    <p className="chat-container__massage-text">Заменить скамейку у дома</p>
                </div>

                <div className="chat-container__massage chat-container__massage_bot">
                    <img src={chatBotAvatar} alt="Аватар чат-бота" className="chat-container__message-avatar" />
                    <p className="chat-container__massage-text">Утраты сердца заменить Зеленой садовой скамейки 
                    В ночь таежную у костра  Стучащаяся пальчиком в дома</p>
                </div>

                <div className="chat-container__massage chat-container__massage_bot">
                    <img src={chatBotAvatar} alt="Аватар чат-бота" className="chat-container__message-avatar" />
                    <p className="chat-container__massage-text">Все верно, регистрируем?</p>
                </div>

                <div className="chat-container__separator"></div>

                <button className="chat-container__submit">Зарегистрировать</button>

                </div>

                <form action="#" className="enter enter_chat">
                    <img src={userAvatar} alt="Аватар пользователя" className="enter__avatar" />
                    <textarea className="enter__text-input" maxLength="200" placeholder="Напишите запрос"></textarea>
                    <button className="enter__reset">Начать заново</button>
                    <button className="enter__submit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.4456 0.360667C9.54512 0.24634 9.66334 0.155634 9.7935 0.0937451C9.92365 0.0318559 10.0632 0 10.2041 0C10.345 0 10.4846 0.0318559 10.6147 0.0937451C10.7449 0.155634 10.8631 0.24634 10.9626 0.360667L17.3906 7.72655C17.4903 7.84058 17.5695 7.97606 17.6235 8.1252C17.6775 8.27435 17.7053 8.43424 17.7053 8.59572C17.7053 8.7572 17.6775 8.91709 17.6235 9.06624C17.5695 9.21538 17.4903 9.35086 17.3906 9.46489L10.9626 16.8308C10.7614 17.0613 10.4886 17.1908 10.2041 17.1908C9.91961 17.1908 9.64677 17.0613 9.4456 16.8308C9.24443 16.6003 9.13142 16.2876 9.13142 15.9616C9.13142 15.6356 9.24443 15.3229 9.4456 15.0924L15.1172 8.59572L9.4456 2.09901C9.34583 1.98498 9.26668 1.8495 9.21267 1.70036C9.15866 1.55121 9.13086 1.39132 9.13086 1.22984C9.13086 1.06836 9.15866 0.908471 9.21267 0.759324C9.26668 0.610177 9.34583 0.474704 9.4456 0.360667Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5625 8.5957C0.5625 8.27011 0.675371 7.95785 0.876282 7.72762C1.07719 7.49738 1.34969 7.36804 1.63382 7.36804H15.5609C15.8451 7.36804 16.1176 7.49738 16.3185 7.72762C16.5194 7.95785 16.6323 8.27011 16.6323 8.5957C16.6323 8.9213 16.5194 9.23356 16.3185 9.46379C16.1176 9.69402 15.8451 9.82336 15.5609 9.82336H1.63382C1.34969 9.82336 1.07719 9.69402 0.876282 9.46379C0.675371 9.23356 0.5625 8.9213 0.5625 8.5957Z" fill="black"/>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    );
}

export default ChatBot;