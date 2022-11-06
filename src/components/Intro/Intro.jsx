import React from 'react';
import './Intro.scss';
import Me from '../../img/guylaptop.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
const Intro = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='Intro' id='intro'>
			<div
				className='intro-bground'
				style={{
					backgroundColor: darkMode ? '#18a0ac6f' : '#9bf6ff',
				}}
			></div>
			<div className='intro-left'>
				<div className='intro-Left-Wrapper'>
					<h1 className='i-intro'>Hi, I'm Kunal</h1>
					<div className='i-work'>
						<h1 className='i-name'>I do</h1>
						<div className='i-title'>
							<div className='i-title-Wrapper'>
								<div
									className='i-title-Item'
									style={{ color: darkMode ? '#edeb80' : '#313191' }}
								>
									Front-end Development
								</div>
								<div
									className='i-title-Item'
									style={{ color: darkMode ? '#edeb80' : '#313191' }}
								>
									Back-end Development
								</div>
								<div
									className='i-title-Item'
									style={{ color: darkMode ? '#edeb80' : '#313191' }}
								>
									UI Desiging
								</div>
								{/* <div
									className='i-title-Item'
									style={{ color: darkMode ? '#edeb80' : '#313191' }}
								>
									Content Creation
								</div> */}
								<div
									className='i-title-Item'
									style={{ color: darkMode ? '#edeb80' : '#313191' }}
								>
									Training and Facilitation
								</div>
							</div>
						</div>
					</div>

					<p className='intro-desc'>
						I create Full Stack web applications and UIs using:
					</p>
					<ul className='intro-ul'>
						<li>ReactJS</li>
						<li>JavaScript</li>
						<li>NodeJS and Express</li>
						<li>PHP</li>
						<li>SQL/ MongoDB</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='30px'
						viewBox='0 0 24 24'
						width='30px'
						fill={darkMode ? 'white' : '#313191'}
						className='DownArrow'
						style={{
							// position: 'absolute',
							width: '3.125rem',
							height: '3.125rem',
							// bottom: '0',
							color: darkMode ? 'white' : '#313191',
						}}
					>
						<path d='M0 0h24v24H0V0z' fill='none' />
						<path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
					</svg>
				</div>
			</div>
			<div className='intro-right'>
				<img src={Me} alt='A Mans Pic' className='intro-img' />
			</div>
		</div>
	);
};

export default Intro;
