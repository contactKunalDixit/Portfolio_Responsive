import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import { useContext } from 'react';
import { ThemeContext } from './context';
import './app.scss';
import Testimonials from './components/Testimonials/Testimonials';
import Navbar from './components/navbar/Navbar';

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
			<Navbar></Navbar>

			<div className='Sections'>
				<Intro />
				<About />
				<ProductList />
				{/* <Testimonials /> */}
				<Contact />
			</div>
		</div>
	);
}

export default App;
