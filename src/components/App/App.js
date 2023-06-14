
import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [success, setSuccess] = useState({
		status: false,
		text: ''
	});
  const [isOpenInfoTooltip, setOpenInfoTooltip] = useState(false);


  function handleRegister(username, email, password) {
		auth.register(username, email, password)
			.then(data => {
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
        <Routes>
          <Route
            exact
            path='/signup'
            element={
              <Register onRegister={handleRegister} />
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
      {/* <InfoTooltip isOpen={isOpenInfoTooltip} onClose={closeAllPopups} success={success} /> */}
    </>
  );
}

export default App;
