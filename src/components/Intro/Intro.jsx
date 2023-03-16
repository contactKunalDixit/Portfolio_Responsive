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
							<h1 className='salutation_1'>Hello, I am Kunal</h1>
						</div>
						<p className='Title-desc small-Screen'>
							Seasoned professional with expertise in Application and Systems
							Knowledge management, product implementation, and driving product
							adoption initiatives in IT-enabled and cloud-based ecosystems
						</p>
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
								<div className='boldHeader'>Client_Side:</div>
								<div className='normalDesc'>
									ReactJS, JavaScript, HTML, CSS, BootStrap
								</div>
							</li>

							<li>
								<div className='boldHeader'>Server_Side:</div>
								<div className='normalDesc'>NodeJS, ExpressJS, PHP</div>
							</li>
							<li>
								<div className='boldHeader'>DataBase:</div>
								<div className='normalDesc'>SQL, MongoDB</div>
							</li>
						</ul>
						{/* <div className='downArrow'>
							<AiOutlineDown></AiOutlineDown>
						</div> */}
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
