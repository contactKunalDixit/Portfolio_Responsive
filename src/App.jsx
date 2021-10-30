import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';

import { useContext } from 'react';
import { ThemeContext } from './context';
import Testimonials from './components/Testimonials/Testimonials';
import Navbar from './components/Navbar/Navbar.jsx';
import './app.scss';

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
			<Navbar />

			<div
				className='Sections'
				style={{
					backgroundColor: darkMode ? '#121212' : 'white',
					color: darkMode && '#ccebff',
				}}
			>
				<Intro />
				<About />
				<ProductList />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
