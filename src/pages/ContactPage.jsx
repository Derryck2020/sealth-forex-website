import React from 'react';
import { croppedImg, team } from '../assets';
import PageHero from '../components/PageHero';
import { FiPhoneCall } from 'react-icons/fi';
import { FaCommentDots, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { IoEnterOutline } from 'react-icons/io5';
import { IoIosMailOpen } from 'react-icons/io';
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

			<section className='align-element py-10 mt-10 grid items-center gap-8'>
				<div className='grid gap-10 items-center md:grid-cols-3'>
					<div className='flex flex-col items-center gap-6 p-12 border rounded-md shadow-md'>
						<FiPhoneCall className='text-4xl text-cyan-500' />
						<div className='text-center'>
							<h3 className='font-semibold'>Request Call Back</h3>
							<p className='text-gray-500'>We will get back.</p>
						</div>
						<span className='flex w-full font-semibold justify-center py-3 border border-gray-300 rounded-full'>
							+447-1801-537
						</span>
					</div>
					<div className='flex flex-col  items-center gap-6 p-12 border rounded-md shadow-md'>
						<FaCommentDots className='text-4xl text-cyan-500' />
						<div className='text-center'>
							<h3 className='font-semibold'>Chat with Expert</h3>
							<p className='text-gray-500'>
								Live chat with forex specialist.
							</p>
						</div>
						<div className='flex justify-center items-center gap-4 px-4 py-3 cursor-pointer border border-gray-300 btn-style transition-style rounded-full'>
							<span>
								<IoEnterOutline className='text-lg' />
							</span>
							<span className='uppercase font-semibold'>start chat</span>
						</div>
					</div>
					<div className='flex flex-col  items-center gap-6 py-12 border rounded-md shadow-md'>
						<div className='flex flex-col justify-center items-center gap-4 px-4 py-3'>
							<h3 className='font-semibold'>Business Hours</h3>
							<p className='text-center text-gray-500'>
								Monday - Friay: 8am to 5pm, Saturday: 10am to 1pm
							</p>
							<FaWhatsapp className='text-2xl text-green-400' />
							<span className='font-semibold'>Whatsapp</span>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Contact;
