import React from 'react';
import { croppedImg, cloud } from '../assets';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { products } from '../data';
import ProductsCard from '../components/ProductsCard';
import PageHero from '../components/PageHero';

const ServicePage = () => {
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
						Our services
					</h2>
					<PageHero title='Services' />
				</div>
			</section>
			<section>
				<div className='align-element py-10 mt-10 grid items-center gap-8'>
					<section className='flex flex-col md:mx-20 items-center'>
						<div className='flex items-center capitalize py-3 px-6 '>
							<span>
								<FaArrowTrendUp className='text-cyan-500' />
							</span>
							<h6 className='ml-2 uppercase font-semibold text-cyan-950'>
								what we offer
							</h6>
						</div>
						<h2 className='text-4xl tracking-wide text-cyan-950 md:text-6xl md:w-45 md:mx-25 text-center font-semibold'>
							Explore our different types of account.
						</h2>
					</section>
					<div className='mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-8'>
						{products.map((product) => {
							return <ProductsCard key={product.id} {...product} />;
						})}
					</div>
				</div>
			</section>
			<section>
				<div
					style={{
						backgroundImage: ` url(${cloud})`,
					}}
					className='grid py-20 bg-center bg-cover mt-20 gap-8'
				>
					<div className='flex flex-col md:mx-20 items-center'>
						<div className='flex items-center capitalize py-3 px-6 '>
							<h3 className='text-4xl text-center font-bold tracking-wider text-cyan-950'>
								Service inquiry, Any questions?
							</h3>
						</div>
						<h5 className='text-md tracking-wide text-cyan-900 md:mx-25 text-center'>
							For platform feature comparisons, consult our table.
						</h5>
					</div>
					<div className='mx-5 grid md:mx-40 lg:mx-96 xl:mx-[500px] md:grid-cols-2 sm:grid-cols-2 text-center py-3 gap-2 tracking-wider bg-white rounded-full'>
						<div className=''>
							<h6 className='text-gray-500'>Mail us!</h6>
							<a
								href='mailto:akrasi@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-cyan-900 font-semibold hover:underline'
							>
								<span>sealth@gmail.com</span>
							</a>
						</div>
						<div className='relative'>
							<div
								className='absolute hidden sm:flex inset-0 bg-gray-300'
								style={{ width: '2px' }}
							></div>
							<h6 className='text-gray-500'>Call us!</h6>
							<h5 className='text-cyan-900 font-semibold'>
								+447 566 2617
							</h5>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicePage;
