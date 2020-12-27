import React from 'react';

function UserRequest(props) {

    function handleDeleteClick() {
        props.onRequestDelete(props.request);
    }

    return (
        <>
            <div className="profile__requests-history-card-item" key={props.request._id}>
                <h3 className="profile__requests-history-card-title">{props.request.title}</h3>
                <div className="profile__requests-history-message">
                    <p className="profile__requests-history-text-message">{props.request.text}</p>
                </div>
                <p className="profile__requests-history-description">{props.request.createdAt}</p>
                <p className="profile__requests-history-status">Статус: запрос находится на рассмотрении</p>
                <button className="profile__requests-history-delete-button" type="button" onClick={handleDeleteClick}/>
            </div>
        </>
    );
}

export default UserRequest;