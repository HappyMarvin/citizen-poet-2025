import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuMobile(props) {
    return (
        <>
            <ul className={`menu-mobile ${props.isOpen && 'menu-mobile_is-open'}`}>
                <li className="menu-mobile__item" onClick={props.onClose}><NavLink exact to="*" className="menu-mobile__link">О компании</NavLink></li>
                <li className="menu-mobile__item" onClick={props.onClose}><NavLink to="/chat-bot" className="menu-mobile__link">Подать инициативу</NavLink></li>
                <li className="menu-mobile__item" onClick={props.onClose}><NavLink to="*" className="menu-mobile__link">Контакты</NavLink></li>
                <button className="menu-mobile__close-button-container" onClick={props.onClose}>
                    <div className="menu-mobile__close-button menu-mobile__close-button_one"></div>
                    <div className="menu-mobile__close-button menu-mobile__close-button_two"></div>
                </button>
            </ul>
        </>
    );
}

export default MenuMobile;