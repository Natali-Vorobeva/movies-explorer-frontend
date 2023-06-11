import React from 'react';
import { Link } from 'react-router-dom';

function Login({ onMain, buttonText, formText, formLinkText }) {
  return (
    <section className="login">
      <div className="logo logo_type_position">
        <Link className="logo__to-main" to='/' onClick={onMain}></Link>
      </div>
      <h2 className="greeting">Рады видеть!</h2>
      <form action="#"
        // onSubmit={onSubmit}
        className="form" autoComplete="off">
        <div className="form__input-container" >
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            id="email" type="email" name="email" className="form__input form__input_data_email"
            required autoComplete="off" />
          <span className="email-input-error form__input-error"></span>

          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password" type="password" name="password" className="form__input form__input_data_password"
            required autoComplete="off" />
          <span className="password-input-error form__input-error"></span>
        </div>
        <button
          // type="submit"
          className="form__save"
          name="button2">
          {buttonText}

          {/* ПОВЕСИЛА LINK ВРЕМЕННО, ДЛЯ ПРОВЕРКИ  */}
          <Link className="form__movies" to='/movies'>Войти</Link>
        </button>
        <p className="form__text">{formText}Ещё не зарегистрированы?&nbsp;<Link className="form__link " to='/signup' >&nbsp;{formLinkText}Регистрация</Link></p>
      </form >
    </section >
  )
}
export default Login;
