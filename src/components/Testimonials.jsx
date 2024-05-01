import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
	return (
		<section className='bg-cyan-50 mt-0'>
			<div className='align-element py-20 grid items-center gap-8'>
				<section className='flex flex-col md:mx-20 items-center'>
					<div className='flex items-center justify-center capitalize py-3 px-6 '>
						<span>
							<FaArrowTrendUp className='text-cyan-500' />
						</span>
						<h6 className='ml-2 uppercase font-semibold text-cyan-950'>
							client testimonials
						</h6>
					</div>
					<p className='text-3xl capitalize tracking-wide text-cyan-950 md:text-4xl md:w-45 md:mx-25 text-center font-semibold'>
						hear what our clients have to say about us
					</p>
				</section>

				<div className='grid max-w-2xl mx-auto mt-10 gap-8'>
					<TestimonialCard />
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
