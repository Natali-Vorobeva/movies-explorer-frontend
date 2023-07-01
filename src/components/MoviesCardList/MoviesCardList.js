import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Preloader from '../Movies/Preloader/Preloader';
import { useMovies } from '../../hooks/useMovies';
import { moviesApi } from '../../utils/MoviesApi';

const  MoviesCardList = ({cards, ...props}) => {

  const { filteredMovies, error, loading, notFound, handleFetchMovies } = useMovies();
  
  const [cardsList, setCardsList] = useState([]);
  // console.log(cardsList);
  
  const [moreCards, setMoreCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (loading) return <Preloader />;
  // if (!notFound) return <span className="movies-card-list__error container">Ничего не найдено. </span>;
  if (error) {
    return <span className="movies-card-list__error  container">Во время запроса произошла ошибка.
      Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>;
  }


  // function handleResize(cards) {
    
  //   console.log(props.cards);
  //   if (props.cards === null) {
  //     return;
  //   };
  //   if (windowWidth >= 1280) {
  //     setCardsList(props.cards.slice(0, 12));
  //     setMoreCards(3);
  //   } else if (windowWidth > 480 && windowWidth < 1280) {
  //     setCardsList(props.cards.slice(0, 8));
  //     setMoreCards(2);
  //   } else if (windowWidth <= 480) {
  //     setCardsList(props.cards.slice(0, 5));
  //     setMoreCards(2);
  //   }
  // };

  // function checkWindowWidth() {
  //   setWindowWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', checkWindowWidth)
  //   handleResize();
  // }, [windowWidth]);





  // const foundMovies = JSON.parse(localStorage.getItem('filteredMovies'));
  
  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
            {
              // props.cards.map(card => {
              //   return (
              //     <Movie
              //       card={card}
              //       // key={props.isOnlySaved ? card.movieId : card.id}
              //       key={card.movieId}
              //       // isSaved={props.isSaved}
              //       // isOnlySaved={props.isOnlySaved}
              //       onCardSave={props.onCardSave}
              //       onCardDelete={props.onCardDelete}
              //     />
              //   )
              // })
            }
          </div>
        </div>
        {/* {props.isOnlySaved ? "" :
          (props.cards.length < foundMovies.length
            ? */}
        <button className="movies-card-list__more" onClick={props.handleShowMore}>Ещё</button>
        {/* :
            ""
          )
        } */}
      </section >


    </>

  )
}
export default MoviesCardList;