import React, { useContext } from 'react';
import './testimonials.scss';
import { ThemeContext } from '../../context';

const Testimonials = () => {
	const data = [
		{
			key: 1,
			id: 1,
			name: 'Tom Durden',
			title: 'Senior Developer',
			img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/twitter.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
		},
		{
			key: 2,
			id: 2,
			name: 'Alex Kalinski',
			title: 'Co-Founder of DELKA',
			img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
		},
		{
			key: 3,
			id: 3,
			name: 'Martin Harold',
			title: 'CEO of ALBI',
			img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/linkedin.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
		},
		{
			key: 4,
			id: 4,
			name: 'Tom Durden',
			title: 'Senior Developer',
			img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/twitter.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
		},
		{
			key: 5,
			id: 5,
			name: 'Alex Kalinski',
			title: 'Co-Founder of DELKA',
			img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
		},
		{
			key: 6,
			id: 6,
			name: 'Alex Kalinski',
			title: 'Co-Founder of DELKA',
			img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
			featured: true,
		},
		{
			key: 7,
			id: 7,
			name: 'Alex Kalinski',
			title: 'Co-Founder of DELKA',
			img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			icon: 'assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
			featured: true,
		},
	];

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='testimonials' id='testimonials'>
			<div
				className='contact-bg'
				style={{ backgroundColor: darkMode ? '#ffd6a539' : '#ffd6a5' }}
			></div>
			<div className='testimonials-wrapper'>
				<h1 className='testimonials-Title'>Testimonials</h1>
				<div className='testimonials-container'>
					{data.map((i) => {
						return (
							<div className={i.featured ? 'card' : 'card'} key={i.key}>
								<div className='top'>
									<img src='assets/right-arrow.png' className='left' alt='' />
									<img className='user' src={i.img} alt='' />
									<img className='right' src={i.icon} alt='' />
								</div>
								<div className='center'>
									<p>{i.desc}</p>
								</div>
								<div className='bottom'>
									<h3 className='bottom-userName'>{i.name}</h3>
									<h4 className='bottom-userTitle'>{i.title} </h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
