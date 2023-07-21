import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm';

import Header from '../Header/Header';

function Profile({ statusSuccess, onUpdateUser, onSignOut, isLoggedIn }) {

  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const { handleChange, values, errors, isValid, setValues, setIsValid } = useForm();
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  useEffect(() => {
    setName(currentUser.name);
  }, [currentUser]);


  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [values]);

  function handleEditUser(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  };

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        activeButton={'no-active-nav-link'}
      />
      <section className="profile">
        <div className="profile__container container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form action='#'
            onSubmit={handleEditUser}
            className='form form_type_profile'
            noValidate
          >
            <div className="form__input-container form__input-container_way_grid" >
              <div className="form__input-row">
                <label className="form__label form__label_type_profile form__label_type_profile-name" htmlFor='name'>Имя</label>
                <input
                  id="username" type="text" name="name" className="form__input form__input_type_profile form__input_type_profile-name"
                  placeholder={name}
                  value={values.name || ''}
                  onChange={handleChange}
                  minLength='2' maxLength='30' required />
                <span className="name-input-error form__input-error form__input-error_type_profile-name">{errors.name}</span>
              </div>
              <div className="form__input-row">
                <label className='form__label form__label_type_profile form__label_type_profile-email' htmlFor='email'>E-mail</label>
                <input
                  id="email" type="email" name="email" className="form__input form__input_type_profile form__input_type_profile-email "
                  placeholder={currentUser.email}
                  value={values.email || ''}
                  onChange={handleChange}
                  required autoComplete="off" />
                <span className="email-input-error form__input-error form__input-error_type_profile-email">{errors.email}</span>
              </div>
            </div>

            <button
              type="submit"
              className={`form__save form__save_type_profile ${isValid ? '' : 'form__button_type-profile_disable'}`}
              name="button2">
              <p className='form__success form__success_type_profile'>{statusSuccess && 'Данные успешно изменены'}</p>
              <span className='form__info'></span>
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
