import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<Outlet />
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
