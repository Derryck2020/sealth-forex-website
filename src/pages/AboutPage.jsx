import React from 'react';
import { croppedImg } from '../assets';
import { FaArrowTrendUp } from 'react-icons/fa6';

const AboutPage = () => {
	return (
		<>
			<header>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(44,174,186,0.7)), url(${croppedImg})`,
					}}
					className='bg-cover bg-center h-[400px]'
				>
					<h2 className='align-element flex justify-center text-center capitalize text-cyan-50 md:w-[750px] text-4xl pt-32 font-semibold tracking-wide'>
						Get to know the heart and soul behind our Forex trading firm.
					</h2>
				</div>
			</header>
			<section className='flex flex-col mt-10 md:mx-20 items-center'>
				<div className='flex items-center py-3 px-6 gap-2'>
					<span>
						<FaArrowTrendUp className='text-cyan-500' />
					</span>
					<h2 className='text-xl font-bold text-cyan-950'>
						{' '}
						<span>About </span>
						seal<span className='text-cyan-500 text-2xl'>TH</span>
					</h2>
				</div>
				<h2 className='text-4xl capitalize tracking-wider text-cyan-950 md:text-6xl md:w-45 md:mx-25 text-center font-semibold'>
					Pioneers in proprietary forex trading
				</h2>
			</section>
		</>
	);
};

export default AboutPage;
