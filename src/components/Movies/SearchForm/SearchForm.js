import React, { useState, useEffect } from 'react';

import searchButton from '../../../images/icons/search-white.svg';
import searchIcon from '../../../images/icons/search-icon-gray.svg';

function SearchForm({
  handleSearch, defaultValue
}) {
  const [inputSearch, setInputSearch] = useState('');
  const [isSwitch, setIsSwitch] = useState(false);

  const [filmsInputSearch, setFilmsInputSearch] = useState('');

  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }

  function handleSwitchChange(evt) {
    const isShortFilms = evt.target.checked;
    setIsSwitch(isShortFilms);
    console.log(isSwitch);
    handleSearch(inputSearch, isShortFilms);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(inputSearch, isSwitch);
  };

  useEffect(() => {
    setIsSwitch(defaultValue);
    setInputSearch(localStorage.getItem('shortFilms') || false);
  }, []);

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
          value={inputSearch || ''}
          onChange={handleInputChange}
          required
        />
        <button
          className="search-form__button"
          type="submit"
          onClick={handleSubmit}>
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
              value={inputSearch || ''}
              // checked={isSwitch}
              onChange={handleSwitchChange}
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
