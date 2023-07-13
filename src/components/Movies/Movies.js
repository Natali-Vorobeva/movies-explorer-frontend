import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ email, movies, savedMovies, onLikeMovie, onDeleteMovie, isLikeButton }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQueryMovies');
  const [searchQuery, setSearchQuery] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
  }, [searchedMovies]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    }
  }, [queries]);

  const filterMovies = (query) => {
    if (!filteredMovies.length) {
      setIsLoading(true);
    }

    let filtered = [];
    localStorage.setItem('searchQueryMovies', JSON.stringify(query));

    if (query.isShortFilmChecked) {
      filtered = movies.filter((movie) => {
        return (
          movie.duration <= 40 &&
          movie.nameRU
            .toLowerCase()
            .trim()
            .includes(query.searchText.toLowerCase())
        );
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = movies.filter((movie) => {
        return movie.nameRU
          .toLowerCase()
          .trim()
          .includes(query.searchText.toLowerCase());
      });

      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    }
    setIsLoading(false);
  };

  const handleResetInput = () => {
    setFilteredMovies([]);
    setSearchQuery({});
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('searchQueryMovies');
  };

  useEffect(() => {
    if (filteredMovies.length < 1) {
      setInfo(true);
    } else {
      setInfo(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        noActiveFilmsLink={'no-active-nav-link'}
        onActiveLinkFilms={'active'}
        email={email}
      />
      <section className="movies">
        <SearchForm
          onFilter={filterMovies}
          searchQuery={searchQuery}
          onResetInput={handleResetInput}
        />
        <MoviesCardList
          isLikeButton={isLikeButton}
          movies={filteredMovies}
          savedMovies={savedMovies}
          onLikeMovie={onLikeMovie}
          info={info}
          isLoading={isLoading}
          onDeleteMovie={onDeleteMovie}
          filteredMovies={filteredMovies}
          searchedMovies={searchedMovies}
        />
      </section >

      <Footer />
    </>
  )
}
export default Movies;
