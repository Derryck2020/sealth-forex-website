import React from 'react';
import { FaEnvelope, FaRightLong } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { footer_details, socialIcons } from '../data';

const Footer = () => {
	return (
		<section className='bg-cyan-950 mt-0'>
			<div className='align-element pt-10 pb-5 grid gap-8'>
				<section className='flex flex-col md:mx-20 md:items-center gap-10'>
					<div className='flex flex-col md:items-center md:flex-row md:justify-center py-3 gap-5 md:gap-10'>
						<Link
							to='/'
							className='flex items-center gap-2 '
							onClick={() => {
								window.scrollTo(0, 0);
							}}
						>
							<h2 className='text-3xl font-bold'>
								seal<span className='text-cyan-500 text-4xl'>TH</span>
							</h2>
						</Link>
						<ul className='grid md:grid-cols-2 gap-10'>
							<li>
								<a
									href='http://'
									target='_blank'
									className='flex flex-row items-center w-40 gap-2 text-cyan-100 hover:underline'
								>
									<FaEnvelope className='text-cyan-500' />{' '}
									<span>akrasi@gmail.com</span>
								</a>
							</li>
							<li>
								<a
									href='http://'
									target='_blank'
									className='flex flex-row items-center w-40 gap-2 capitalize text-cyan-100'
								>
									<IoLocation className='text-cyan-500' /> north
									london, UK
								</a>
							</li>
						</ul>
					</div>
					<div className='grid grid-cols-2 md:ml-20 sm:grid-cols-3 w-full gap-10 capitalize tracking-wide text-cyan-100'>
						{footer_details.map((item) => (
							<div key={item.id}>
								<ul className='flex flex-col gap-3'>
									<div className='flex items-center gap-3'>
										<FaRightLong className='text-cyan-500' />
										<h4 className='font-semibold text-lg'>
											{item.topic}
										</h4>
									</div>
									<li className='flex flex-col text-gray-400 pl-7 gap-2'>
										{item.details.map((info, index) => (
											<a
												key={index}
												href='#'
												className='w-40 hover:underline'
											>
												{info}
											</a>
										))}
									</li>
								</ul>
							</div>
						))}
					</div>
					<ul className='flex md:hidden flex-row gap-5'>
						{socialIcons.map((link) => (
							<li
								key={link.id}
								className='text-cyan-500 hover:text-cyan-100 transition duration-300 ease-in-out'
							>
								<a href={link.href}>{link.icon}</a>
							</li>
						))}
					</ul>
					<div className='text-cyan-100 capitalize mx-auto mt-5'>
						<h5>
							&copy; {new Date().getFullYear()} &nbsp;
							<span>sealth invest ltd. all rights reserved.</span>
						</h5>
						<h5></h5>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Footer;
