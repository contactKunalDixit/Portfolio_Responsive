import './about.scss';
import React from 'react';
import aboutImg from '../../img/KunalCartoonPotrait.jpg';
import Award from '../../img/Brandon-Hall-Excellence-Awards.jpeg';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
const About = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='About' id='about'>
			<div
				className='about-bground'
				style={{ backgroundColor: darkMode ? '#26491a42' : '#caffbf' }}
			></div>
			<div className='about-left'>
				<div className='about-card shadowBg'>
					<img src={aboutImg} alt='shadow' className='a-img' />
				</div>
				<div className='about-card'>
					<img src={aboutImg} alt='' className='a-img' />
				</div>
			</div>
			<div className='about-right'>
				<h1 className='a-title'>About Me</h1>
				<p className='a-sub'>
					I am a certified Web Developer, and a certified Master's in Global
					Business Management and Business Economics.
				</p>
				<p className='a-desc LgScreen'>
					I have 15+ years of experience with well‐honed expertise and rich
					cross functional exposure to Customer Relationship Management and
					retention, Direct Sales and Marketing, Project and process Management
					in the SaaS and Information Technology enabled Services and
					hospitality sector.
					<br />
					<br />
					I bring in valuable experience of collaborating with Project
					Management groups and creative teams and have contributed to various
					client projects.
					<br />
					<br />
					In addition to enjoying being in web Development, I get immense
					satisfaction in helping others discover and improve thier skillsets.
					That's what has driven me to taste repeated success in the L&D
					projects I have led & have been part of.
				</p>

				<p className='a-desc smScreen'>
					I bring in 15+ years of experience with rich cross functional exposure
					to Customer Relationship Management, Project and process Management in
					the SaaS, ITeS and hospitality sector.
				</p>
				<div className='a-award'>
					<img src={Award} alt='' className='a-award-img' />
					<div className='a-award-texts'>
						<h4
							className='a-award-title'
							style={{ color: darkMode ? '#fdffb6' : '#555' }}
						>
							Brandon Hall Awards 2021
						</h4>
						<p className='a-award-desc'>
							Category: Best Blended Learning and, Operational Excellence
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
