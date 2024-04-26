import React from 'react';
import { Link } from 'react-router-dom';
import { heroImg } from '../assets';

const Hero = () => {
	return (
		<div className='bg-cyan-50'>
			<div className='mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-2 items-center gap-8 '>
				<article>
					<h1 className='text-3xl text-center sm:text-4xl sm:text-start text-cyan-950 capitalize py-5 font-bold tracking-wider'>
						sealth forex forum
					</h1>
					<p className='text-center text-md sm:text-start sm:text-lg text-cyan-900'>
						Join our forex community to gain exclusive access to market
						insights, trading strategies, and expert analysis. Benefit
						from our premium signals and algorithmic trading solutions to
						optimize your investment portfolio.
					</p>
					<div className='flex justify-center sm:justify-start'>
						<Link
							to='/services'
							class='w-48 capitalize flex justify-center bg-cyan-600 hover:bg-cyan-500 text-white py-4 px-6 my-10 rounded'
						>
							view all services
						</Link>
					</div>
				</article>
				<article className='rounded-3xl'>
					<img
						src={heroImg}
						alt='heroImage'
						className='h-80 w-full lg:h-96 rounded-3xl'
					/>
				</article>
			</div>
		</div>
	);
};

export default Hero;
