import React from 'react';
function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__copyright'>
          <p className='footer__date'>©&nbsp;{new Date().getFullYear()}</p>
          <nav className="footer__links">
            <a href="https://practicum.yandex.ru/" target="_blank" className='footer__link'>Яндекс.Практикум</a>
            <a href='https://github.com/Natali-Vorobeva?tab=repositories' target="_blank" className='footer__link'>Github</a>
          </nav>
        </div>
      </section>


    </footer>
  )
}
export default Footer;
