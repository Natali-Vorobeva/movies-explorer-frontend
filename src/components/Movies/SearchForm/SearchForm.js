import React, { useState, useEffect } from 'react';
import searchButton from '../../../images/icons/search-white.svg';
import searchIcon from '../../../images/icons/search-icon-gray.svg';

const SearchForm = ({ onFilter, searchQuery, onResetInput }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);

  useEffect(() => {
    if (searchQuery.searchText) {
      setSearchText(searchQuery.searchText);
    }
  }, [searchQuery.searchText]);


  const handleChange = (evt) => {
    setSearchText(evt.target.value);
  };

  const checkFilterBox = () => {
    if (searchText !== '') {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchText,
        isShortFilmChecked: !isShortFilmChecked
      });
    } else {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchQuery.searchText,
        isShortFilmChecked: !isShortFilmChecked
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!searchText) {
      setError('Нужно ввести ключевое слово');
      return;
    } else {
      onFilter({ searchText, isShortFilmChecked });
    }
  };

  return (
    <div className="search-form container">
      <form className="search-form__flex-container" onSubmit={handleSubmit}>
        <div className="search-form__input-row">
          <img src={searchIcon} alt="Поиск" className="search-form__icon" />
          <input
            id="search-form"
            placeholder="Фильм"
            type="text" name="search-form"
            className="search-form__input"
            value={searchText}
            onChange={handleChange}
            required
          />
          <button
            className="search-form__button-reset"
            type="button"
            onClick={() => {
              onResetInput();
              setSearchText('');
            }}
          >
            +
          </button>
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
              onChange={checkFilterBox}
              checked={isChecked}
            />
            <label className="search-form__checkbox-switch-button" htmlFor="toggle_switch-desktop"></label>
          </div>
          <p className="search-form__text">Короткометражки</p>
        </div>
        <span className="search-form__input-error">
        {!searchText && error}
      </span>
      </form>

    </div >
  )
}
export default SearchForm;
