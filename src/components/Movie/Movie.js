import React from 'react';
import { useLocation } from 'react-router-dom';

function Movie({ movie, savedMovies, onLikeMovie, onDeleteMovie, isLikeButton }) {
  let location = useLocation();
  const image = movie.image.url
    ? `https://api.nomoreparties.co/${movie.image.url}`
    : movie.image;

  let isLiked = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false;

  const isDeleteButton = location.pathname === '/saved-movies';

  const duration = () => {
    if (movie.duration > 60) {
      return (movie.duration / 60 | 0) + "ч " + movie.duration % 60 + "м"
    }
    if (movie.duration === 60) {
      return (movie.duration / 60) + "ч"
    } else {
      return movie.duration + "м"
    }
  };

  return (
    <div className="gallery__card-body">
      <div className="gallery__poster">
        <a className="movie__trailer" href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img className="gallery__img" src={image} alt={movie.nameRU} />
        </a>
      </div>

      <div className="gallery__label">
        <p className="gallery__subtitle">{movie.nameRU}</p>

        {isLikeButton && (
          <button
            onClick={() => onLikeMovie(movie, isLiked, savedMovies._id)}
            className={`gallery__like ${isLiked ? 'gallery__like_status_liked' : ''}`}
          ></button>)
        }

        {isDeleteButton && (
          <button
            onClick={() => onDeleteMovie(movie._id)}
            className={`gallery__delete`}
          >+</button>
        )}
      </div>
      <div className="gallery__time">{duration()}</div>
    </div>
  )
}

export default Movie;
