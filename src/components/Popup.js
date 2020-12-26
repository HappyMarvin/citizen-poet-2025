import React from 'react';

function Popup(props) {
    return (
        <>
            <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-open'}`}>
                <form name="" action="#" className={`popup__container popup__container_type_${props.name}`} noValidate onSubmit={props.onSubmit}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </>
    );
}

export default Popup;