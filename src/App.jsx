import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
		</BrowserRouter>
	);
};

export default App;
