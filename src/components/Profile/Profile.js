import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

function Profile({ name, onSignOut }) {


  return (
    <>
    <Header
        onDisplayMain={'visibility'}
        activeButton={'no-active-nav-link'}
      />
    <section className="profile">
      <div className="profile__container container">
        <h2 className="profile__title">{`Привет, ${name}!`}</h2>
        <form action="#"
          // onSubmit={onSubmit}
          className='form form_type_profile' autoComplete="off">
          <div className="form__input-container" >
            <div className="form__input-row">
              <label className="form__label form__label_type_profile" htmlFor='username'>Имя</label>
              <input
                id="username" type="text" name="username" className="form__input form__input_type_profile form__input_data_username"
                required autoComplete="off" />
              <span className="username-input-error form__input-error"></span>
            </div>
            <div className="form__input-row">
              <label className='form__label form__label_type_profile form__label_type_profile-email' htmlFor='email'>E-mail</label>
              <input
                id="email" type="email" name="email" className="form__input form__input_type_profile form__label_type_profile-email form__input_data_email"
                required autoComplete="off" />
              <span className="email-input-error form__input-error"></span>
            </div>
          </div>
          <button
            type="submit"
            className="form__save form__save_type_profile"
            name="button2">
            Редактировать
          </button>
          <Link className="form__profile-exit" to='/' onClick={onSignOut} >Выйти из аккаунта</Link>
        </form>
      </div>
    </section>
    </>
  )
}
export default Profile;