import React, { useEffect } from 'react';
import closeBtn from '../../images/icons/Close-Icon.svg';
import incorrectly from '../../images/incorrectly.png';
import correctly from '../../images/correctly.png';

export default function InfoTooltip({ isOpen, onClose, success }) {

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscClose)
		}
		return () => {
			document.removeEventListener('keydown', handleEscClose)
		}
	}, [isOpen])

	function handleEscClose(evt) {
		if (evt.key === 'Escape') {
			onClose();
		}
	};

	function mouseDownClose(evt) {
		if (evt.target.classList.contains('popup__container')) {
			onClose();
		};
	}

	return (
		<div className={`popup popup_form_info ${isOpen ? "popup_opened" : ""}`}
			onMouseDown={mouseDownClose}>
			<div className="popup__container">

				<div className="popup__content">
					<div className="popup__status" >
						<img src={success.status ? incorrectly : correctly} alt="Вы зарегистрированы" />
					</div>

					<p className="popup__text-info">
						{success.text}
					</p>
					<button className="popup__close" type="button" name="button1" aria-label="Закрыть">
						<img
							src={closeBtn}
							className="popup__image-close"
							alt="Закрыть окно"
							onClick={onClose} />
					</button>
				</div>
			</div>
		</div>
	)
}