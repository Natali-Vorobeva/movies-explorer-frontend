import React from 'react';
import photo from '../../../images/foto-for-portfolio.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container container">
        <h3 className='title'>Обо мне</h3>
        <div className="about-me__flex-container">
          <div className="about-me__photo">
            <img src={photo} className="about-me__image" alt="Моё фото" />
          </div>
          <article className="about-me__content">
            <h2 className="about-me__my-name">Наталья</h2>
            <p className="about-me__subtitle">Фронтенд&#8209;разработчик, 46 лет</p>
            <p className="about-me__text">Я родилась на Урале, большую часть жизни прожила в Санкт-Петербурге. Сейчас живу в 20 км от города, в Ленинградской области. Закончила факультет искусств Университета культуры и искусств, по специальности "Дирижирование". У меня есть взрослый сын. Люблю кататься на роликах, ходить в походы, люблю учиться и узнавать новое. Обучение верстке начала самостоятельно, через полгода посчастливилось попасть на курсы в Яндекс.Практикум. Планирую в дальнейшем совершенствовать знания в Вэб-разработке и расти как специалист в этой области.
            </p>
            <a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="about-me__link-github">Github</a>
          </article>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
