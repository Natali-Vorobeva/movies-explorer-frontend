
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from "react-router";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Login({ onMain, formText, onLogin, isLoggedIn }) {

  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const { handleChange, values, errors, isValid } = useForm();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <section className="login">
      <div className="logo logo_type_position">
        <Link className="logo__to-main" to="/" onClick={onMain}></Link>
      </div>
      <h2 className="greeting">Рады видеть!</h2>
      <form action="#"
        noValidate
        onSubmit={handleSubmit}
        className="form"
      >
        <div className="form__input-container" >
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            id="email" type="email" name="email"
            placeholder="Email"
            className={`form__input ${errors.email && 'form__input_status_error'}`}
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="email-input-error form__input-error">{errors.email}</span>

          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password" type="password"
            placeholder="Пароль" name="password"
            className="form__input form__input_data_password"
            required autoComplete="off"
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className="password-input-error form__input-error">{errors.password}</span>
        </div>
        {/* <div className='form__info'>{error}</div> */}
        <button
          type="submit"
          className={`form__save  ${ isValid ? '' : 'form__button_disable' }`}>
          Войти
        </button>
        <p className="form__text">{formText}Ещё не зарегистрированы?&nbsp;<Link className="form__link " to='/signup' >&nbsp;Регистрация</Link></p>
      </form >
    </section >
  )
}
export default Login;
