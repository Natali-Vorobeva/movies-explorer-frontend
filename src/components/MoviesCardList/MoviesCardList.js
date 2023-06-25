import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Preloader from '../Movies/Preloader/Preloader';

function MoviesCardList(props) {
  if (props.loading) return <Preloader />;
  if (props.cards.length === 0) return <span className="movies-card-list__error container">Ничего не найдено. </span>;
  if (props.serverError) {
    return <span className="movies-card-list__error  container">Во время запроса произошла ошибка.
      Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>;
  }

  const foundMovies = localStorage.getItem('foundMovies');

  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
            {
              props.cards.map(card => {
                return (
                  <Movie
                    card={card}
                    key={props.isOnlySaved ? card.movieId : card.id}
                    isSaved={props.isSaved}
                    isOnlySaved={props.isOnlySaved}
                    onCardSave={props.onCardSave}
                    onCardDelete={props.onCardDelete}
                  />
                )
              })
            }
          </div>
        </div>
        {props.isOnlySaved ? "" :
          (props.cards.length < foundMovies.length
            ?
            <button className="movies-card-list__more" onClick={props.handleShowMore}>Ещё</button>
            :
            ""
          )
        }
      </section >


    </>

  )
}
export default MoviesCardList;