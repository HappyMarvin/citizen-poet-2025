import React from 'react';
import citizenLogo from '../images/citizen-logo.png';
import twitterIcon from '../images/twitter-icon.png';
import fbIcon from '../images/fb-icon.png';
import vkIcon from '../images/vk-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="logo__container logo__container_footer">
                    <img className="logo__image logo__image_footer" src={citizenLogo} alt="Логотип сервиса Гражданин-поэт 2025" />
                    <p className="logo__text">Министерство гражданских инициатив</p>
                </div>
                <ul className="footer__social-icons">
                    <li><a className="footer__social-icons-link" href="#"><img className="footer__social-icon" src={twitterIcon} alt="Твиттер" /></a></li>
                    <li><a className="footer__social-icons-link" href="#"><img className="footer__social-icon" src={fbIcon} alt="Фейсбук" /></a></li>
                    <li><a className="footer__social-icons-link" href="#"><img className="footer__social-icon" src={vkIcon} alt="Вконтакте" /></a></li>
                </ul>
                <p className="footer__author">© Сделано студентами <span className="footer__span"><a className="footer__author-link" href="#">Яндекс.Практикума</a></span></p>
            </div>
        </footer>
    );
}

export default Footer;