import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import closeBurger from '../../images/icons/close-burger.svg';

function Header({
  onDisplayMovies, onDisplayMain,
  noActiveFilmsLink, noActiveSavedFilmsLink,
  registration, enter, email,
  onActiveLinkFilms, onActiveLinkMain, onActiveLinkFilmsSaved,
  onRegistration, onEnter
}) {

  const [visibilityMenuMovies, setVisibilityMenuMovies] = useState(false);
  const [visibilityMenuMain, setVisibilityMenuMain] = useState(false);

  function handleClickBurgerMovies() {
    setVisibilityMenuMovies(true);
  }

  function handleClickCloseBurgerMovies() {
    setVisibilityMenuMovies(false);
  }

  function handleClickBurgerMain() {
    setVisibilityMenuMain(true);
  }

  function handleClickCloseBurgerMain() {
    setVisibilityMenuMain(false);
  }



  return (
    <>
      {/* <header className={`header ${onDisplayMovies}`}>
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
            onClick={handleClickBurger}
          >
            <div className="header__menu-burger">
              <span className="header__element-burger">
              </span>
            </div>
          </div>
        </div>
      </header> */}
      {/* <div className={`header ${onDisplayMain}`}>
        <div className="header__container header_style_background-main">
          <div className="logo">
          </div>
          <div className="header__links-main">
            <Link className="header__signup" to="/signup" onClick={onRegistration}>
              {registration}
            </Link>
            <Link className="header__signin" to="/signin" onClick={onEnter}>
              {enter}
            </Link>
          </div>
        </div>
      </div> */}


      {/* <header className={`header ${onDisplayMovies}`}> */}
      <header className="header">
        <div className="header__container container">

          <div className={`header__on-display ${onDisplayMovies}`}>
            <div className="logo">
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
              onClick={handleClickBurgerMovies}
            >
              <div className="header__menu-burger">
                <span className="header__element-burger">
                </span>
              </div>
            </div>
          </div>
          <div className={`header__on-display ${onDisplayMain}`}>
            <div className="header__style-background"></div>
            <div className="logo">
            </div>
            <div className="header__links-main">
              <Link className="header__signup" to="/signup" onClick={onRegistration}>
                {registration}
              </Link>
              <Link className="header__signin" to="/signin" onClick={onEnter}>
                {enter}
              </Link>
            </div>
            <div className="header__burger-main"
              onClick={handleClickBurgerMain}
            >
              <div className="header__menu-burger-main">
                <span className="header__element-burger-main">
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`header__content-menu ${visibilityMenuMovies ? 'show' : 'hide'} `}>
        <div className="header__content-menu-burger">
        </div>
        <div className="header__link-burger-container">
          <div className="header__link-burger">
            <div className="header__close-image">
              <img src={closeBurger} className="header__close-burger" alt="Закрыть меню"
                onClick={handleClickCloseBurgerMovies}
              />
            </div>
            <nav className="header__nav-link-burger">
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
      </div>
      <div className={`header__content-menu ${visibilityMenuMain ? 'show' : 'hide'} `}>
        <div className="header__content-menu-burger">
        </div>
        <div className="header__link-burger-container">
          <div className="header__link-burger">
            <div className="header__close-image">
              <img src={closeBurger} className="header__close-burger" alt="Закрыть меню"
                onClick={handleClickCloseBurgerMain}
              />
            </div>
            <nav className="header__nav-link-burger">
                <p className="header__to-link-burger">
                  {email}email
                </p>
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
      </div>
    </>
  )
}
export default Header;
