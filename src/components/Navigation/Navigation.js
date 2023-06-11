import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation-button"><Link smooth={true} className="navigation-button__link" to="about-project">О проекте</Link></div>
      <div className="navigation-button"><Link smooth={true} className="navigation-button__link" to="about-me">Обо мне</Link></div>
      <div className="navigation-button"><Link smooth={true} className="navigation-button__link" to="portfolio">Портфолио</Link></div>
    </section>
  )
}
export default Navigation;
