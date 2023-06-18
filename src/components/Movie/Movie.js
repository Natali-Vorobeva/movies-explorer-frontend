import React from 'react';
// import likeBtn from './../images/favorite-black.svg';
// import dislikeBtn from './../images/add-favorites.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movie({ movie,


  // * обратить внимание на movieId
  
  movieId,
  onMovieClick, onCardLike, onCardDeleteClick,
  image, description, duration
}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = movie.owner._id === currentUser._id;
  const isLiked = movie.likes.some(i => i._id === currentUser._id);

  const handleClick = () => {
    onMovieClick(movie);
  }

  const handleLikeClick = () => {
    onCardLike(movie);
  }

  const handleDeleteClick = () => {
    onCardDeleteClick(movie);
  }

// !!! Доделать карточку для saved-movies !!!
  return (
    <div className="gallery__card-body">
      {
        isOwn &&
        <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={image} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">{description }</p>
                <p className="gallery__liked">{onCardLike}</p>
              </div>
              <div className="gallery__time">{duration}</div>
            </div>
      }
    </div>
  )
}

export default Movie;