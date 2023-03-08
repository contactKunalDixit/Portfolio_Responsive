import './about.scss';
import React from 'react';

import Award from '../../img/Brandon-Hall-Excellence-Awards.jpeg';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Testimonials from '../Testimonials/Testimonials';
import ProductList from '../ProductList/ProductList';
const About = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='About' id='about'>
			<div
				className='about-bground'
				style={{ backgroundColor: darkMode ? '#26491a42' : '#caffbf' }}
			></div>
			<div className='about-Wrapper'>
				<div className='about_info_Sec'>
					<div className='about-left'>
						<div className='about-card'>
							<div className='selfDesc'>
								<div className='highlightsList largeScreen'>
									<p>
										In today's digital age, a strong online presence is more
										critical than ever before. Whether you're an individual or a
										business looking to establish yourself as an industry
										leader, promote a new product, or connect with your
										audience, having an effective web presence is essential.
										That's where I come in.
									</p>

									<p>
										As an expert in digital marketing and web development, I
										specialize in creating online presences that resonate with
										target audiences. Whether you're a small startup or a large
										corporation, I provide the tools and guidance needed to
										reach the right people in the best possible way.
									</p>

									<p>
										I understand that each client has unique goals and needs, so
										I work closely with them to tailor my approach and create a
										web presence that looks great and drives results.
									</p>

									<p>
										Let me help you enhance your online presence, and together,
										we can create a digital strategy that sets you apart from
										the competition and connects you with the people who matter
										most.
									</p>
								</div>
								<div className='highlightsList smallScreen'>
									<p>
										I can enhance your online presence by creating effective
										digital strategies tailored to your unique goals, connecting
										you with your audience and setting you apart from the
										competition
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='about-right'>
						<div className='about-card'>
							<div className='pageTitleSec'>
								<h1 className='pageTitle'>What I Do</h1>
							</div>

							<ProductList></ProductList>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
