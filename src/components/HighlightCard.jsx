import React from 'react';

const HighlightCard = ({ icon, title, text }) => {
	return (
		<article className='bg-cyan-600 grid relative gap-5 '>
			<div className='flex justify-center p-2'>
				{/* Image with ::before pseudo-element */}
				<img
					src={icon}
					alt={title}
					className='object-cover size-12 rounded relative mt-4 '
				/>
				{/* ::before pseudo-element */}
				<span className='absolute bg-cyan-200 opacity-30 w-20 h-24 left-30 top-0 rounded-full transform rotate-45'>
					{' '}
				</span>
				<span className='absolute bg-cyan-200 opacity-30 w-20 h-24 right-30 top-0 rounded-full transform -rotate-45'>
					{' '}
				</span>
			</div>
			<div className='grid gap-3'>
				<h3 className='capitalize text-cyan-50 text-xl font-semibold text-center tracking-wider cursor-pointer hover:text-cyan-950 transition duration-300 ease-in-out'>
					{title}
				</h3>
				<p className='text-center text-cyan-950'>{text}</p>
			</div>
		</article>
	);
};

export default HighlightCard;
