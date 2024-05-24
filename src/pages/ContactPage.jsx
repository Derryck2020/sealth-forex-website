import React from 'react';
import { croppedImg, team } from '../assets';
import PageHero from '../components/PageHero';

const Contact = () => {
	return (
		<section className='bg-gray-100'>
			<section>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(44,174,186,0.7)), url(${croppedImg})`,
					}}
					className='grid bg-cover bg-center h-[400px]'
				>
					<h2 className='align-element flex justify-center text-center capitalize text-cyan-50 md:w-[750px] text-4xl pt-32 font-semibold tracking-wide'>
						contact us
					</h2>
					<PageHero title='Contact Us' />
				</div>
			</section>
			<section>
				<div className='align-element py-10 mt-10 grid items-center gap-8'>
					<section className='flex flex-col md:mx-20 items-center'>
						<div className='flex items-center capitalize py-3 px-6 '>
							<h6 className='ml-2 uppercase font-semibold text-cyan-950'>
								what we offer
							</h6>
						</div>
						<h2 className='text-4xl tracking-wide text-cyan-950 md:text-6xl md:w-45 md:mx-25 text-center font-semibold'>
							Explore our different types of account.
						</h2>
					</section>
				</div>
			</section>
		</section>
	);
};

export default Contact;
