import React from 'react';
function Techs() {
  return (
    <footer className="techs">
      <section className="techs__container container">
        <h3 className="title">Технологии</h3>
        <h2 className="techs__title">7 технологий
        </h2>
        <p className="techs__subtitle">На курсе веб&#8209;разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__items">
          <li className="techs__item"> HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </section>
    </footer>
  )
}
export default Techs;
