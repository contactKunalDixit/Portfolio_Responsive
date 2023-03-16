import React from 'react';
import Toggle from '../Toggle/Toggle';
import './navbar.scss';
import { MdImportantDevices } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<nav className='navbar'>
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
						<p
							style={{
								color: darkMode ? '#ffffff' : '#ffffff',
								fontSize: '0.9rem',
							}}
						>
							contactkunaldixit@gmail.com
						</p>
					</div>

					<ul className='navbar-ul header-normalScreen'>
						<li className='navbar-li'>
							<NavLink
								to='/'
								className='navbar-li-a'
								style={({ isActive }) => {
									return isActive ? { color: 'pink' } : { color: 'white' };
								}}
							>
								WELCOME
							</NavLink>
						</li>

						<li className='navbar-li'>
							<NavLink
								className='navbar-li-a'
								to='about'
								style={({ isActive }) => {
									return isActive ? { color: 'pink' } : { color: 'white' };
								}}
							>
								SERVICES
							</NavLink>
						</li>
						<li className='navbar-li'>
							<NavLink
								className='navbar-li-a'
								to='contact'
								style={({ isActive }) => {
									return isActive ? { color: 'pink' } : { color: 'white' };
								}}
							>
								CONTACT
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='navbar-right'>
					<Toggle></Toggle>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
