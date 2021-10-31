import React, { useState, useRef } from 'react';
import './contact.scss';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

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
		<div className='Contact' id='contact'>
			<div
				className='contact-bg'
				style={{ backgroundColor: darkMode ? '#ffd6a539' : '#a0c4ff' }}
			></div>
			<div className='contact-Wrapper'>
				<div className='c-Left'>
					<h1 className='c-title LgScreen'>Let's discuss your Project</h1>
					<h1 className='c-title smScreen'>Let's Connect</h1>
					<div className='c-info'>
						<div className='c-info-item'>
							<img src={Phone} alt='' className='c-icon' /> +65 90301206
						</div>
						<div className='c-info-item'>
							<img src={Email} alt='' className='c-icon' />
							contactdixitkunal@gmail.com
						</div>
						<div className='c-info-item'>
							<img src={Address} alt='' className='c-icon' />
							Unit-1459 #3, Bedok Reservoir Road, Singapore - 470138
						</div>
					</div>
				</div>
				<div className='c-Right'>
					<div className='c-right-wrapper'>
						<p className='c-desc LgScreen'>
							<b>
								<span className='Q-title'>What's your story ? </span>
							</b>
							Get in touch. Always available for freelancing if the right
							project comes along
						</p>
						<p className='c-desc SmScreen'>
							<span className='Q-title'>What's your story ? </span>
							Get in touch..
						</p>
						<form ref={formRef} onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder='Name'
								name='user_name'
								value={nameValue}
								onChange={(e) => setNameValue(e.target.value)}
								onClick={(e) => setDone(false)}
							/>
							<input
								type='text'
								placeholder='Subject'
								name='user_subject'
								value={subjectValue}
								onChange={(e) => setSubjectValue(e.target.value)}
							/>
							<input
								type='text'
								placeholder='Email'
								name='user_email'
								value={emailValue}
								onChange={(e) => setEmailValue(e.target.value)}
							/>
							<textarea
								placeholder='Message'
								name='message'
								value={messageValue}
								rows='3'
								onChange={(e) => setMessageValue(e.target.value)}
							></textarea>
							<button>Submit</button>
							{done && (
								<p style={{ marginTop: '20px' }}>
									Thank you! We'll be in touch soon.
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
