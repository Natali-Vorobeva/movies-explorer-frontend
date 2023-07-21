class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.err}`);
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(this._parseResponse);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(this._parseResponse);
  };

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        email, password
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  register(name, email, password) {
    // console.log(data);
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
      .then(this._parseResponse);
  };

  updateUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    }).then(this._parseResponse);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => this._parseResponse(res)
      );
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
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

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(this._parseResponse);
  }
};

export const mainApi = new MainApi({
  url: 'https://api.portfolio-vorobeva.nomoredomains.rocks',
});
