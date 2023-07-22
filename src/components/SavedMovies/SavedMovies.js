import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { SHOT_FILM } from '../../utils/constants';

const SavedMovies = ({ savedMovies, onDeleteMovie, getSavedMovies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedSavedMovies');
  const queries = localStorage.getItem('searchQuerySavedMovies');
  const [searchQuery, setSearchQuery] = useState({});
  const [infoSaved, setInfoSaved] = useState(false);

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [searchedMovies, savedMovies, searchQuery]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    } else {
      setSearchQuery({ ...queries, searchText: '' });
    }
  }, [queries, savedMovies]);

  const filterMovies = (query) => {
		localStorage.setItem('searchQuerySavedMovies', JSON.stringify(query));

    let filtered = [];
    if (query.isShortFilmChecked) {
      filtered = savedMovies.filter((movie) => {
        return (
          movie.duration <= SHOT_FILM &&
          movie.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
        );
      });
      setFilteredMovies(filtered);
      filtered.length < 1 ? setInfoSaved(true) : setInfoSaved(false);
			localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = savedMovies.filter((movie) => {
        return movie.nameRU
          .toLowerCase()
          .trim()
          .includes(query.searchText.toLowerCase());
      });
      setFilteredMovies(filtered);
			localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
      filtered.length < 1 ? setInfoSaved(true) : setInfoSaved(false);
    }
  };

  const handleResetInput = () => {
    setFilteredMovies(savedMovies);
    setSearchQuery({});
		localStorage.removeItem('searchedSavedMovies');
    localStorage.removeItem('searchQuerySavedMovies');
  };

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        onActiveLinkFilmsSaved={'active'}
        noActiveSavedFilmsLink={'no-active-nav-link'}
      />
      <section className="saved-movies">
        <SearchForm
          onFilter={filterMovies}
          searchQuery={searchQuery}
          onResetInput={handleResetInput}
        />
        <div className="saved-movies">
          <div className="gallery_size_saved-movies">
            <MoviesCardList
              movies={filteredMovies}
              onDeleteMovie={onDeleteMovie}
              getSavedMovies={getSavedMovies}
              infoSaved={infoSaved}
            />
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}
export default SavedMovies;
