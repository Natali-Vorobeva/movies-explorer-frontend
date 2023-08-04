import React from 'react';
function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container container">
        <h3 className="title">О проекте</h3>
        <div className="about-project__main">
          <article className="about-project__info">
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className="about-project__info">
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className="about-project__scale">
          <p className="about-project__frontend">1 неделя</p>
          <p className="about-project__backend">4 недели</p>
        </div>
        <div className="about-project__scale-subtitle">
          <p className="about-project__frontend-subtitle">Back-end</p>
          <p className="about-project__backend-subtitle">Front-end</p>
        </div>
        <div className="about-project__more">
          <h3 className="about-project__title">
          Что было сделано:
          </h3>
          <ul className="about-project__list">
            <li className="about-project__item">настроена инфраструктура и создан сервер на express;</li>
            <li className="about-project__item">подключена база данных, созданы схемы и модели ресурсов API;</li>
            <li className="about-project__item">реализовано логирование, аутентификация и авторизация на сервере;</li>
            <li className="about-project__item">бэкенд задеплоен на Яндекс Облако;</li>
            <li className="about-project__item">свёрстаны компоненты на React, разметка портирована в его формат;</li>
            <li className="about-project__item">описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых фильмов;</li>
            <li className="about-project__item">реализованы асинхронные GET- и POST-запросы к API;</li>
            <li className="about-project__item">проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле;</li>
            <li className="about-project__item">полученные фильмы фильтруются на стороне клиента.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
