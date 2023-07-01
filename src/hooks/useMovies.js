import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { moviesApi } from '../utils/MoviesApi';

const SHORT_DURATION = 40;

export function useMovies() {
  const [state, setState] = useState({
    loading: false,
    movies: [],
    error: null,
  });

  const [search, setSearch] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  useEffect(() => {
    setState({
      ...state,
      loading: true
    })
    const handleFetchMovies = async () => {
      try {
        const movies = await moviesApi.getApiMovies();

        setState({
          ...state,
          movies
        });
      } catch (error) {
        setState(state => ({
          ...state,
          error: error.status
        }));
      } finally {
        setState(state => ({
          ...state,
          loading: false
        }));
      }

    };

    handleFetchMovies();
  }, []);

  // useEffect

  const filteredMovies = useMemo(() => {
    const { movies } = state;

    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameRU, duration } = movie;
      const searched = search && nameRU.includes(search);
      const short = shortMovies && duration < SHORT_DURATION;

      if (search && shortMovies) {
        if (searched && short) {
          result.push(movie);
        }
      }

      if (search && !shortMovies) {
        if (searched) {
          result.push(movie);
        }
      }

      if (!search && shortMovies) {
        if (short) {
          result.push(movie);
        }
      }
    }
    return result;
  }, [search, shortMovies, state.movies]);

  const notFound = (search || shortMovies) && filteredMovies.length === 0;

  const handleSetSearch = useCallback((evt) => {
    setSearch(evt.target.value);
  }, []);

  const handleSetShortMovies = useCallback((evt) => {
    const { checked } = evt.currentTarget;
    setShortMovies(checked);
  }, []);

  let initMovies = state.movies;  
  let error = state.error;
  const loading = state.loading;
  // let searchData = search;
  // let shortMoviesData = shortMovies;
  return {
    initMovies,
    loading,
    search,
    error,
    shortMovies,
    filteredMovies,
    notFound,
    handleSetSearch,
    handleSetShortMovies
  };
};