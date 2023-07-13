import React from 'react';
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h3 className="portfolio__title">Портфолио</h3>
        <div className="portfolio__links">
          <div className="portfolio__link">
            <a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="portfolio__link-static">Статичный сайт</a>
            <p className="portfolio__arrow">↗</p>
          </div>
          <div className="portfolio__link">
            <a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="portfolio__link-adaptive">Адаптивный сайт</a>
            <p className="portfolio__arrow">↗</p>
          </div>
          <div className="portfolio__link">
            <a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="portfolio__link-app">Одностраничное приложение</a>
            <p className="portfolio__arrow">↗</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio;
