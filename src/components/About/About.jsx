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
										As the world becomes increasingly digital, having a strong
										online presence has never been more critical for businesses
										and individuals alike. Whether you're trying to establish
										yourself as an industry leader, promote a new product, or
										simply connect with your audience, having an effective web
										presence is essential. And that's where I come in.
									</p>
									<br />
									<p>
										With my expertise in digital marketing and web development,
										I help companies and individuals create an online presence
										that resonates with their target audience. From designing a
										beautiful and user-friendly website to developing a
										comprehensive digital marketing strategy, I provide the
										tools and guidance needed to reach the right people in the
										best way possible.
									</p>
									<br />
									<p>
										Whether you're a small startup or a large corporation, I
										understand that every client has unique goals and needs.
										That's why I work closely with my clients to understand
										their vision and tailor my approach accordingly. By
										combining my technical expertise with a deep understanding
										of your audience, I can create a web presence that not only
										looks great but also drives results.
									</p>
									<br />
									<p>
										So if you're looking to establish or enhance your online
										presence, let me help you get there. Together, we can create
										a digital strategy that sets you apart from the competition
										and connects you with the people who matter most.
									</p>
								</div>
								{/* <div className='desc_Summary'>
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
												Blended Learning
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
												Most Impactful Facilitator 2022
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
								</div> */}
							</div>
						</div>
					</div>
					<div className='about-right'>
						<div className='about-card'>
							<h1 className='a-title'>Testimonials</h1>
							<Testimonials></Testimonials>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
