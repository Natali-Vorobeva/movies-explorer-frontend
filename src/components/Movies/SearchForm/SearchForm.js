import React, { useState, useEffect } from 'react';

import { useMovies } from '../../../hooks/useMovies';
import { useLocalStorageJson, useLocalStorage } from '../../../hooks/useLocalStorage';
import searchButton from '../../../images/icons/search-white.svg';
import searchIcon from '../../../images/icons/search-icon-gray.svg';

function SearchForm() {

  
  const {search, shortMovies, handleSetSearch,
    handleSetShortMovies,
    filteredMovies, initMovies,
  } = useMovies();

  let searchData = search;
  let shortMoviesData = shortMovies;

  const [movies, setMovies] = useLocalStorageJson([], 'initMovies');
  const [filteredMoviesList, setFilteredMoviesList] = useLocalStorageJson([], 'filteredMoviesList');
  const [searchText, setSearchText] = useLocalStorage('', 'search');
  const [shortMoviesInfo, setShortMoviesInfo] = useLocalStorage('', 'shortMovies');

  function handleSubmit(evt) {
    evt.preventDefault();
    setMovies(initMovies);
    setFilteredMoviesList(filteredMovies);
    setSearchText(searchData);
    setShortMoviesInfo(shortMoviesData);
     };

  
  return (
    <div className="search-form container">
      <form className="search-form__flex-container">
        <div className="search-form__input-row">
          <img src={searchIcon} alt="Поиск" className="search-form__icon" />
          <input
            id="search-form"
            placeholder="Фильм"
            type="text" name="search-form"
            className="search-form__input"
            value={searchData}
            onChange={handleSetSearch}
            required
          />
          <button
            className="search-form__button"
            type="submit"
            onClick={handleSubmit}
          >
            <img src={searchButton} alt="Поиск" className="search-form__button-img" />
          </button>
        </div>

        <div className="search-form__switch">
          <div className="search-form__checkbox">
            <input
              className="search-form__checkbox-base"
              id="toggle_switch-desktop"
              name="toggle_switch-desktop"
              type="checkbox"
              value={shortMovies}
              checked={shortMovies}
              onChange={handleSetShortMovies}
            />
            <label className="search-form__checkbox-switch-button" htmlFor="toggle_switch-desktop"></label>
          </div>
          <p className="search-form__text">Короткометражки</p>
        </div>
      </form>
    </div >
  )
}
export default SearchForm;
