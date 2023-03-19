import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';
import Modal from './components/Modal/Modal';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			{/* <BrowserRouter> */}
			<ThemeProvider>
				<App />
			</ThemeProvider>
			{/* </BrowserRouter> */}
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
