import React from 'react';
import Ticker from 'react-ticker';
import './tickerTech.scss';
import { TechData } from '../../data';

const TickerTech = () => {
	return (
		<div>
			<Ticker
				speed={8}
				// mode={`await`}
				// move={false}
				move={true}
				offset={'run-in'}
				style={{
					textAlign: 'center',
				}}
			>
				{({ index }) => (
					<>
						<div className='boxDiv'>
							<p className='boxDivText'>ToolKit:</p>
							{TechData.map((item) => (
								<>
									<span className='boxSpan' id={item.id}>
										<div className='unit'>
											<img src={item.img} alt='' className='images'></img>
											{/* <span className='boxText'>{item.text}</span> */}
										</div>
									</span>
								</>
							))}
						</div>
					</>
				)}
			</Ticker>
		</div>
	);
};

export default TickerTech;
