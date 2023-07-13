import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../utils/useForm';
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../auth';


import Header from '../Header/Header';

function Profile({ user, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { handleChange, values, errors, isValid, setValues, setIsValid } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');


  // useEffect(() => {
  //   setValues({name: user.name, email: user.email})
  // }, [user]);

  // useEffect(() => {
  //   setSuccess(false)
  //   if (values.name === user.name && values.email === user.email) {
  //     setIsValid(false);
  //   }
  // }, [values]);

  // const getErrorMassage = (err) => {
  //   return err.json();
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsValid(false);
    mainApi.updateCurrentUser({
      email: values.email,
      name: values.name
    })
      .then((user) => {
        // updateUser(user);
        setSuccess(true);
      })
      .catch(err => {
        setIsValid(false);
        // getErrorMassage(err)
        //   .then(res => setError(res.validation ? res.validation.body.message : res.message))
      })
  }

  return (
    <>
      <Header
        onDisplayMain={'visibility'}
        activeButton={'no-active-nav-link'}
      />
      <section className="profile">
        <div className="profile__container container">
          <h2 className="profile__title">Привет, {user.name}!</h2>
          <form
            onSubmit={handleSubmit}
            className='form form_type_profile'
            noValidate
          >
            <div className="form__input-container" >
              <div className="form__input-row">
                <label className="form__label form__label_type_profile" htmlFor='name'>Имя</label>
                <input
                  id="username" type="text" name="name" className="form__input form__input_type_profile"
                  placeholder={user.name} value={values.name || ''}
                  onChange={handleChange}
                  minLength='2' maxLength='30' required />
                <span className="name-input-error form__input-error">{errors.name}</span>
              </div>
              <div className="form__input-row">
                <label className='form__label form__label_type_profile form__label_type_profile-email' htmlFor='email'>E-mail</label>
                <input
                  id="email" type="email" name="email" className="form__input form__input_type_profile form__label_type_profile-email form__input_data_email"
                  required autoComplete="off" />
                <span className="email-input-error form__input-error">{errors.email}</span>
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