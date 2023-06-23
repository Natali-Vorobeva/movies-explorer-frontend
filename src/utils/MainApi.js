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
  // getUserInfo() {
  //   return fetch(`${this._url}/users/me`, {
  //     headers: this._headers
  //   })
  //     .then(this._parseResponse);
  // }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(this._parseResponse);
  }


  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
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
        nameEN: movie.nameEN || 'Нет данных'
      })
    })
      .then(this._checkResponseStatus);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponseStatus);
  }
}

// Редактирование информации о пользователе через попап
// editUserInfo(name, email) {
//   return fetch(`${this._url}/users`, {
//     method: 'PATCH',
//     headers: this._headers,
//     body: JSON.stringify({
//       name: name,
//       email: email;
//     })
//   })
//     .then(this._parseResponse);
// };


export const mainApi = new MainApi({
  url: 'https://diplom-portfolio-vorobeva.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  }
});