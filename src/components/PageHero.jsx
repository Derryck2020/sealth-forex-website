import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const PageHero = ({ title }) => {
	return (
		<section className='flex flex-row items-center pl-5 md:ml-40'>
			<h3 className='flex flex-row gap-4 text-lg items-center text-gray-300 tracking-wider'>
				<Link
					to='/'
					className='hover:text-cyan-300 transition-style window.scrollTo(0, 0);'
				>
					Home
				</Link>
				<BsArrowRightCircle />
				<span className='text-cyan-50'>{title}</span>
			</h3>
		</section>
	);
};

export default PageHero;
