import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
