import React from 'react';
import './productList.scss';
import Products from '../Products/Products';
import { productsData } from '../../data';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import TickerTech from '../TickerTech/TickerTech';

const ProductList = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='pl' id='work'>
			{/* <div
				className='pl-bground'
				style={{ backgroundColor: darkMode ? '#023d8a9d' : '#fdffb6' }}
			></div> */}
			<div className='pl-wrapper'>
				<div className='pl-text'>
					<h1 className='pl-title'>Work</h1>
					{/* <p className='pl-desc'>
						Here is a glimpse of few of the projects that I've worked on...
					</p> */}
				</div>
				<div className='pl-List'>
					{productsData.map((item) => (
						<Products key={item.id} img={item.img} link={item.link}></Products>
					))}
				</div>
				<div className='pl-tickerTech'>
					<TickerTech />
				</div>
			</div>
		</div>
	);
};

export default ProductList;
