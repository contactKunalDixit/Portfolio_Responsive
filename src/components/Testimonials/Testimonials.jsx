import React, { useContext } from 'react';
import './testimonials.scss';
import { ThemeContext } from '../../context';
import { linkedinData } from '../../data';

const Testimonials = (props) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			className='testimonials'
			id='testimonials'
			style={{
				backgroundColor: darkMode ? '#121212' : 'white',
				color: darkMode && '#ccebff',
			}}
		>
			<div
				className='testimonial-bg'
				style={{
					backgroundColor: darkMode ? '#641345b8' : '#320c7e39',
				}}
			></div>
			<div className='testimonials-wrapper'>
				<h1 className='testimonials-Title'>Testimonials</h1>
				<div className='testimonials-container'>
					{linkedinData.map((item) => {
						return (
							<div
								className='card'
								key={item.key}
								style={{
									backgroundColor: darkMode ? '#2e1daa50' : '#407a1d39',
									color: darkMode && '#ccebff',
								}}
							>
								<div className='top'>
									<img src='assets/right-arrow.png' className='left' alt='' />
									<img className='user' src={item.img} alt='' />
									<img className='right' src={item.icon} alt='' />
								</div>
								<div
									className='center'
									style={{
										backgroundColor: darkMode ? '#4a428f' : '#320c7e39',
										color: darkMode && '#ccebff',
									}}
								>
									<p>{item.desc}</p>
								</div>
								<div className='bottom'>
									<h3 className='bottom-userName'>{item.name}</h3>
									<h4
										className='bottom-userTitle'
										style={{
											color: !darkMode && 'black',
										}}
									>
										{item.title}{' '}
									</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
