
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { useMovies } from '../../hooks/useMovies';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { useLocalStorageJson, useGetLocalStorage } from '../../hooks/useLocalStorage';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavesMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [moreCards, setMoreCards] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [serverError, setServerError] = useState(false);

  const { handleSetSearch, setHandleSetSearch, filteredMovies } = useMovies();

  // const { movies: filteredMovies } = useMovies();
//
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location.pathname);
            setCurrentUser(res);
            setEmail(res.email)
          }
        })
        .catch((error) => {
          console.log(error);
        })
    } else {

    }
  }, []);

  useEffect(() => {
    isLoggedIn &&
      mainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.log(error);
        })
  }, []);

  function handleLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          console.log(data.token);
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          // setEmail(email);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  // todo movies handlers
  function handleSearchMovie() {
  // console.log(movies);
      // setLoading(true);
      const movies =  JSON.parse(localStorage.getItem('filteredMoviesList'));
      console.log(movies);
// console.log({moviesList});
    //       const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
    //       const foundMovies = isShortFilms ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;
    //       localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    //       localStorage.setItem('inputSearchMovieName', inputSearch);
    //       localStorage.setItem('shortFilms', isShortFilms);
    // localStorage.setItem('filteredMovies',  JSON.stringify(filteredMovies));
    handleResize();

  };

  function handleResize() {
    const foundMovies = JSON.parse(localStorage.getItem('filteredMovies'));
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
  };

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    handleResize();
  }, [windowWidth]);



  function handleShowMore() {
    const foundMovies = localStorage.getItem('foundMovies');
    setMovies(foundMovies.slice(0, movies.length + moreCards))
  }

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
                // onRegister={handleRegister}
                />
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
                  name={name}
                  email={email}
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
                  handleSearch={handleSearchMovie}
                  // handleSearch={filteredMovies}
                  // defaultSearchValue={localStorage.getItem('inputSearchMovieName') || ""}
                // handleShowMore={handleShowMore}
                // isSaved={isSaved}
                // onCardSave={handleCardSave}
                // onCardDelete={handleCardDelete}
                // serverError={serverError}
                // loading={state.loading}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavesMovies}
                  isLoggedIn={isLoggedIn}
                  // handleSearch={handleSearch}
                  cards={savedMovies}
                  // isSaved={isSaved}
                  // onCardDelete={handleCardDelete}
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
