import React from 'react';
import Movie from '../../Movie/Movie';
import Preloader from '../../Preloader/Preloader';

const MoviesCardListSaved = ({
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
  isLikeButton,
  info,
  isLoading,
  getSavedMovies,
  initialInfo,
  infoSaved,
}) => {

  if (info || infoSaved) {
    return <span className="form__nothing-found container">Ничего не найдено</span>
  };
  if (initialInfo) {
    return <span className="form__nothing-found container">Здесь пока ничего не найдено</span>
  };
  if (getSavedMovies < 1) {
    return <span className="form__nothing-found container">Сохраненных фильмов нет</span>
  };

  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
            {
              isLoading
                ?
                <Preloader />
                :
                savedMovies.map((movie) => {
                  return (
                    <Movie
                      key={movie.id || movie.movieId}
                      movie={movie}
                      isLikeButton={isLikeButton}
                      savedMovies={savedMovies}
                      onLikeMovie={onLikeMovie}
                      onDeleteMovie={onDeleteMovie}
                    />
                  )
                })
            }
          </div>
        </div>
      </section >
    </>
  )
}
export default MoviesCardListSaved;