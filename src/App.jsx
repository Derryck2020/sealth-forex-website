import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About, Service, Blog, Contact } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'services',
		element: <Service />,
	},
	{
		path: 'blog',
		element: <Blog />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
