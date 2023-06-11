import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import closeBurger from '../../images/icons/close-burger.svg';

function Header({
  onDisplayMovies, onDisplayMain,
  noActiveFilmsLink, noActiveSavedFilmsLink,
  registration, enter,
  onActiveLinkFilms, onActiveLinkMain, onActiveLinkFilmsSaved,
  onRegistration, onEnter
}) {

  return (
    <>
      <header className={`header ${onDisplayMovies}`}>
        <div className="header__container container">
          <div className='logo'>
            <Link className="logo__to-main" to="/"></Link>
          </div>
          <div className="header__menu-explorer">
            <Link className={`header__films ${noActiveFilmsLink}`} to="/movies">
              Фильмы
            </Link>
            <Link className={`header__saved-films ${noActiveSavedFilmsLink}`} to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </div>
          <div className='header__links'>
            <Link className="header__profile" to="/profile">
              Аккаунт
            </Link>
          </div>
          <div className="header__burger"
          // onClick={handleClickBurger}
          >
            <div className="header__menu-burger">
              <span className="header__element-burger">
              </span>
            </div>
          </div>
        </div>
      </header>
      <header className={`header header_style_background-main ${onDisplayMain}`}>
        <div className='header__container container'>
          <div className='logo'>
          </div>
          <div className='header__links-main'>
            <Link className="header__signup" to='/signup' onClick={onRegistration}>
              {registration}
            </Link>
            <Link className="header__signin" to='/signin' onClick={onEnter}>
              {enter}
            </Link>
          </div>
        </div>
      </header>
      <div className={`header__content-menu ${onDisplayMovies} visibility`}>
        <div className="header__content-menu-burger">
        </div>
        <div className="header__link-burger">
          <nav className="header__nav-link-burger">
            <img src={closeBurger} className="header__close-burger" alt="Закрыть меню"
            // onClick={handleClickCloseBurger}
            />
            <Link className="header__to-main-burger header__to-link-burger" to="/">
              <p className={`${onActiveLinkMain}`}>
                Главная
              </p>
            </Link>
            <Link className="header__to-films-burger header__to-link-burger" to="/movies">
              <p className={`${onActiveLinkFilms}`}>
                Фильмы
              </p>
            </Link>
            <Link className="header__to-saved-movies-burger header__to-link-burger" to="/saved-movies">
              <p className={`${onActiveLinkFilmsSaved}`}>
                Сохранённые фильмы
              </p>
            </Link>
          </nav>
          <Link className="header__to-profile-burger" to="/profile">
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  )
}
export default Header;
