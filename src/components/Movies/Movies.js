import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {

  

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        noActiveFilmsLink={'no-active-nav-link'}
        onActiveLinkFilms={'active'}
        email={props.email}
      />
      <section className="movies">
        <SearchForm
          handleSearch={props.handleSearch}
          defaultValue={props.defaultSearchValue}
        />
        <MoviesCardList
          cards={props.cards}
          handleShowMore={props.handleShowMore}
          isSaved={props.isSaved}
          isOnlySaved={false}
          onCardSave={props.onCardSave}
          onCardDelete={props.onCardDelete}
          serverError={props.serverError}
          loading={props.loading}
        />
      </section >
      <Footer />
    </>
  )
}
export default Movies;
