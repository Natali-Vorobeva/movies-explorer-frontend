import React from 'react';

import searchButton from '../../../images/icons/search-white.svg';
import searchIcon from '../../../images/icons/search-icon-gray.svg';

function SearchForm() {
	return (
		<div className="search-form container">
			<div className="search-form__flex-container">
				<img src={searchIcon} alt="Поиск" className="search-form__icon" />
				<input
					id="search-form"
					placeholder="Фильм"
					type="text" name="search-form" className="search-form__input"
					autoComplete="off" />
				<button className="search-form__button">
					<img src={searchButton} alt="Поиск" className="search-form__button-img" />
				</button>
				<div className="search-form__switch">
					<div className="search-form__checkbox">
						<input className="search-form__checkbox-base" id="toggle_switch-desktop" name="toggle_switch-desktop" type="checkbox" />
						<label className="search-form__checkbox-switch-button" htmlFor="toggle_switch-desktop"></label>
					</div>
					<p className="search-form__text">Короткометражки</p>
				</div>
			</div>
			<div className="search-form__switch search-form__switch_style_mobile">
				<div className="search-form__checkbox">
					<input className="search-form__checkbox-base" id="toggle_switch-mobile" name="toggle_switch-mobile" type="checkbox" />
					<label className="search-form__checkbox-switch-button" htmlFor="toggle_switch-mobile"></label>
				</div>
				<p className="search-form__text">Короткометражки</p>
			</div>
		</div >
	)
}
export default SearchForm;
