
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
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
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
  // const [isLoggedHeader, setIsLoggedHeader] =  useState(false);

  function handleRegister(values) {
    const { name, email, password } = values;
    console.log(values);
    auth.register(name, email, password)
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
        console.log(currentUser);
        // setIsLoggedIn(true);
        // setIsVisibilityBurger(false);
        if (user) {
          navigate('/signin', { replace: true });
          // setName(data.name);
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

  const location = useLocation();

  // useEffect(() => {
  //   const path = location.pathname;
  //   mainApi.getUserInfo()
  //   .then((userData) => {
  //     // setIsLoggedIn(true);
  //     navigate(path, { replace: true });
  //     setCurrentUser(userData);
  //     // getSavedMovies()
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //   })
  // });


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

  function UserInfo() {
    mainApi.getUserInfo()
      .then((userData) => {
      })
      .catch((err) => {
        console.log(err.message)
      })
  };

  function handleOnCardClick() {
    setIsOpen(true);
    setIsOpenCardPopup(true);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setIsOpenCardPopup(false);
    setOpenInfoTooltip(false);
  };

  function handleSignOut() {
    const token = localStorage.removeItem('token');
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
                  isLoggedIn={isLoggedIn}
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
                  isLoggedIn={isLoggedIn}
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
