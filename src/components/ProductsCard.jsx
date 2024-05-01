import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductsCard = ({ img, url, title, text }) => {
	return (
		<article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
			<img
				src={img}
				alt={title}
				className='w-full object-cover rounded-t-lg h-64'
			/>
			<div className='p-4'>
				<h2 className='text-xl capitalize tracking-wide font-medium'>
					{title}
				</h2>
				<p className='mt-4 text-cyan-900 leading-loose'>{text}</p>
				<Link
					to={url}
					className='flex mx-auto items-center text-white w-40 capitalize tracking-wider py-4 px-6 my-5 bg-cyan-500 hover:bg-cyan-200 hover:text-cyan-900 hover:border-solid hover:border-2 hover:border-cyan-900 rounded-full transition duration-300 ease-in-out'
				>
					<span>
						<FiLogOut />
					</span>
					<span className='ml-2'>explore</span>
				</Link>
			</div>
		</article>
	);
};

export default ProductsCard;
