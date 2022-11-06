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
				color: darkMode && '#a70aa2',
			}}
		>
			<div className='testimonials-wrapper'>
				<div className='testimonials-container'>
					{linkedinData.map((item) => {
						return (
							<div
								className='card'
								key={item.key}
								style={
									{
										// backgroundColor: darkMode ? '#161b63' : '#0a0e45',
										// color: darkMode && '#ccebff',
									}
								}
							>
								<div className='top'>
									<div className='topStart'>
										<img className='user' src={item.img} alt='' />
									</div>
									<div
										className='topEnd'
										style={{
											backgroundColor: darkMode ? '#0c0830' : 'transparent',
											color: darkMode && '#87afc9',
										}}
									>
										<p>{item.desc}</p>
									</div>
								</div>
								<div className='bottom'>
									<h3
										className='bottom-userName'
										style={{ color: !darkMode && 'rgb(66, 59, 59)' }}
									>
										{item.name}
									</h3>
									<h4
										className='bottom-userTitle'
										style={{
											color: !darkMode && 'rgb(35, 31, 31);',
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
