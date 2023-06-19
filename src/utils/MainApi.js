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

// Получение информации о пользователе с сервера
getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    headers: this._headers
  })
    .then(this._parseResponse);
}


getMovies() {
  return fetch(`${this._address}/movies`, {
    headers: this._headers,
    credentials: 'include',
  })
  .then(this._checkResponseStatus);
}

addMovie(movie) {
  return fetch(`${this._address}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: this._headers,
    body: JSON.stringify({
      country: movie.country || 'Нет данных',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: (`https://api.nomoreparties.co/${movie.image.url}`),
      trailerLink: movie.trailerLink || 'https://www.youtube.com',
      thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
      movieId: movie.id,
      nameRU: movie.nameRU || 'Нет данных',
      nameEN: movie.nameEN || 'Нет данных'})
  })
  .then(this._checkResponseStatus);
}

deleteMovie(movieId) {
  return fetch(`${this._address}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: this._headers,
  })
  .then(this._checkResponseStatus);
}
}

  // Добавление новой карточки через попап
  // addCard(data) {
  //   return fetch(`${this._url}/cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link
  //     })
  //   })
  //     .then(this._parseResponse);
  // }

  // Удаление карточки
  // deleteCard(cardId) {
  //   return fetch(`${this._url}/movies/${cardId}`, {
  //     headers: this._headers,
  //     method: 'DELETE'
  //   })
  //     .then(this._parseResponse);
  // }

  // Ставим лайк карточке
  // setLike(cardId) {
  //   return fetch(`${this._url}/movies/${cardId}/likes`, {
  //     method: 'PUT',
  //     headers: this._headers
  //   })
  //     .then(this._parseResponse);
  // }

  // Удаляем лайк
  // deleteLike(cardId) {
  //   return fetch(`${this._url}/cards/${cardId}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //     .then(this._parseResponse);
  // }

	// changeLikeCardStatus(cardId, isLiked) {
  //   if (isLiked) {
  //     return this.setLike(cardId);
  //   } else {
  //     return this.deleteLike(cardId);
  //   }
  // }



  // Редактирование информации о пользователе через попап
  // editUserInfo({
  //   name, email
  // }) {
  //   return fetch(`${this._url}/users`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       email: email
  //     })
  //   })
  //     .then(this._parseResponse);
  // }


export const mainApi = new MainApi({
  url: 'https://diplom-portfolio-vorobeva.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  }
});