import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Product from './components/Product';
import Stock from './components/Stock';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { About, Service, Blog, Contact } from './pages/index.jsx';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' component={Hero} />
				<Route path='/about' component={<About />} />
				<Route path='/services' component={<Service />} />
				<Route path='/blog' component={<Blog />} />
				<Route path='/contact' component={<Contact />} />
			</Routes>
			<Hero />
			<Product />
			<Stock />
			<Highlights />
			<Testimonials />
			<Footer />
		</Router>
	);
};

export default App;
