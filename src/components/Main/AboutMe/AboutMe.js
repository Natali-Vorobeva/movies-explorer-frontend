import React from 'react';
import photo from '../../../images/foto.jpg';
// import photo from '../../../images/foto.svg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container container">
        <h3 className='title'>Студент</h3>
        <div className="about-me__flex-container">
          <article className="about-me__content">
            <h2 className="about-me__my-name">Наталья</h2>
            <p className="about-me__subtitle">Фронтенд&#8209;разработчик, 46 лет</p>
            <p className="about-me__text about-me__text_indent">Я живу в Санкт-Петербурге, закончила Университет Культуры и Искусств. У меня взрослый сын. Я люблю походы, путешествия, кататься на роликах.<br />
              <br />
              <p className="about-me__text_indent">
                Пару лет назад я поняла, что хочу круто изменить свою жизнь. Получить ту
                профессию в сфере IT, которая мне очень интересна. Когда на YouTube я нашла
                один очень классный канал по frontend-разработке, сомнений не было вообще. Я
                поняла, что профессия Web-разработчик – это та профессия, которую я хочу
                освоить.
              </p>
              <br />
              <p className="about-me__text_indent">
                Сейчас я испытываю настоящий восторг, когда пустой экран начинает наполняться
                красивыми фонами, элементами, картинками, когда начинает оживать.
                В течение полугода я самостоятельно изучала верстку и хорошо продвинулась
                вперед, но понимала, что для создания сайта знания должны быть гораздо глубже.
                На курсах в Яндекс.Практикум я действительно получила огромное количество
                знаний и навыков, которые ежедневно укрепляю и совершенствую, изучаю новое.
              </p>

            </p>
            <a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="about-me__link-github">Github</a>
          </article>
          <div className="about-me__photo">
            <img src={photo} className="about-me__image" alt="Моё фото" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
