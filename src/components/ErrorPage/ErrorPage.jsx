import React from 'react';
import { Navigate } from 'react-router-dom';
import './errorpage.scss';

const ErrorPage = () => {
	return (
		<React.Fragment>
			<Navigate to='/'></Navigate>
		</React.Fragment>
	);
};

export default ErrorPage;
