import React from 'react';
function Techs() {
  return (
    <footer className="techs">
      <section className="techs__container container">
        <h3 className="title">Технологии</h3>
        <h2 className="techs__title">7 технологий
        </h2>
        <p className="techs__subtitle">На курсе веб&#8209;разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__items">
          <div className="techs__item">
            <div className="techs__content"> HTML</div>
           </div>
          <p className="techs__item">CSS</p>
          <p className="techs__item">JS</p>
          <p className="techs__item">React</p>
          <p className="techs__item">Git</p>
          <p className="techs__item">Express.js</p>
          <p className="techs__item">mongoDB</p>
        </div>
      </section>
    </footer>
  )
}
export default Techs;
