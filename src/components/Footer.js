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
                <div className="footer__contacts">
                    <p className="footer__author">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0156 2.96279L10.4352 1.19639C10.2423 0.980566 9.9841 0.859375 9.71106 0.859375C9.43801 0.859375 9.17981 0.978906 8.9869 1.19639L7.28482 3.09727C7.09191 3.31309 6.98358 3.60361 6.98358 3.90908C6.98358 4.21621 7.09042 4.50342 7.28482 4.7209L8.61443 6.21006C8.31153 6.9996 7.87633 7.71698 7.33231 8.32344C6.7877 8.93603 6.15109 9.41914 5.44474 9.76113L4.11513 8.27197C3.92222 8.05615 3.66401 7.93496 3.39097 7.93496C3.25629 7.9344 3.12287 7.96392 2.99852 8.02179C2.87417 8.07966 2.76139 8.16472 2.6668 8.27197L0.963242 10.1729C0.77033 10.3887 0.662003 10.6792 0.662003 10.9847C0.662003 11.2918 0.768846 11.579 0.963242 11.7965L2.54215 13.5629C2.87159 13.9314 3.32567 14.1423 3.79163 14.1423C3.88808 14.1423 3.98157 14.134 4.07655 14.1157C6.04128 13.7538 7.99117 12.5834 9.56563 10.8236C11.1386 9.06055 12.1833 6.8791 12.5098 4.67939C12.6033 4.05518 12.4163 3.41269 12.0156 2.96279ZM11.4577 4.48184C11.1683 6.43916 10.2275 8.3915 8.81031 9.97695C7.39315 11.5624 5.64952 12.6149 3.89996 12.9387C3.68033 12.9802 3.45477 12.8972 3.29451 12.7195L1.74379 10.9847L3.388 9.14355L5.16576 11.1357L5.17911 11.1507L5.49964 11.0179C6.47151 10.6181 7.35407 9.98671 8.08613 9.16743C8.8182 8.34814 9.38227 7.36057 9.73925 6.27314L9.85797 5.91455L8.06537 3.91074L9.70958 2.06963L11.2603 3.80449C11.4206 3.98379 11.4948 4.23613 11.4577 4.48184Z" fill="white"/>
                        </svg> +7 800 00-00-10  <span className="footer__free">Бесплатный по миру</span>
                    </p>
                    <p className="footer__author">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0476227 1.49097L0.463939 0.959717H11.2882L11.7045 1.49097V11.0535L11.2882 11.5847H0.463939L0.0476227 11.0535V1.49097ZM0.880255 2.59065V10.5222H10.8718V2.59172L6.13416 7.22847H5.62626L0.880255 2.59065ZM10.0642 2.02222H1.68791L5.87605 6.13303L10.0642 2.02222Z" fill="white"/>
                        </svg> citizenpoet@mail.com
                    </p>

                    <p className="footer__author">© Сделано студентами <span className="footer__span"><a className="footer__author-link" href="#">Яндекс.Практикума</a></span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;