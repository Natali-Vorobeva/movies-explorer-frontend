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
    <main className="main">
      <Header
        onDisplayMovies={'visibility'}
        registration={'Регистрация'}
        enter={'Войти'}
        onActiveLinkMain={'active'}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
      {/* <MoviesCard /> */}
    </main>
  )
};

export default Main;
