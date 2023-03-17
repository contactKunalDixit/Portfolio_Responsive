import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
	const [modalState, setModalState] = useState(isOpen);

	useEffect(() => {
		setModalState(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		setModalState(!isOpen);
		onClose && onClose();
	};

	const handleBackdropClick = (e) => {
		if (e.target.classList.contains('modal-container')) {
			handleClose();
		}
	};

	return modalState
		? ReactDOM.createPortal(
				<div className='modal-container' onClick={handleBackdropClick}>
					<div className='modal-content'>
						<button className='modal-close' onClick={handleClose}>
							&times;
						</button>
						<div className='textContent'>
							<h2>Thank You!</h2>
							<br />
							<p>Wow!</p>
							<br />
							<p>
								I'm thrilled to have caught your attention and appreciate you
								taking the time to reach out to me.
							</p>
							<br />
							<p>
								I value your feedback and look forward to responding promptly.
							</p>
							<br />
							<p>
								Regards,
								<br /> Kunal D.
							</p>
						</div>
					</div>
				</div>,
				document.getElementById('modal-root')
		  )
		: null;
};

export default Modal;
