import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Product from './components/Product';
import Stock from './components/Stock';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<Product />
			<Stock />
		</BrowserRouter>
	);
};

export default App;
