class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    createUser({ name, phone, email, password }) {
        return fetch(`${this._url}users`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                password: password
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при создании пользователя');
        });
    }

    updateUser({name, birthday}) {
        return fetch(`${this._url}users/5fe4dd99dabdf700174b473a`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                birthday: birthday
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при создании пользователя');
        });
    }

    getUserById(id) {
        return fetch(`${this._url}users/${id}`, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при поиске пользователя')
        })
    }

    deleteUserById(id) {
        return fetch(`${this._url}users/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при удалении пользователя')
        })
    }

    getUserInfo() {
        return fetch(`${this._url}users/5fe4dd99dabdf700174b473a`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject('Произошла ошибка при загрузке данных пользователя с сервера');
        });
    }

    createRequest({ title, text }) {
        return fetch(`${this._url}requests`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                title: title,
                text: text
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при создании запроса')
        })
    }

    getRequests() {
        return fetch(`${this._url}requests`, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при получении списка запросов')
        })
    }

    deleteRequest(requestId) {
        return fetch(`${this._url}requests/${requestId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Произошла ошибка при удалении запроса')
        })
    }
}

const api = new Api({
    url: 'https://citizen-poet-2025.herokuapp.com/',
    headers: {
        'content-type': 'application/JSON',
    },
});

export default api;