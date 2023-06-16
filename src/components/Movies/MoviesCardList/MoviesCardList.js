import React, { useState } from 'react';

import Movie from '../../Movie/Movie';


function MoviesCardList(props) {

  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
          {
						props.cards.map((card) => {
							return <Movie
								key={props.movie._id}
								movie={props.movie}
								onMovieClick={props.onCardClick}
								onCardLike={props.onCardLike}
								onCardDeleteClick={props.onCardDeleteClick}
							/>
						})
					}
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