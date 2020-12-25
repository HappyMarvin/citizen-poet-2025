import React from 'react';
import Popup from './Popup';

function SuccessPopup(props) {
    return (
            <Popup isOpen={props.isOpen} name="success" title="Запрос отправлен">
                <button className="popup__close-button" type="reset" onClick={props.onClose} />
            </Popup>
    );
}

export default SuccessPopup;