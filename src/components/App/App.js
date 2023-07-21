
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
import Preloader from '../Preloader/Preloader';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [statusSuccess, setStatusSuccess] = useState(false);
  const isLikeButton = location.pathname === '/movies';
  const getSavedMovies = savedMovies.length;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location.pathname);
            setIsLoading(false);
            setCurrentUser(res);
            setEmail(res.email)
          }
        })
        .catch((error) => {
          if (error.status === 401) {
            localStorage.removeItem('token');
            setIsLoading(false);
          }
          console.log(error);
        });
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    isLoggedIn &&
      mainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    isLoggedIn &&
      mainApi
        .getSavedMovies()
        .then((data) => {
          if (data) {
            const findSavedMovies = data.filter(movie => movie.owner === currentUser._id);
            setSavedMovies(findSavedMovies);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          }
        })
        .catch((error) => console.log(error));
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
      } else {
        moviesApi
          .getApiMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    isLoggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, isLoggedIn]);

  const handleLogin = (values) => {
    mainApi
      .authorize(values.email, values.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleRegister = (values) => {
    console.log(values);
    mainApi
      .register(values.name, values.email, values.password)
      .then((res) => {
        console.log(res);
        console.log(values);
        handleLogin(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateUser = (values) => {
    mainApi.updateUserInfo({
      name: values.name,
      email: values.email,
    })
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: values.name,
          email: values.email
        });
        console.log(data);
        console.log(data);
        setName(data.name);
        setEmail(data.email);
        setStatusSuccess(true);
        setInterval(function timerSuccess() {
          setStatusSuccess(false);
        }, 4000)
        console.log(statusSuccess);
      })
      .catch((err) => {
      });
  }

  const handleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      const movieObj = savedMovies.find(c => c.movieId === (movie.id || movie.movieId) && c.owner === currentUser._id);
      const movieId = movieObj._id;
      handleDeleteMovie(movieId);
    } else {
      mainApi
        .addMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDeleteMovie = (movieId) => {
    const searchedSavedMovies = JSON.parse(
      localStorage.getItem('searchedSavedMovies')
    );
    mainApi
      .deleteMovie(movieId)
      .then((res) => {
        console.log(res);
        console.log(savedMovies);
        const updatedSavedMovies = savedMovies.filter(
          (movie) => movie._id !== movieId
        );
        console.log(updatedSavedMovies);
        setSavedMovies(updatedSavedMovies);

        if (searchedSavedMovies) {
          const updatedSearchedSavedMovies = searchedSavedMovies.filter(
            (movie) => movie._id !== movieId
          );

          localStorage.setItem(
            'searchedSavedMovies',
            JSON.stringify(updatedSearchedSavedMovies)
          );
        }
      })
      .catch((error) => console.log(error));
  };

  function handleSignOut() {
    localStorage.clear();
    navigate('/', { replace: true });
    setIsLoggedIn(false);
    setEmail('');
  }

  return (
    <>
      <div className="page__content">
        {isLoading ? (
          <Preloader />
        ) : (
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route
                exact
                path='/signup'
                element={
                  <Register
                  onRegister={handleRegister}
                  isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                exact
                path='/signin'
                element={
                  <Login
                    onLogin={handleLogin}
                    isLoggedIn={isLoggedIn}
                    />
                }
              />
              <Route
                exact
                path='/profile'
                element={
                  <ProtectedRoute
                    component={Profile}
                    isLoggedIn={isLoggedIn}
                    name={name}
                    email={email}
                    onSignOut={handleSignOut}
                    onUpdateUser={handleUpdateUser}
                    statusSuccess={statusSuccess}
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
                    movies={movies}
                    savedMovies={savedMovies}
                    onLikeMovie={handleLikeMovie}
                    isLikeButton={isLikeButton}
                  />
                }
              />
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute
                    isLikeButton={isLikeButton}
                    component={SavesMovies}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    isLoggedIn={isLoggedIn}
                    getSavedMovies={getSavedMovies}
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
        )}
      </div>
    </>
  );
}

export default App;
