import Navbar from './components/Navbar/Navbar.jsx';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { useContext } from 'react';
import { ThemeContext } from './context';
import './app.scss';

import { Route, Routes } from 'react-router-dom';

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			className='App'
			style={{
				backgroundColor: darkMode ? '#121212' : 'white',
				color: darkMode && '#ccebff',
			}}
		>
			<div className='Navbar'>
				<Navbar />
			</div>

			<div
				className='Sections'
				style={{
					backgroundColor: darkMode ? '#121212' : 'white',
					color: darkMode && '#ccebff',
				}}
			>
				<Routes>
					<Route path='/' element={<Intro />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
