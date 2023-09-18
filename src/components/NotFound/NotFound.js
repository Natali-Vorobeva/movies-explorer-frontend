import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <div className="not-found__error">
        <p className="not-found__code">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link className="not-found__link" to="/">Назад</Link>
    </section>
  )
}
export default NotFound;
