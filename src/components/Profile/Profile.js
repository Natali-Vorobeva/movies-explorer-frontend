import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../utils/useForm';
import { mainApi } from '../../utils/MainApi';

import Header from '../Header/Header';

function Profile({ onHandleSubmit, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setValues, setIsValid } = useForm();
  const [error, setError] = useState('');
  // const [name, setName] = useState(currentUser.name);
  const [name, setName] = useState('');
  // const [email, setEmail] = useState(currentUser.email);
  const [email, setEmail] = useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }
  
  function handleEditUser(evt) {
    evt.preventDefault();
    onHandleSubmit({
      name,
      email: email,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        activeButton={'no-active-nav-link'}
      />
      <section className="profile">
        <div className="profile__container container">
          <h2 className="profile__title">Привет, {name}!</h2>
          <form
            onSubmit={handleEditUser}
            className='form form_type_profile'
            noValidate
          >
            <div className="form__input-container form__input-container_way_grid" >
              <div className="form__input-row">
                <label className="form__label form__label_type_profile form__label_type_profile-name" htmlFor='name'>Имя</label>
                <input
                  id="username" type="text" name="name" className="form__input form__input_type_profile form__input_type_profile-name"
                  value={name}
                  placeholder={name} 
                  onChange={handleNameChange}
                  minLength='2' maxLength='30' required />
                <span className="name-input-error form__input-error form__input-error_type_profile-name">{errors.name}</span>
              </div>
              <div className="form__input-row">
                <label className='form__label form__label_type_profile form__label_type_profile-email' htmlFor='email'>E-mail</label>
                <input
                  id="email" type="email" name="email" className="form__input form__input_type_profile form__input_type_profile-email "
                  placeholder={email} 
                  value={email}
                  onChange={handleEmailChange}
                  required autoComplete="off" />
                <span className="email-input-error form__input-error form__input-error_type_profile-email">{errors.email}</span>
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