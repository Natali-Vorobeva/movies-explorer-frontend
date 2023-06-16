class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }




  // Добавление новой карточки через попап
  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._parseResponse);
  }

  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/movies/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then(this._parseResponse);
  }

  // Ставим лайк карточке
  setLike(cardId) {
    return fetch(`${this._url}/movies/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._parseResponse);
  }

  // Удаляем лайк
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._parseResponse);
  }

	changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.setLike(cardId);
    } else {
      return this.deleteLike(cardId);
    }
  }

  // Получение информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users`, {
      headers: this._headers
    })
      .then(this._parseResponse);
  }

  // Редактирование информации о пользователе через попап
  editUserInfo({ name, email }) {
    return fetch(`${this._url}/users`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._parseResponse);
  }
}

export const mainApi = new MainApi({
  url: 'api.portfolio-vorobeva.nomoredomains.rocks',
  headers: {
    // authorization: '032be63d-a621-4ef4-91b0-cc2afa2b0165',
    'Content-Type': 'application/json'
  }
});