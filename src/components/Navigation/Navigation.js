import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__button"><Link smooth={true} className="navigation__link" to="about-project">О проекте</Link></div>
      <div className="navigation__button"><Link smooth={true} className="navigation__link" to="about-me">Обо мне</Link></div>
      <div className="navigation__button"><Link smooth={true} className="navigation__link" to="portfolio">Портфолио</Link></div>
    </section>
  )
}
export default Navigation;
