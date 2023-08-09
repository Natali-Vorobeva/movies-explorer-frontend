import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Preloader from '../Preloader/Preloader';
import useResize from '../../hooks/useResize.js';
import {
  SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL,
  RENDER_QUANTITY_XL, RENDER_QUANTITY_LG, RENDER_QUANTITY_MD, RENDER_QUANTITY_SM, RENDER_QUANTITY_OTHER,
  ADD_RENDER_QUANTITY_LG, ADD_RENDER_QUANTITY_MD, ADD_RENDER_QUANTITY_SM, ADD_RENDER_QUANTITY_OTHER,
} from '../../utils/constants';

const MoviesCardList = ({
  movies,
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

    const [locationSavedMovies, setLocationSavedMovies] = useState('');


  let size = useResize();
  const [moviesToAdd, setMoviesToAdd] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

    const moviesToRender = useMemo(() => {
    const countToRender = (size.width >= SCREEN_XL) ? RENDER_QUANTITY_XL : (size.width <= SCREEN_LG && size.width > SCREEN_MD) ? RENDER_QUANTITY_LG : (size.width <= SCREEN_MD && size.width > SCREEN_SM) ? RENDER_QUANTITY_MD : size.width <= SCREEN_SM ? RENDER_QUANTITY_SM : RENDER_QUANTITY_OTHER;

    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, size]);

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
                setMoviesToAdd((prev) => prev + ((size.width >= SCREEN_XL) ? ADD_RENDER_QUANTITY_LG : (size.width < SCREEN_XL && size.width >= SCREEN_MD) ? ADD_RENDER_QUANTITY_MD : (size.width < SCREEN_MD && size.width >= SCREEN_SM) ? ADD_RENDER_QUANTITY_SM : size.width <= SCREEN_SM ? ADD_RENDER_QUANTITY_SM : ADD_RENDER_QUANTITY_OTHER));
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