import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p className={styles.footerText}>
				{' '}
				&copy; Kunal Dixit. All rights reserved
			</p>
		</div>
	);
};

export default Footer;
