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
		<div className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-left'>
					<div className='nav-logo'>
						<a href='#intro'>
							<MdImportantDevices
								style={{
									margin: '0px 10px',
									color: darkMode ? '#ffffff' : '#ffffff',
								}}
							></MdImportantDevices>
							<div
								className='nav-logoTitle'
								style={{
									color: darkMode ? '#ffffff' : '#ffffff',
								}}
							>
								Kunal D.
							</div>
						</a>
					</div>
				</div>
				<div className='navbar-center'>
					<div className='header-smallScreen'>
						<p style={{ color: darkMode ? '#ffffff' : '#ffffff' }}>
							contactkunaldixit@gmail.com
						</p>
					</div>
					<ul className='navbar-ul'>
						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#intro'
								style={{ color: 'white' }}
							>
								WELCOME
							</a>
						</li>

						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#about'
								style={{ color: 'white' }}
							>
								SERVICES
							</a>
						</li>

						{/* <li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#work'
								style={{ color: 'white' }}
							>
								MY WORK
							</a>
						</li> */}

						<li className='navbar-li'>
							<a
								className='navbar-li-a'
								href='#contact'
								style={{ color: 'white' }}
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
