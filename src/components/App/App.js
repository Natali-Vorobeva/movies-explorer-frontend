
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavesMovies from '../SavedMovies/SavedMovies';
// import MoviesCard from '../MoviesCard/MoviesCard';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import MoviesCard from '../MoviesCard/MoviesCard';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import * as auth from '../../auth.js';


function App() {

  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "email": '',
    "password": '',
    "_id": ''
  });
  const [movies, setMovies] = useState([]);


  const navigate = useNavigate();
  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [success, setSuccess] = useState({
    status: false,
    text: ''
  });
  const [isOpenInfoTooltip, setOpenInfoTooltip] = useState(false);

  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleRegister(username, email, password) {
    auth.register(username, email, password)
      .then((data) => {
        console.log(data);
        // setIsVisibilityBurger(false);
        if (data) {
          setSuccess({
            status: true,
            text: "Вы успешно зарегистрировались!",
          });
          navigate('/signin', { replace: true })
          return;
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
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
          setEmail(email);
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
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setEmail(res.data.email);
          navigate('/', { replace: true })
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getUserInfo(),
        moviesApi.getInitialMovies()
      ])
        .then(([me, cards]) => {
          setCurrentUser(me);
          // setMovies(movies);
          // setIsVisibilityBurger(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [isLoggedIn]);

  function handleOnCardClick() {
    setIsOpen(true);
    setIsOpenCardPopup(true);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setIsOpenCardPopup(false);
    setOpenInfoTooltip(false);
  };
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
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  component={Movies}
                  isOpenCardPopup={isOpenCardPopup}
                  onCardClick={handleOnCardClick}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavesMovies}
                />
              }
            />
            <Route
              exact
              path='/'
              element={
                <Main />
              }
            />
            <Route
              exact
              path='/*'
              element={
                <NotFound />}
            />
          </Routes>

          <MoviesCard
            isOpen={isOpen}
            onClose={closeAllPopups}
          />
          {/* <InfoTooltip isOpen={isOpenInfoTooltip} onClose={closeAllPopups} success={success} /> */}

        </CurrentUserContext.Provider>
      </div>


    </>
  );
}

export default App;
