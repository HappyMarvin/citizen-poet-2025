import React from 'react';
import Popup from './Popup';

function SignInPopup(props) {
    return (
            <Popup isOpen={props.isOpen} name="signin" title="Вход">
                <input className="popup__input popup__input_type_email" type="email" placeholder="E-mail" required />
                <input className="popup__input popup__input_type_password" type="password" placeholder="Пароль" required />
                <button className="popup__submit-button" type="submit">Войти</button>
                <button className="popup__close-button" type="reset" onClick={props.onClose} />
            </Popup>
    );
}

export default SignInPopup;