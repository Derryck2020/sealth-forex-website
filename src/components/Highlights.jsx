import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import HighlightCard from './HighlightCard';
import { highlight_items } from '../data';

const Highlights = () => {
	return (
		<section className='bg-cyan-600 mt-0'>
			<div className='align-element py-20 grid items-center gap-8'>
				<div className='flex flex-col md:mx-20 items-center'>
					<div className='flex items-center justify-center capitalize py-3 px-6 '>
						<span>
							<FaArrowTrendUp className='text-cyan-950' />
						</span>
						<h6 className='ml-2 uppercase font-semibold text-cyan-50'>
							key highlights
						</h6>
					</div>
					<p className='text-4xl capitalize tracking-wide text-cyan-50 md:text-4xl md:w-45 md:mx-25 text-center font-semibold'>
						Reasons for choosing us
					</p>
				</div>
				<div className='mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-8'>
					{highlight_items.map((item) => (
						<div key={item.id}>
							<HighlightCard {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Highlights;
