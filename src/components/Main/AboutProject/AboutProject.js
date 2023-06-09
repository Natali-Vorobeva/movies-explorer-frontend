import React from 'react';
function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container container">
        <h3 className="title">О проекте</h3>
        <div className="about-project__main">
          <article className="about-project__info">
            <h3 className="about-profect__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className="about-project__info">
            <h3 className="about-profect__title">На выполнение диплома ушло 5 недель</h3>
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
      </div>
    </section>
  )
}

export default AboutProject;
