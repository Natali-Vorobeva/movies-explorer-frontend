class MoviesApi {
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

  getApiMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._parseResponse);
  }
};

  export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });