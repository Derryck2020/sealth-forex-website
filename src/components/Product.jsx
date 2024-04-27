import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { products } from '../data';
import ProductsCard from './ProductsCard';

const Product = () => {
	return (
		<section className='bg-white'>
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
						Provide all you need for trading sucess
					</h2>
				</section>
				<div className='mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-8'>
					{products.map((product) => {
						return <ProductsCard key={product.id} {...product} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Product;
