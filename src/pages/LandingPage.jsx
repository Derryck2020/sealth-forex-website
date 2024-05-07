import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';
import Stock from '../components/Stock';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

const Landing = () => {
	return (
		<>
			<Hero />
			<Product />
			<Stock />
			<Highlights />
			<Testimonials />
		</>
	);
};

export default Landing;
