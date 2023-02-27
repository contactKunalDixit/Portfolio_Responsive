import React, { useState, useRef } from 'react';
import styles from './contact.module.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import linkedin from '../../img/linkedin.png';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Footer from '../Footer/Footer';

const Contact = () => {
	const [nameValue, setNameValue] = useState('');
	const [subjectValue, setSubjectValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [messageValue, setMessageValue] = useState('');

	const [done, setDone] = useState(false);

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
		setNameValue('');
		setSubjectValue('');
		setEmailValue('');
		setMessageValue('');
	};

	return (
		<>
			<div className={styles.Contact} id='contact'>
				<div
					className={styles.contact_bg}
					// style={{ backgroundColor: darkMode ? '#ffd6a539' : '#a0c4ff' }}
				></div>
				<div className={styles.contact_Wrapper}>
					<div className={styles.contactTop}>
						<div className={styles.c_Left}>
							<div className={styles.c_Left_Title}>
								<h1 className={`${styles.c_title} ${styles.LgScreen}`}>
									Let's Connect
								</h1>
								<h1 className={`${styles.c_title} ${styles.smScreen}`}></h1>
								<p className={styles.c_Left_Desc}>
									I'd love to hear from you! If you have any questions,
									comments, or just want to say hello, please fill out the form
									below or use the contact information provided.
								</p>
							</div>
							<div className={styles.cLeftFormSec}>
								<form ref={formRef} onSubmit={handleSubmit}>
									<div className={styles.userName}>
										<label htmlFor='userName'>Name:</label>
										<input
											id='userName'
											type='text'
											name='user_name'
											value={nameValue}
											onChange={(e) => setNameValue(e.target.value)}
											onClick={(e) => setDone(false)}
										/>
									</div>

									<div className={styles.userEmail}>
										<label htmlFor='userEmail'>Email:</label>
										<input
											id='userEmail'
											type='email'
											name='user_email'
											value={emailValue}
											onChange={(e) => setEmailValue(e.target.value)}
										/>
									</div>
									<div className={styles.userMessage}>
										<label htmlFor='userMessage'>Message:</label>
										<textarea
											id='userMessage'
											name='message'
											value={messageValue}
											rows='3'
											onChange={(e) => setMessageValue(e.target.value)}
										></textarea>
									</div>
									<div className={styles.submitButton}>
										<button className={styles.cLeftSecSubmitButton}>
											Submit
										</button>
									</div>

									{done && (
										<p style={{ marginTop: '20px' }}>
											Thank you! We'll be in touch soon.
										</p>
									)}
								</form>
							</div>
						</div>
						<div className={styles.c_Right}>
							<div className={styles.c_right_wrapper}>
								<div className={styles.c_info}>
									<div className={styles.c_info_item}>
										<img src={Phone} alt='' className={styles.c_icon} /> +65
										90301206
									</div>
									<div className={styles.c_info_item}>
										<img src={Email} alt='' className={styles.c_icon} />
										contactkunaldixit@gmail.com
									</div>
									<div className={styles.c_info_item}>
										<img src={linkedin} alt='' className={styles.c_icon} />
										<a
											target='_blank'
											href='https://www.linkedin.com/in/contactkunaldixit'
										>
											LinkIn Profile
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.contactBottom}>
						<Footer></Footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
