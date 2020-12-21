import React from 'react';
import Popup from './Popup';

function SignUpPopup(props) {
    return (
        <Popup isOpen={props.isOpen} name="signup" title="Регистрация">
            <input className="popup__input popup__input_type_name" type="text" placeholder="Ф.И.О." minLength="5" maxLength="40" required />
            <input className="popup__input popup__input_type_phone" type="tel" placeholder="Телефон" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" required />
            <input className="popup__input popup__input_type_email" type="email" placeholder="E-mail" required />
            <input className="popup__input popup__input_type_password" type="password" placeholder="Пароль" required />
            <div className="popup__radio-container">
                <input className="popup__radiobutton" type="radio" value="agree" required />
                <p className="popup__radio-offer">Согласие на обработку персональных данных</p>
            </div>
            <button className="popup__submit-button" type="submit">Зарегистрироваться</button>
            <button className="popup__close-button" type="reset" onClick={props.onClose} />
        </Popup>
    );
}

export default SignUpPopup;