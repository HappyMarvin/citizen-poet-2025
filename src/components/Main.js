import React from 'react';
import cardOne from '../images/card1.png';
import cardTwo from '../images/card2.png';
import cardThree from '../images/card3.png';

function Main(props) {
    return (
        <main className="content">
            <ul className="cards">
                <li className="cards__item">
                    <img className="cards__image cards__image_one" src={cardOne} alt="О сервисе" />
                    <h2 className="cards__title">О сервисе</h2>
                    <p className="cards__description">Мы поможем сформулировать и направить запрос по стихам знаменитых классиков</p>
                </li>
                <li className="cards__item">
                    <img className="cards__image cards__image_two" src={cardTwo} alt="Закон" />
                    <h2 className="cards__title">Сроки</h2>
                    <p className="cards__description">Срок рассмотрения инициативы составляет не более 10 рабочих дней </p>
                </li>
                <li className="cards__item">
                    <img className="cards__image cards__image_three" src={cardThree} alt="О сервисе" />
                    <h2 className="cards__title">Отчет</h2>
                    <p className="cards__description">Подробный отчет о выполненной работе вы можете найти в личном кабинете</p>
                </li>
            </ul>
            <div className="content__buttons">
                <button className="content__button content__button_signup" type="button" onClick={props.onSignupPopup}>Зарегистрироваться</button>
                <button className="content__button content__button_signin" type="button" onClick={props.onSigninPopup}>Войти</button>
            </div>
        </main>
    );
}

export default Main;