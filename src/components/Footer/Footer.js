import React from 'react';
function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__copyright">
          <p className="footer__date">©&nbsp;{new Date().getFullYear()}</p>
          <nav className="footer__links">
            <li className="footer__link">
              <a href="https://practicum.yandex.ru/" target="blank" >Яндекс.Практикум</a>
            </li>
            <li className="footer__link">
              <a href='https://github.com/Natali-Vorobeva?tab=repositories' target="blank" >Github</a>
            </li>
          </nav>
        </div>
      </section>
    </footer>
  )
}
export default Footer;
