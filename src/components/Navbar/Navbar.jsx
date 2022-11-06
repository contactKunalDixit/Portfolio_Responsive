import React from 'react';
import Toggle from '../Toggle/Toggle';
import './navbar.scss';
import { MdImportantDevices } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
const Navbar = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			className='navbar'
			// style={{ backgroundColor: darkMode ? '#090f6850' : 'rgb(49,36,79)' }}
		>
			<div className='navbar-wrapper'>
				<div className='navbar-left'>
					<div className='nav-logo'>
						<a href='#intro'>
							<MdImportantDevices
								style={{
									margin: '0px 10px',
									color: darkMode ? '#a2a2ca' : '#d8d8fa',
								}}
							></MdImportantDevices>
							<div
								className='nav-logoTitle'
								style={{
									color: darkMode ? '#a2a2ca' : '#d8d8fa',
								}}
							>
								Kunal D.
							</div>
						</a>
					</div>
				</div>
				<div className='navbar-center'>
					<div className='header-smallScreen'>
						<p style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}>
							contactkunaldixit@gmail.com
						</p>
					</div>
					<ul className='navbar-ul'>
						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#intro'
								// style={{
								// 	color: darkMode ? '#a2a2ca' : '#d8d8fa',
								// }}
							>
								WELCOME
							</a>
						</li>

						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#about'
								// style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}
							>
								SERVICES
							</a>
						</li>
						{/* <li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#work'
								style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}
							>
								SERVICES(new Section)
							</a>
						</li> */}

						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#work'
								// style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}
							>
								MY WORK
							</a>
						</li>
						{/* //! TO BE DELETED, Testimonials have been merged with About me info */}
						{/* <li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#testimonials'
								style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}
							>
								Testimonials
							</a>
						</li> */}
						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#contact'
								// style={{ color: darkMode ? '#a2a2ca' : '#d8d8fa' }}
							>
								CONTACT
							</a>
						</li>
					</ul>
				</div>
				<div className='navbar-right'>
					<Toggle></Toggle>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
