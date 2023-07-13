import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useForm } from '../../utils/useForm';
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../auth';


function Register({ onRegister, formLinkText, onMain }) {
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setIsValid } = useForm();
  // const [error, setError] = useState('');

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // function handleChangeUsername(evt) {
  //   setUsername(evt.target.value);
  // }

  // function handleChangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }

  // function handleChangePassword(evt) {
  //   setPassword(evt.target.value);
  // }

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   onRegister(username, email, password);
  // }

  // let title = 'Что-то пошло не так...';
  const getErrorMassage = (err) => {
    console.log(err);
    return err;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   setIsValid(false);
  //   auth.register({
  //     name: values.name,
  //     email: values.email,
  //     password: values.password
  //   })
  //     .then(() => {
  //       sign(() => navigate('/movies', { replace: true }));
  //     })
  //     .catch(err => {
  //       setIsValid(false);
  //       getErrorMassage(err);
  //       // .then(res => setError(res.validation ? res.validation.body.message : res.message))
  //     })
  // }

  return (
    <section className="register">
      <div className="logo logo_type_position">
        <Link className="logo__to-main" to="/" onClick={onMain}></Link>
      </div>
      <h2 className="greeting">Добро пожаловать!</h2>
      <form action=""
        noValidate
        onSubmit={handleSubmit}
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
            // "form__input form__input_data_username"
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
            className={`form__input ${errors.email && 'form__input_status_error'}`}
            // className="form__input form__input_data_email"
            required autoComplete="off" />
          <span className="email-input-error form__input-error">{errors.email}</span>

          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password" type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            placeholder="Пароль"
            className={`form__input ${errors.password && 'form__input_status_error'}`}
            // className="form__input form__input_data_password"
            required autoComplete="off" />
          <span className="password-input-error form__input-error">{errors.password}</span>
          <button
            type="submit"
            className="form__save">
            Зарегистрироваться
          </button>
        </div>


        <p className="form__text">Уже зарегистрированы?&nbsp;<Link className="form__link " to='/signin' >&nbsp;{formLinkText}Войти</Link></p>
      </form>
    </section>
  )
}
export default Register;