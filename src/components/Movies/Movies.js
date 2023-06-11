import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ isOpenCardPopup, onCardClick, isOpen, onClose }) {
  
  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        noActiveFilmsLink={'no-active-nav-link'}
        onActiveLinkFilms={'active'}
      />
      <section className="movies">
        <SearchForm />
        <MoviesCardList
          onCardClick={onCardClick}
        />
      </section >
      <Footer />
    </>
  )
}
export default Movies;
