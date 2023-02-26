import React from 'react';
import './Intro.scss';
import Me from '../../img/guylaptop.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
// import { FaAngleDown } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import handWave from './../../img/hiIconSVG.png';

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
			<div className='intro-wrapper'>
				<div className='intro-left'>
					<div className='intro-Left-Wrapper'>
						<div className='i-intro'>
							<h1 className='salutation_1'>Hello </h1>

							<h1 className='salutation_2'>I am Kunal</h1>
						</div>
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
							<li>
								<span className='boldHeader'>Front-End:</span> ReactJS, Vanilla
								JavaScript, HTML, CSS, BootStrap
							</li>

							<li>
								<span className='boldHeader'>Back-End:</span> NodeJS, ExpressJS,
								PHP
							</li>
							<li>
								<span className='boldHeader'>DataBase:</span> SQL, MongoDB
							</li>
							<li>
								<span className='boldHeader'>Operating Systems:</span> Unix,
								Windows, MacOS
							</li>
							{/* <li>ReactJS</li>
							<li>JavaScript</li>
							<li>NodeJS and Express</li>
							<li>PHP</li>
							<li>SQL/ MongoDB</li>
							<li>HTML</li>
							<li>CSS</li> */}
						</ul>
						<div className='downArrow'>
							<AiOutlineDown></AiOutlineDown>
						</div>
					</div>
				</div>
				<div className='intro-right'>
					<img src={Me} alt='A Mans Pic' className='intro-img' />
					{/* <div className='hiIcon'>
						<img
							src={handWave}
							alt=''
							className='hiIconImage'
							style={{ color: 'white' }}
						/>
					</div> */}
				</div>
			</div>
			{/* <div>
				Icon made from{' '}
				<a href='http://www.onlinewebfonts.com/icon'>Icon Fonts</a> is licensed
				by CC BY 3.0
			</div> */}
		</div>
	);
};

export default Intro;
