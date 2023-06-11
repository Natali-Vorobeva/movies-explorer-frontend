
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavesMovies from '../SavedMovies/SavedMovies';
// import MoviesCard from '../MoviesCard/MoviesCard';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';




function App() {

  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // function handleIsOpenCardPopup() {
  //   setIsOpenCardPopup(true);
  // }

  function handleOnCardClick() {
    setIsOpen(true);
    setIsOpenCardPopup(true);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setIsOpenCardPopup(false);
  };
  return (
    <>
      <div className="page__content">
        {/* form buttonText - текст на кнопке submit */}
        {/* formText - текст под кнопкой submit */}
        {/* formLinkText - ссылка под кнопкой submit */}
        <Routes>
          <Route
            exact
            path='/signup'
            element={
              <Register />
            }
          />
          <Route
            exact
            path='/signin'
            element={
              <Login />
            }
          />
          <Route
            exact
            path='/profile'
            element={
              <Profile />
            }
          />
          <Route
            exact
            path='/movies'
            element={
              <Movies
                isOpenCardPopup={isOpenCardPopup}
                onCardClick={handleOnCardClick}
              />
            }
          />
          <Route
            exact
            path='/saved-movies'
            element={
              <SavesMovies />
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
      </div>
      <MoviesCard
        isOpen={isOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
