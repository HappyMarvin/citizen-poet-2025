import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavBarBurger from './HeaderNavBarBurger';
import HeaderNavBar from './HeaderNavBar';
import citizenLogo from '../images/citizen-logo.png';
import userAvatar from '../images/user-avatar.png';
import chatBotAvatar from '../images/chat-bot-image.png';

function ChatBot(props) {
    const [requestTitle, setRequestTitle] = React.useState('');
    const [requestText, setRequestText] = React.useState('');

    function handleRequestTitle(e) {
        setRequestTitle(e.target.value);
    }

    function handleRequestText(e) {
        setRequestText(e.target.value);
    }

    function handleRequestTextSubmit(e) {
        e.preventDefault();
        props.onSendRequestText({
            title: requestTitle,
            text: requestText,
        });
    }


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
                    <NavLink to="/profile" className="header__user">
                        <img className="header__user-avatar" src={userAvatar} alt="Аватар пользователя" />
                    </NavLink>
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

                <form action="#" className="enter enter_chat" onSubmit={handleRequestTextSubmit}>
                    <img src={userAvatar} alt="Аватар пользователя" className="enter__avatar" />
                    <textarea className="enter__title-input" maxLength="30" placeholder="Напишите заголовок запроса" value={requestTitle} onChange={handleRequestTitle}/>
                    <textarea className="enter__text-input" maxLength="200" placeholder="Напишите запрос" value={requestText} onChange={handleRequestText} />
                    <button className="enter__reset">Начать заново</button>
                    <button className="enter__submit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44609 0.360667C9.54561 0.24634 9.66383 0.155634 9.79399 0.0937451C9.92414 0.0318559 10.0637 0 10.2046 0C10.3455 0 10.485 0.0318559 10.6152 0.0937451C10.7454 0.155634 10.8636 0.24634 10.9631 0.360667L17.3911 7.72655C17.4908 7.84058 17.57 7.97606 17.624 8.1252C17.678 8.27435 17.7058 8.43424 17.7058 8.59572C17.7058 8.7572 17.678 8.91709 17.624 9.06624C17.57 9.21538 17.4908 9.35086 17.3911 9.46489L10.9631 16.8308C10.7619 17.0613 10.4891 17.1908 10.2046 17.1908C9.9201 17.1908 9.64726 17.0613 9.44609 16.8308C9.24492 16.6003 9.13191 16.2876 9.13191 15.9616C9.13191 15.6356 9.24492 15.3229 9.44609 15.0924L15.1177 8.59572L9.44609 2.09901C9.34632 1.98498 9.26717 1.8495 9.21316 1.70036C9.15915 1.55121 9.13135 1.39132 9.13135 1.22984C9.13135 1.06836 9.15915 0.908471 9.21316 0.759324C9.26717 0.610177 9.34632 0.474704 9.44609 0.360667Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5625 8.59583C0.5625 8.27023 0.675371 7.95797 0.876282 7.72774C1.07719 7.49751 1.34969 7.36816 1.63382 7.36816H15.5609C15.8451 7.36816 16.1176 7.49751 16.3185 7.72774C16.5194 7.95797 16.6323 8.27023 16.6323 8.59583C16.6323 8.92142 16.5194 9.23368 16.3185 9.46391C16.1176 9.69414 15.8451 9.82349 15.5609 9.82349H1.63382C1.34969 9.82349 1.07719 9.69414 0.876282 9.46391C0.675371 9.23368 0.5625 8.92142 0.5625 8.59583Z" fill="white"/>
                        </svg>


                    </button>
                </form>
            </div>
        </>
    );
}

export default ChatBot;