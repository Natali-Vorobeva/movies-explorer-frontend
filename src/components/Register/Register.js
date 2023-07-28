import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useForm } from '../../hooks/useForm';

function Register({ onRegister, isLoggedIn, onMain, apiErrors }) {

  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setIsValid } = useForm();

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  console.log(apiErrors)

  return (
    <section className="register">
      <div className="logo logo_type_position">
        <Link className="logo__to-main" to="/" onClick={onMain}></Link>
      </div>
      <h2 className="greeting">Добро пожаловать!</h2>
      <form action=""
        noValidate
        onSubmit={(evt) => {
          evt.preventDefault();
          onRegister(values);
        }}
        className="form">
        <div className="form__input-container">
          <label className="form__label" htmlFor="name">Имя</label>
          <input
            id="username" type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            placeholder="Имя"
            className={`form__input ${errors.name && 'form__input_status_error'}`}
            minLength="2" maxLength="30"
            required
            autoComplete="off" />
          <span className="username-input-error form__input-error">{errors.name}</span>

          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            id="email" type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            placeholder="Email"
            className="form__input form__input_data_email"
            required autoComplete="off" />
          <span className="email-input-error form__input-error">{errors.email}</span>

          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password" type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            placeholder="Пароль"
            className="form__input form__input_data_password"
            required autoComplete="off" />
          <span className="password-input-error form__input-error">{errors.password}</span>
          <button
            type="submit"
            className={`form__save  ${isValid ? '' : 'form__button_disable'}`}>
              {apiErrors.profile && (
                <p className="form__success form__success_type_error">
                  {apiErrors.register.errorText}
                </p>
              )}
            Зарегистрироваться
          </button>
        </div>


        <p className="form__text">Уже зарегистрированы?&nbsp;<Link className="form__link " to='/signin' >&nbsp;Войти</Link></p>
      </form>
    </section>
  )
}
export default Register;
