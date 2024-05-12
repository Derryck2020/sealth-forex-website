import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
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
					className='mx-auto w-40 my-5 btn-style transition-style'
				>
					<span>explore</span>
					<span>
						<IoIosArrowDroprightCircle />
					</span>
				</Link>
			</div>
		</article>
	);
};

export default ProductsCard;
