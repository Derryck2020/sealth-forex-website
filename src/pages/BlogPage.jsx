import React from 'react';
import { croppedImg } from '../assets';
import { news_items } from '../data';
import NewsCard from '../components/NewsCard';

const BlogPage = () => {
	return (
		<>
			<section>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(44,174,186,0.7)), url(${croppedImg})`,
					}}
					className='bg-cover bg-center h-[400px]'
				>
					<h2 className='align-element flex justify-center text-center capitalize text-cyan-50 md:w-[750px] text-4xl pt-32 font-semibold tracking-wide'>
						latest news and updates.
					</h2>
				</div>
			</section>
			<section className='align-element my-5 grid sm:grid-cols-2 gap-8'>
				{news_items.map((product) => {
					return <NewsCard key={product.id} {...product} />;
				})}
			</section>
		</>
	);
};

export default BlogPage;
