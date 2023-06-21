import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Movie from '../../Movie/Movie';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ loading, movies, savedMoviesToggle, isOnlySaved, filmsSaved, filmsRemains, serverError, handleMore }) {
  const { pathname } = useLocation();
  if (loading) return <Preloader />;
  // if (movies.length === 0) return <span className="movies__error">Ничего не найдено</span>
  if (serverError) return <span className="movies__error">Во время запроса произошла ошибка.
    Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
{/* <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__delete">+</p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div> */}
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
  return (
    <>
      <section className="movies-card-list">
        {/* <div className="movies-card-list__container container">

          {movies.length > 0 ? (
            <div className="gallery">
              {movies.map((movie) => (
                <Movie
                  key={isOnlySaved ? movie.movieId : movie.id}
                  movie={movie}
                  savedMoviesToggle={savedMoviesToggle}
                  filmsSaved={filmsSaved}
                />
              ))}
            </div>
          ) : (
            <div className="cards__text">Ничего не найдено</div>
          )}
        </div> */}
        {/* {isOnlySaved ? '' :
          (movies.length < foundMovies.length
            ?
            <button className="movies-card-list__more" onClick={handleMore}>Ещё</button>
            :
            ''
            )
            } */}
      </section >


    </>

  )
}
export default MoviesCardList;