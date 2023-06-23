import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import imagePoster from '../../images/pic__COLOR_pic.png';

function SavedMovies(props) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleSearch(movieName, isShortFilms) {
    const filteredMovies = props.cards.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    }
    else {
      setFilteredMovies(filteredMovies);
    }
  };

  function initFilteredMovies() {
    setFilteredMovies(props.cards);
  }

  useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter(movie => props.cards.some(card => movie.movieId === card.movieId))
    )
  }, [props.cards]);

  useEffect(() => {
    initFilteredMovies()
  }, []);

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        onActiveLinkFilmsSaved={'active'}
        noActiveSavedFilmsLink={'no-active-nav-link'}
      />
      <section className="saved-movies">
        <SearchForm
          handleSearch={handleSearch}
          defaultValue=""
        />
        <div className="saved-movies container">
          <div className="gallery gallery_size_saved-movies">
            <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__delete">+</p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}
export default SavedMovies;
