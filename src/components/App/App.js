
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavesMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../auth.js';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});

  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState({
    status: false,
    text: ''
  });
  const [isOpenInfoTooltip, setOpenInfoTooltip] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [movies, setMovies] = useState([]);
  const [moreCards, setMoreCards] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);


  function handleRegister(values) {
    const { name, email, password } = values;
    console.log(values);
    auth.register(name, email, password)
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
        console.log(currentUser);
        if (user) {
          navigate('/signin', { replace: true });
        }
      })
      .catch(() => {
        setSuccess({
          status: false,
          text: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      })
      .finally(() => {
        setOpenInfoTooltip(true);
      })
  }

  function handleLogin(values) {
    const { email, password } = values;
    console.log(values);
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setIsLoggedIn(true);
          setEmail(email);
          navigate('/movies', { replace: true });
          getUserInfo();
        }
      })
      .catch((res) => {
        if (res === 'Ошибка: 401') {
          setSuccess({
            status: false,
            text: "Аккаунт не\u00A0зарегистрирован",
          });
        } else {
          setSuccess({
            status: false,
            text: res,
          });
        }
        setOpenInfoTooltip(true);
      })
  }

  useEffect(() => {
    handleToken();
  }, []);

  function handleToken() {
    const token = localStorage.getItem('token');
    const path = location.pathname;
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setEmail(res.email);
          setName(res.name);
          navigate(path);
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  // function UserInfo() {
  //   mainApi.getUserInfo()
  //     .then((userData) => {
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // };
  function getUserInfo() {
    mainApi.getUserInfo()
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  // todo movies handlers
  function handleGetMovies(inputSearch, isShortFilms) {
    setLoading(true);
    moviesApi.getApiMovies()
      .then((movies) => {
        console.log(movies);
        const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
        const foundMovies = isShortFilms ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
        localStorage.setItem('inputSearchMovieName', inputSearch);
        localStorage.setItem('shortFilms', isShortFilms);
        setLoading(false);
        handleResize();
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setServerError(true);
      })
  };


  function handleResize() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies === null) {
      return;
    };
    if (windowWidth >= 1280) {
      setMovies(foundMovies.slice(0, 12));
      setMoreCards(3);
    } else if (windowWidth > 480 && windowWidth < 1280) {
      setMovies(foundMovies.slice(0, 8));
      setMoreCards(2);
    } else if (windowWidth <= 480) {
      setMovies(foundMovies.slice(0, 5));
      setMoreCards(2);
    }
  }

  function handleSearch(inputSearch, isShortFilms) {
    handleGetMovies(inputSearch, isShortFilms)
  }

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    handleResize()
  }, [windowWidth]);

  function handleShowMore() {
    const foundMovies = localStorage.getItem('foundMovies');
    setMovies(foundMovies.slice(0, movies.length + moreCards))
  }


  function handleGetMoviesSwitch() { }
  function filmsSwitch() { }
  function filmsInputSearch() { }

  function handleOnCardClick() {
    setIsOpen(true);
    setIsOpenCardPopup(true);
  }


  // ! Добавить addMovie
  function handleCardSave(movie) {
    mainApi.addMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function handleCardDelete(card) {
    const deleteCard = savedMovies.find(c => c.movieId === (card.id || card.movieId) && c.owner === currentUser._id)
    if (!deleteCard) return
    mainApi.deleteMovie(deleteCard._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(c => c._id !== deleteCard._id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function isSaved(card) {
    return savedMovies.some(item => item.movieId === card.id && item.owner === currentUser._id)
  }

  function closeAllPopups() {
    setIsOpen(false);
    setIsOpenCardPopup(false);
    setOpenInfoTooltip(false);
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    // localStorage.removeItem('token');
    // localStorage.removeItem('isAuth');
    // localStorage.removeItem('saved-movies');
    // localStorage.removeItem('found-movies');
    // localStorage.removeItem('isShort');
    // localStorage.removeItem('isShortInSaves');
    // localStorage.removeItem('movies');
    navigate('/', { replace: true });
    setIsLoggedIn(false);
    setEmail('');
  }

  console.log(isLoggedIn);

  return (
    <>
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              exact
              path='/signup'
              element={
                <Register
                  onRegister={handleRegister} />
              }
            />
            <Route
              exact
              path='/signin'
              element={
                <Login
                  onLogin={handleLogin} />
              }
            />
            <Route
              exact
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                />
              }
            />
            <Route
              exact
              path='/movies'
              element={
                <ProtectedRoute
                  component={Movies}
                  cards={movies}
                  isLoggedIn={isLoggedIn}
                  handleSearch={handleSearch}
                  defaultSearchValue={localStorage.getItem('inputSearchMovieName') || ""}
                  handleShowMore={handleShowMore}
                  isSaved={isSaved}
                  onCardSave={handleCardSave}
                  onCardDelete={handleCardDelete}
                  serverError={serverError}
                  loading={loading}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavesMovies}
                  isLoggedIn={isLoggedIn}
                  handleSearch={handleSearch}
                  cards={savedMovies}
                  isSaved={isSaved}
                  onCardDelete={handleCardDelete}
                  serverError={serverError}
                />
              }
            />
            <Route
              exact
              path='/'
              element={
                <Main
                  email={email}
                  isLoggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                />
              }
            />
            <Route
              exact
              path='/*'
              element={
                <NotFound />}
            />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
