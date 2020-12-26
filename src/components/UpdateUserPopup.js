import React from 'react';
import Popup from './Popup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function UpdateUserPopup(props) {
    const [newName, setNewName] = React.useState('');
    const [newBirthday, setNewBirthday] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setNewName(e.target.value);
    }

    function handleChangeBirthday(e) {
        setNewBirthday(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: newName,
            birthday: newBirthday
        });
    }

    React.useEffect(() => {
        setNewName(currentUser.newName);
        setNewBirthday(currentUser.newBirthday);
    }, [currentUser]);

    return (
            <Popup isOpen={props.isOpen} name="user-update" title="Поменять данные" onClose={props.onClose} onSubmit={handleSubmit}>
                <input className="popup__input" type="text" placeholder="Имя и фамилия" required value={newName} onChange={handleChangeName}/>
                <input className="popup__input popup__input-birthday" type="date" placeholder="Дата рождения" required value={newBirthday} onChange={handleChangeBirthday}/>
                <button className="popup__submit-button" type="submit">Сохранить</button>
                <button className="popup__close-button" type="reset" onClick={props.onClose} />
            </Popup>
    );
}

export default UpdateUserPopup;