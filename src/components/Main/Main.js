import React from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
    <Header
      onDisplayMovies={'visibility'}
      registration={'Регистрация'}
      enter={'Войти'}
      onActiveLinkMain={'active'}
    />
    <section className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </section>
    <Footer />
    </>
  )
};

export default Main;
