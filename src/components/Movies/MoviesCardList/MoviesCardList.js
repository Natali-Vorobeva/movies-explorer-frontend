import React, { useState } from 'react';

import Movie from '../../Movie/Movie';
import imagePoster from '../../../images/1625178000_10-phonoteka-org-p-oboi-na-samsung-vertikalnie-oboi-krasivo-10.jpg';

function MoviesCardList(props) {

  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
          <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__delete">+</p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
          <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__delete">+</p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
          <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__delete">+</p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
          {/* {
						props.cards.map((card) => {
							return <Movie
								key={props.movie._id}
								movie={props.movie}
								onMovieClick={props.onCardClick}
								onCardLike={props.onCardLike}
								onCardDeleteClick={props.onCardDeleteClick}
							/>
						})
					} */}
          </div>
          <button className="movies-card-list__more">Ещё</button>
          {/* <MoviesCard
      isOpen={isOpen}
      onClose={props.onClose}/> */}
        </div>
      </section>

    </>

  )
}
export default MoviesCardList;