import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({ isLoggedIn, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <Header
      onDisplayMovies={'visibility'}
      registration={'Регистрация'}
      enter={'Войти'}
      onActiveLinkMain={'active'}
      email={currentUser.email}
      isLoggedIn={isLoggedIn}
      onSignOut={onSignOut}
    />
    <main className="main">
      <section className="main__container">
      <Promo />
      <AboutProject />
      <AboutMe />
      <Techs />
      <Portfolio />
      </section>
    </main>
    <Footer />
    </>
  )
};

export default Main;
