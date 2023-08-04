import React, { useState } from 'react';
import globe from '../../../images/AjIm.gif';
import Navigation from '../../Navigation/Navigation';

function Promo() {
  const [visibilityNavigation, setVisibilityNavigation] = useState('');
  const [indentNavigationButton, setIndentNavigationButton] = useState('');

  function handleToggleClickButtonNavigation() {
    if (!visibilityNavigation) {
      setVisibilityNavigation(<Navigation />);
      // setIndentNavigationButton('indent-nav-button');
    } else {
      setVisibilityNavigation('');
      setIndentNavigationButton('');
    };
  };

  return (
    <section className="promo">
      {/* <img src={globe} className="promo__img" alt="Логотип" /> */}

      <div className="promo__image">
        {/* <img src={globe} className="promo__img" alt="Логотип" /> */}
      </div>

      <div className="promo__container container">
        <article className="promo__main-text">
          <h1 className="promo__title">Учебный проект<br/>студента<br/>факультета<br/>Веб&#8209;разработки<br/><span className="promo__title_style_font">Натальи Воробьёвой</span></h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <div className="navigation">
          <div className={`navigation__button navigation__button_position_text ${indentNavigationButton}`} onClick={handleToggleClickButtonNavigation}>Узнать больше</div>

          {visibilityNavigation}

          </div>
          {/* <div className={`navigation navigation__button ${indentNavigationButton}`} onClick={handleToggleClickButtonNavigation}>Узнать больше</div>
          {visibilityNavigation} */}
        </article>
        {/* <div className="promo__image"> */}
          {/* <img src={globe} className="promo__img" alt="Логотип" /> */}
        {/* </div> */}
      </div>
    </section>
  )
}
export default Promo;
