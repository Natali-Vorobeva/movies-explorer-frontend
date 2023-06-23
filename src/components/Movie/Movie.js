import React from 'react';

function Movie(props) {
  const nameRu = props.card.nameRU
  const image = props.isOnlySaved ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`
  const trailerLink = props.card.trailerLink

  const duration = () => {
    if (props.card.duration > 60) {
      return (props.card.duration / 60 | 0) + "ч " + props.card.duration % 60 + "м"
    }
    if (props.card.duration === 60) {
      return (props.card.duration / 60) + "ч"
    } else {
      return props.card.duration + "м"
    }
  }

  function handleCardSave() {
    props.onCardSave(props.card)
  }

  function handleCardDelete() {
    props.onCardDelete(props.card)
  }
  // !!! Доделать карточку для saved-movies !!!
  return (
    <div className="gallery__card-body">
      <div className="gallery__poster">
      <a className="movie__trailer" href={trailerLink} rel="noreferrer" target="_blank">
        <img className="gallery__img" src={image} alt="Постер фильма" />
      </a>
      </div>


{/* ! Этот ког вместо gallery__liked/ Его нужно адаптировать */}
      {props.isOnlySaved ? <button className="movie__button_delete hover-button" onClick={handleCardDelete} type="button"></button> :
          (props.isSaved(props.card) ? <button className="movie__button movie__button_saved hover-button" onClick={handleCardDelete} type="button"></button> :
            <button className="movie__button movie__button_save hover-button" onClick={handleCardSave} type="button">Сохранить</button>)}


      <div className="gallery__label">
        <p className="gallery__subtitle">{nameRu}</p>
        <p className="gallery__liked">{}</p>
      </div>
      <div className="gallery__time">{duration()}</div>
    </div>


  )
}

export default Movie;