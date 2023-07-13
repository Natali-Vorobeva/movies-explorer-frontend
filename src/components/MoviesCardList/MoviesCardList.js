import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Preloader from '../Preloader/Preloader';
import useResize from '../../hooks/useResize.js';

const MoviesCardList = ({
  movies,
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
  isLikeButton,
  info,
  isLoading,
  getSavedMovies
}) => {

  let size = useResize();
  const [moviesToAdd, setMoviesToAdd] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

    const moviesToRender = useMemo(() => {
    const countToRender = (size.width > 1200) ? 16 : (size.width < 1200 && size.width > 930) ? 12 : (size.width < 930 && size.width > 580) ? 8 : size.width < 581 ? 5 : 1;

    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, size]);

  if (info) {
    return <span className="form__nothing-found container">Ничего не найдено</span>
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
                moviesToRender.map((movie) => {
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
        {location.pathname === '/movies' &&
          movies.length > moviesToRender.length && (
            <button
              onClick={() => {
                setMoviesToAdd((prev) => prev + ((size.width >= 1199) ? 4 : (size.width < 1199 && size.width > 929) ? 3 : (size.width < 930 && size.width > 580) ? 2 : size.width < 580 ? 2 : 1));
              }}
              className="movies-card-list__more"
            >
              Еще
            </button>
          )
        }
      </section >
    </>
  )
}
export default MoviesCardList;