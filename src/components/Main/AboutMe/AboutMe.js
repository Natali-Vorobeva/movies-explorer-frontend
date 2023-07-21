import React from 'react';
import photo from '../../../images/foto.svg';

function AboutMe() {
	return (
		<section className="about-me">
			<div className="about-me__container container">
				<h3 className='title'>Студент</h3>
				<div className="about-me__flex-container">
					<article className="about-me__content">
						<h2 className="about-me__my-name">Виталий</h2>
						<p className="about-me__subtitle">Фронтенд&#8209;разработчик, 30 лет</p>
						<p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
						</p>
						<a href="https://github.com/Natali-Vorobeva?tab=repositories" target="blank" className="about-me__link-github">Github</a>
					</article>
					<div className="about-me__photo">
						<img src={photo} className="about-me__image" alt="Моё фото" />
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutMe;
