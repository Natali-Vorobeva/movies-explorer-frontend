import React from 'react';
import { Link } from 'react-router-dom';
function Register({ formLinkText, formText, onSubmit, onMain }) {
  return (
    <section className="register">
      <div className="logo logo_type_position">
        <Link className="logo__to-main" to="/" onClick={onMain}></Link>
      </div>
      <h2 className="greeting">Добро пожаловать!</h2>
      <form action="" onSubmit={onSubmit} className="form">
        <div className="form__input-container">
          <label className="form__label" htmlFor="username">Имя</label>
          <input
            id="username" type="text"
            name="username"
            placeholder="Имя"
            className="form__input form__input_data_username"
            minLength="2" maxLength="30"
            required autoComplete="off" />
          <span className="username-input-error form__input-error"></span>

          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            id="email" type="email"
            name="email"
            // pattern=""
            placeholder="Email"
            className="form__input form__input_data_email"
            required autoComplete="off" />
          <span className="email-input-error form__input-error"></span>

          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password" type="password"
            name="password"
            placeholder="Пароль"
            className="form__input form__input_data_password"
            required autoComplete="off" />
          <span className="password-input-error form__input-error"></span>
          <button
          type="submit"
          className="form__save">
            Зарегистрироваться
        </button>
        </div>


        <p className="form__text">{formText}Уже зарегистрированы?&nbsp;<Link className="form__link " to='/signin' >&nbsp;{formLinkText}Войти</Link></p>
      </form>
    </section>
  )
}
export default Register;