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
		</section>
	);
};

export default Contact;
