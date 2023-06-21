import React from 'react';
// import likeBtn from './../images/favorite-black.svg';
// import dislikeBtn from './../images/add-favorites.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movie(props
  // { movie,


  // * обратить внимание на movieId

//   movieId,
//   onMovieClick, onCardLike, onCardDeleteClick,
//   image, description, duration
// }
)
{

  const image = props.isOnlySaved ? props.movie.image : `https://api.nomoreparties.co/${props.movie.image.url}`
  const trailerLink = props.movie.trailerLink

  const handleClick = () => {
    props.onMovieClick(props.movie);
  }

  const handleLikeClick = () => {
    props.onCardLike(props.movie);
  };

  const duration = () => {
    if (props.movie.duration > 60) {
      return (props.movie.duration / 60 | 0) + "ч " + props.movie.duration % 60 + "м"
    }
    if (props.movie.duration === 60) {
      return (props.movie.duration / 60) + "ч"
    } else {
      return props.movie.duration + "м"
    };
  };

  function onMovieLike() {
    props.onCardSave(props.movie);
  };

  const handleDeleteClick = () => {
    props.onCardDeleteClick(props.movie);
  }

  // !!! Доделать карточку для saved-movies !!!
  return (
    <div className="gallery__card-body">
      <div className="gallery__poster">
      <a className="movie__trailer" href={trailerLink} rel="noreferrer" target="_blank">
        <img className="gallery__img" src={props.image} alt="Постер фильма" />
      </a>
      </div>
      <div className="gallery__label">
        <p className="gallery__subtitle">{props.description}</p>
        <p className="gallery__liked">{onMovieLike}</p>
      </div>
      <div className="gallery__time">{duration}</div>
    </div>


  )
}

export default Movie;