import React from 'react';
import { FaArrowTrendDown } from 'react-icons/fa6';

const StockCard = ({ title, icon, trend, price }) => {
	const priceColor =
		trend.type === FaArrowTrendDown ? 'text-red-600' : 'text-green-600';

	return (
		<article className='bg-white grid grid-cols-2 py-2 px-3 xl:px-1 justify-end rounded-full shadow-md'>
			<div className='w-32 flex items-center p-2 flex-row gap-3 xl:gap-1'>
				<img
					src={icon}
					alt={title}
					className='object-cover size-7 xl:size-5 rounded'
				/>

				<span className='uppercase text-sm'>{title}</span>
			</div>

			<div className='w-32 flex flex-row items-center p-2 gap-2 justify-end justify-self-end'>
				<div className={`flex items-center gap-1 ${priceColor}`}>
					<span>{trend}</span>
					<span className='text-xs'>{price}</span>
				</div>
			</div>
		</article>
	);
};

export default StockCard;
