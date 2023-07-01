import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { useMovies } from '../../hooks/useMovies';

function Movies(props) {

  
 
  // const [cards, setCards] = useState([]);
 
  // const movies = useGetLocalStorage('filteredMoviesList');
  // console.log(movies);

    // useEffect(() => {
  // const movies = useGetLocalStorage('filteredMoviesList');
  
      // const filteredMovies = JSON.parse(localStorage.getItem('filteredMoviesList'));
      // return filteredMovies
    // setCards(filteredMovies);
    //   console.log(filteredMovies);
    //   // handleSearch();
    //   return filteredMovies;
    // }, []);

  // function handleSearch() {
  //   const getCards = () => {
  //     const movies = JSON.parse(localStorage.getItem('filteredMovies'));
  //     console.log(movies);
  //     return movies;
  //    }
// console.log(cards);

// const [cards, setCards] = useState([]);
// function 
// const movies = useGetLocalStorage('filteredMoviesList');

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
        // handleSearch={handleFetchMovies}
        // defaultValue={props.defaultSearchValue}
        />
        <MoviesCardList
          cards={props.cards}
          // handleSearch={handleResize}
          handleSearchMovie={props.handleSearchMovie}
          handleShowMore={props.handleShowMore}
          isSaved={props.isSaved}
          isOnlySaved={false}
          onCardSave={props.onCardSave}
          onCardDelete={props.onCardDelete}
          serverError={props.serverError}
        />
      </section >
      <Footer />
    </>
  )
}
export default Movies;
