import React from 'react';
import { Link } from 'react-router-dom';
import closeBurger from '../../images/icons/close-burger.svg';

function BurgerMenu({ visibilityMenuMovies,
  handleClickCloseBurgerMovies,
  onActiveLinkMain, email, onActiveLinkFilms,
  onActiveLinkFilmsSaved, visibilityMenuMain,
  handleClickCloseBurgerMain,
  isLoggedIn
}) {

  return (
    <>
      <div className="header__wrapper">
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
                    Главная {email}
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
            {
              isLoggedIn
                ?
                <>
                  <nav className="header__nav-link-burger">
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
                </>
                :
                <>
                  <nav className="header__nav-link-burger">
                    <Link className="header__to-link-burger" to="/signin">
                      Войти
                    </Link>
                    <Link className="header__to-link-burger" to="/signup">
                      Регистрация
                    </Link>
                  </nav>
                  <p></p>
                </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu;