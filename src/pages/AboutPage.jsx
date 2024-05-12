import React from 'react';
import { croppedImg } from '../assets';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { about_details } from '../data';

const AboutPage = () => {
	return (
		<>
			<section>
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
			</section>
			<section className='align-element flex flex-col mt-10 gap-14'>
				<div className='flex flex-col items-center'>
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
					<h2 className='text-4xl capitalize md:w-[40vw] tracking-wider text-cyan-950 md:text-5xl md:w-45 md:mx-25 text-center font-semibold'>
						Pioneers in proprietary forex trading
					</h2>
				</div>
				<div className='grid gap-10 lg:grid-cols-3'>
					{about_details.map((item) => (
						<article key={item.id} className='flex flex-cols gap-4'>
							<div>
								<span className='text-white grid w-16 h-16 justify-center items-center  bg-cyan-400 rounded-full'>
									{item.icon}
								</span>
							</div>
							<div className='flex flex-col text-cyan-950 gap-2'>
								<h2 className='text-xl capitalize font-semibold'>
									{item.topic}
								</h2>
								<p className=''>{item.text}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	);
};

export default AboutPage;
