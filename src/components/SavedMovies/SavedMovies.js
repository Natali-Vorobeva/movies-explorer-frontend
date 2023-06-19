import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import imagePoster from '../../images/pic__COLOR_pic.png';
// import imagePoster2 from '../../images/1489427938_neobychnye-fotografii-flatlandiya-1.jpg';
// import imagePoster3 from '../../images/1625178000_10-phonoteka-org-p-oboi-na-samsung-vertikalnie-oboi-krasivo-10.jpg';
// import imagePoster4 from '../../images/Flowers-1440x1280.jpg';

function SavedMovies() {
  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        onActiveLinkFilmsSaved={'active'}
        noActiveSavedFilmsLink={'no-active-nav-link'}
      />
      <section className="saved-movies">
        <SearchForm />
        <div className="saved-movies container">
          <div className="gallery gallery_size_saved-movies">
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
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}
export default SavedMovies;
