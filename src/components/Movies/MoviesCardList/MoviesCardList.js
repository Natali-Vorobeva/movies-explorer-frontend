import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import imagePoster from '../../../images/pic__COLOR_pic.png';
import MoviesCard from '../../MoviesCard/MoviesCard';
import imagePoster2 from '../../../images/1489427938_neobychnye-fotografii-flatlandiya-1.jpg';
import imagePoster3 from '../../../images/1625178000_10-phonoteka-org-p-oboi-na-samsung-vertikalnie-oboi-krasivo-10.jpg';
import imagePoster4 from '../../../images/Flowers-1440x1280.jpg';

function MoviesCardList(props) {

  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__container container">
          <div className="gallery">
            <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма"
                  onClick={props.onCardClick}
                />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: A dokkkk kkkkkk kkkkkkkk kk k kkk kk  «100 лет дизайна»</p>
                <p className="gallery__like"></p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
            <div className="gallery__card-body">

              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах Джей Харви: «100 лет дизайна»</p>
                <p className="gallery__liked"></p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>

            <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster2} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle"> Пи Джей ХарвиПи Джей ХарвиПи Джей ХарвиПи </p>
                <p className="gallery__like"></p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
            <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster3} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах «100 лет дизайна»</p>
                <p className="gallery__like"></p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
            <div className="gallery__card-body">
              <div className="gallery__poster">
                <img className="gallery__img" src={imagePoster4} alt="Постер фильма" />
              </div>
              <div className="gallery__label">
                <p className="gallery__subtitle">Киноальманах «100 лет дизайна»</p>
                <p className="gallery__like"></p>
              </div>
              <div className="gallery__time">1ч 42 м</div>
            </div>
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