import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { stockItems } from '../data';
import StockCard from './StockCard';

const Stock = () => {
	return (
		<section className='bg-cyan-50'>
			<div className='align-element py-10 mt-10 grid items-center gap-8'>
				<section className='flex flex-col md:mx-20 items-center'>
					<div className='flex items-center justify-center capitalize py-3 px-6 '>
						<span>
							<FaArrowTrendUp className='text-cyan-500' />
						</span>
						<h6 className='ml-2 uppercase font-semibold text-cyan-950'>
							connect to global capital markets
						</h6>
					</div>
					<p className='text-2xl tracking-wide text-cyan-950 md:text-4xl md:w-45 md:mx-25 text-center font-semibold'>
						Access 40,000+ trading instruments and professional asset
						management on award-winning platforms.
					</p>
				</section>
				<div className='mt-5 grid sm:grid-cols-2 xl:grid-cols-5 gap-8'>
					{stockItems.map((item) => {
						return <StockCard key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Stock;
