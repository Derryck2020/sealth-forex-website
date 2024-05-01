import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Product from './components/Product';
import Stock from './components/Stock';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<Product />
			<Stock />
			<Highlights />
			<Testimonials />
		</BrowserRouter>
	);
};

export default App;
