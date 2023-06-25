class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // return Promise.reject(`Ошибка: ${res.status}`)
    return res.text().then((text) => {
      return Promise.reject({
        status: res.status,
        errorText:
          JSON.parse(text).message === 'validation failed'
            ? JSON.parse(text).validation.body.message
            : JSON.parse(text).message
      });
    });
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      mode: 'no-cors',
      headers: this._headers
    })
      .then(this._parseResponse);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      // mode: 'no-cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._handleRes);
  };

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
      .then(this._handleRes);
  };

  register(data) {
    console.log(data);
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    })
      .then(this._parseResponse);
  };

  updateUserInfo({ name, email }) {

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    }).then(this._handleRes);
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
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
      .then(this._parseResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._parseResponse);
  }
};

export const mainApi = new MainApi({
  url: 'https://api.ak-movies-explorer.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});