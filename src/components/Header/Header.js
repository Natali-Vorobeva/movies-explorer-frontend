import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({
  isLoggedIn,
  activeButton,
  onDisplayMovies, onDisplayMain,
  noActiveFilmsLink, noActiveSavedFilmsLink,
  registration, enter, email,
  onActiveLinkFilms, onActiveLinkMain, onActiveLinkFilmsSaved
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
              <Link className={`header__profile ${activeButton}`} to="/profile">
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
            <div className="logo"></div>
            {
              isLoggedIn
                ?
                <>
                  <div className="header__menu-explorer">
                    <Link className={`header__films  header__to-link-burger_style_text ${noActiveFilmsLink}`} to="/movies">
                      Фильмы
                    </Link>
                    <Link className={`header__saved-films  header__to-link-burger_style_text ${noActiveSavedFilmsLink}`} to="/saved-movies">
                      Сохранённые фильмы
                    </Link>
                  </div>
                  <div className="header__links-main">
                    <Link className={`header__profile ${activeButton}`} to="/profile">
                      Аккаунт
                    </Link>
                  </div>
                </>
                :
                <>
                  <div className="header__menu-explorer"></div>
                  <div className="header__links-main">
                    <Link className="header__signup" to="/signup">
                      {registration}
                    </Link>
                    <Link className="header__signin" to="/signin">
                      {enter}
                    </Link>
                  </div>
                </>
            }

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
        <BurgerMenu
          visibilityMenuMovies={visibilityMenuMovies}
          handleClickCloseBurgerMovies={handleClickCloseBurgerMovies}
          onActiveLinkMain={onActiveLinkMain}
          email={email}
          onActiveLinkFilms={onActiveLinkFilms}
          onActiveLinkFilmsSaved={onActiveLinkFilmsSaved}
          visibilityMenuMain={visibilityMenuMain}
          handleClickCloseBurgerMain={handleClickCloseBurgerMain}
          isLoggedIn={isLoggedIn}
        />
      </header >
    </>
  )
}
export default Header;
