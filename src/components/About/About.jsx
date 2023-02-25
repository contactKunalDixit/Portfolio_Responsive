import './about.scss';
import React from 'react';

import Award from '../../img/Brandon-Hall-Excellence-Awards.jpeg';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Testimonials from '../Testimonials/Testimonials';
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
				<div className='pageTitleSec'>
					<h1 className='pageTitle'>What I Do</h1>
				</div>
				<div className='about_info_Sec'>
					<div className='about-left'>
						<div className='about-card'>
							<div className='selfDesc'>
								<div className='highlightsList'>
									<p>
										I provide online presence to companies and individuals
										looking to reach the right people in the best way possible.
									</p>
									<p>
										Web presence is the first point of contact your audience
										will have with you, and it's also the most essential.
										Without it, you cannot move forward.
									</p>
									<p> Let me help you get there.</p>
								</div>
								<div className='desc_Summary'>
									<div className='a-award'>
										<img src={Award} alt='' className='a-award-img' />
										<div className='a-award-texts'>
											<h4
												className='a-award-title'
												style={{ color: darkMode ? '#fdffb6' : '#ebe5e5' }}
											>
												Brandon Hall Awards 2021
											</h4>
											<p className='a-award-desc'>
												<span className='category-desc'>Category</span> : Best
												Blended Learning and, Operational Excellence
											</p>
											<p className='a-award-desc'>
												<span className='category-desc'>Project</span>: Axis
												Bank
											</p>
										</div>
									</div>
									<div className='a-award'>
										<img src={Award} alt='' className='a-award-img' />
										<div className='a-award-texts'>
											<h4
												className='a-award-title'
												style={{ color: darkMode ? '#fdffb6' : '#ebe5e5' }}
											>
												Most Impactful Facilitator
											</h4>
											<p className='a-award-desc'>
												<span className='category-desc'>Category</span>:
												Operational Excellence
											</p>
											<p className='a-award-desc'>
												<span className='category-desc'>Project</span>: IHS
												Markit
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='about-right'>
						<div className='about-card'>
							<h1 className='a-title'>Testimonials</h1>
							{/* <Testimonials></Testimonials> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
