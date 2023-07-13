import React, { useEffect } from 'react';
import photo from '../../images/foto.svg';

import closePopup from '../../images/icons/close-popup-white.svg';

function MoviesCard({
  isOpen, onClose,
  country, director, time,
  year, description, poster,
  trailer, miniPoster, nameRu, nameEn }) {

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose)
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [isOpen]);

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onClose();
    };
  };

  function mouseDownClose(evt) {
    if (evt.target.classList.contains('movies-card__overlay')) {
      onClose();
    };
  }

  return (
    <div className={`movies-card ${isOpen ? "popup_opened" : ""} `}
      onClick={mouseDownClose}>
      <div className="movies-card__container">
        <div className="movies-card__overlay"></div>
        <div className="movies-card__wrapper">
          <div className="movies-card__contain">
            <div className="movies-card__overlay-1"></div>
            <div className="movies-card__overlay-2"></div>
            <div className="movies-card__overlay-3"></div>
            <div className="movies-card__overlay-4"></div>
            <div className="movies-card__content">
              <p className="movies-card__close-popup">
                <img src={closePopup} className="movies-card__close-button" alt="Закрыть"
                  onClick={onClose}
                />
              </p>
              <div className="movies-card__item">
                <div className="movies-card__row-one">
                  <img className="movies-card__data movies-card__data_style_mini-poster" src={photo}
                    // {miniPoster}
                    alt="рис." />
                  <p className="movies-card__description">Описание
                    <span className="movies-card__data movies-card__data_align_description">Бэкенд готов, возьмёмся за фронтенд. Это самый массивный этап — на него у вас есть две недели.
                      Первым делом следует наладить инфраструктуру. Это универсальное правило: сначала настроить — потом работать.
                      Перейдите в репозиторий, который подготовили для фронтенда, — movies-explorer-frontend. В нём предстоит работать. Локально создайте ветку этапа и назовите её level-2.
                      1. Установка CRA
                      В качестве инфраструктуры проекта используйте пакет CRA, который содержит всё необходимое для работы. Вы уже делали это раньше, поэтому проблем возникнуть не должно.
                      2. Компоненты и файловая структура
                      Подготовьте файловую структуру проекта перед тем, как перейти к созданию компонентов. Вот несколько рекомендаций:
                      для «Реакт-компонентов» создайте отдельную директорию components/;
                      для вспомогательных функций, а также для запросов к API — директорию utils/;
                      для изображений — images/;
                      для кода или файлов сторонних разработчиков, например шрифтов, — vendor/;
                      После этоМы рекомендуем портировать всю вёрстку в JSX. Таким образом часть компонентов окажется презентационной.
                      Для каждого компонента создавайте отдельную директорию. В ней будут лежать JS и CSS-файлы компонента. Например, для компонента App будет такая структура:го перейдите к созданию компонентов на «Реакте». {description}</span>
                  </p>
                </div>
              </div>

              <div className="movies-card__row-two">
                <p className="movies-card__country">Cтрана
                  <span className="movies-card__data">Великобритания{country}</span>
                </p>
                <p className="movies-card__director">Режиссёр<span className="movies-card__data">fffffffffffffffff{director}</span></p>
              </div>
              <div className="movies-card__row-three">
                <p className="movies-card__time">Время<span className="movies-card__data">fffffffffffffffff{time}</span></p>
                <p className="movies-card__year">Год<span className="movies-card__data">1999{year}</span></p>
              </div>

              {/* <p className="movies-card__item">Ссылка на постер<a href={poster} className="movies-card__data movies-card__data_style_url"> fffffffffffffffff{poster}</a> */}
              {/* </p> */}
              <p className="movies-card__item">Трейлер&nbsp;фильма<span className="movies-card__data"><a href={trailer} className="movies-card__data movies-card__data_style_url"> ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff{trailer}</a></span></p>
              <p className="movies-card__item">Название (RU)<span className="movies-card__data">fffffffffffffffff{nameRu}</span></p>
              <p className="movies-card__item">Название (EN)<span className="movies-card__data">fffffffffffffffff{nameEn}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default MoviesCard;
