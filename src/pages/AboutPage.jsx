import React from 'react';
import { croppedImg, team } from '../assets';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { about_details, professional_details } from '../data';
import PageHero from '../components/PageHero';

const AboutPage = () => {
	return (
		<>
			<section>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(44,174,186,0.7)), url(${croppedImg})`,
					}}
					className='grid bg-cover bg-center h-[400px]'
				>
					<h2 className='align-element flex justify-center text-center capitalize text-cyan-50 md:w-[750px] text-4xl pt-32 font-semibold tracking-wide'>
						Get to know the heart and soul behind our Forex trading firm.
					</h2>
					<PageHero title='About Us' />
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
							<div className='flex flex-col gap-2'>
								<h2 className='text-xl text-cyan-950 capitalize font-semibold'>
									{item.topic}
								</h2>
								<p className='text-cyan-900'>{item.text}</p>
							</div>
						</article>
					))}
				</div>
			</section>
			<div
				style={{
					backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(44,174,186,0.5)), url(${team})`,
				}}
				className={'bg-cover bg-center mx-5 xl:mx-40 my-10 py-3 rounded-md'}
			>
				<section className='align-element flex flex-col my-5 md:mx-10 gap-14'>
					<div className='flex flex-col items-center'>
						<div className='flex items-center py-3 px-6 gap-2'>
							<span>
								<FaArrowTrendUp className='text-cyan-500' />
							</span>
							<h2 className='text-xl uppercase font-bold text-cyan-50'>
								trust the professionals
							</h2>
						</div>
						<p className=' tracking-wider text-gray-100 md:text-md md:mx-25 text-center'>
							We are a group of passionate, independent thinkers who
							never stop exploring new ways to improve trading for the
							investor.
						</p>
					</div>
					<div className='grid gap-10 md:gap-y-20 lg:grid-cols-2'>
						{professional_details.map((item) => (
							<article key={item.id} className='flex flex-cols gap-4'>
								<img
									src={item.icon}
									alt={item.name}
									className='grid object-cover size-40 justify-center items-center rounded-xl'
								/>

								<div className='flex flex-col gap-2 justify-between'>
									<h4 className='text-sm text-gray-300 uppercase'>
										{item.position}
									</h4>
									<h2 className='text-lg text-cyan-50 capitalize font-semibold'>
										{item.name}
									</h2>
									<p className='text-gray-50 text-sm'>{item.text}</p>
									<ul className='flex flex-row gap-5'>
										{item.links.map((link) => (
											<li
												key={link.id}
												className='text-gray-300 hover:text-cyan-600 transition-style'
											>
												<a href={link.href}>{link.icon}</a>
											</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default AboutPage;
