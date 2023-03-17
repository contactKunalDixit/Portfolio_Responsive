import React, { useState, useRef } from 'react';
import './contact.scss';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import linkedin from '../../img/linkedin.png';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const Contact = () => {
	const [nameValue, setNameValue] = useState('');
	// const [subjectValue, setSubjectValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [messageValue, setMessageValue] = useState('');
	const [done, setDone] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const formRef = useRef();
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_er1vjte',
				'template_6d3ok29',
				formRef.current,
				'user_5UhBgwKxfFIc5mp67CFyC'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setModalOpen(true);
		setNameValue('');

		setEmailValue('');
		setMessageValue('');
	};

	const formKeyboardTransition = () => {
		console.log('Transition works');
	};

	// ! Modal functions:

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div className='Contact' id='contact'>
				<div
					className='contact_bg'
					// style={{ backgroundColor: darkMode ? '#ffd6a539' : '#a0c4ff' }}
				></div>
				<div className='contact_Wrapper'>
					<div className='contactTop'>
						<div className='c_Left'>
							<div className='c_Left_Title'>
								<h1 className='c_title LgScreen'>Let's Connect</h1>
								<div className='largeScreenDevices'>
									<p className='c_Left_Desc'>
										I'd love to hear from you! If you have any questions,
										comments, or just want to say hello, please fill out the
										form below or use the contact information provided.
									</p>
								</div>

								<div className='smallScreenDevices'>
									<p className='c_Left_Desc'>
										Got questions, comments, or just want to say hi? Drop me a
										line below
									</p>
									<div className='c_info'>
										<div className='c_info_item phoneItem'>
											<img src={Phone} alt='' className='c_icon phoneIcon' />{' '}
											+65 90301206
										</div>
										<div className='c_info_item'>
											<img src={Email} alt='' className='c_icon' />
											contactkunaldixit@gmail.com
										</div>
										<div className='c_info_item'>
											<img src={linkedin} alt='' className='c_icon' />
											<a
												target='_blank'
												href='https://www.linkedin.com/in/contactkunaldixit'
											>
												LinkedIn Profile
											</a>
										</div>
									</div>
								</div>

								<div className='super_smallScreenDevices'>
									<p className='c_Left_Desc'>
										I'd love to hear from you! If you have any questions,
										comments, or just want to say hello, please reach out to me
										at..
									</p>
									<div className='c_info'>
										<div className='c_info_item phoneItem'>
											<img src={Phone} alt='' className='c_icon phoneIcon' />{' '}
											+65 90301206
										</div>
										<div className='c_info_item'>
											<img src={Email} alt='' className='c_icon' />
											contactkunaldixit@gmail.com
										</div>
										<div className='c_info_item'>
											<img src={linkedin} alt='' className='c_icon' />
											<a
												target='_blank'
												href='https://www.linkedin.com/in/contactkunaldixit'
											>
												LinkedIn Profile
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='cLeftFormSec' onClick={formKeyboardTransition}>
								<form ref={formRef} onSubmit={handleSubmit}>
									<div className='formSectionBox'>
										<div className='userName'>
											<label htmlFor='userName'>Name:</label>
											<input
												id='userName'
												type='text'
												name='user_name'
												value={nameValue}
												onChange={(e) => setNameValue(e.target.value)}
												// onClick={(e) => setDone(false)}
												onClick={(e) => {
													setDone(false);
												}}
											/>
										</div>

										<div className='userEmail'>
											<label htmlFor='userEmail'>Email:</label>
											<input
												id='userEmail'
												type='email'
												name='user_email'
												value={emailValue}
												onChange={(e) => setEmailValue(e.target.value)}
											/>
										</div>
										<div className='userMessage'>
											<label htmlFor='userMessage'>Message:</label>
											<textarea
												id='userMessage'
												name='message'
												value={messageValue}
												rows='3'
												onChange={(e) => setMessageValue(e.target.value)}
											></textarea>
										</div>
									</div>

									<div className='submitButton'>
										<button className='cLeftSecSubmitButton'>Submit</button>
									</div>
								</form>
							</div>
						</div>
						<div className='c_Right'>
							<div className='c_right_wrapper'>
								<div className='c_info'>
									<div className='c_info_item phoneItem'>
										<img src={Phone} alt='' className='c_icon phoneIcon' /> +65
										90301206
									</div>
									<div className='c_info_item'>
										<img src={Email} alt='' className='c_icon' />
										contactkunaldixit@gmail.com
									</div>
									<div className='c_info_item'>
										<img src={linkedin} alt='' className='c_icon' />
										<a
											target='_blank'
											href='https://www.linkedin.com/in/contactkunaldixit'
										>
											LinkedIn Profile
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='contactBottom'>
						<Footer></Footer>
					</div>
				</div>

				<Modal isOpen={modalOpen} onClose={handleCloseModal}></Modal>
			</div>
		</>
	);
};

export default Contact;
