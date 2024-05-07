import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	Landing,
	Home,
	About,
	Service,
	Blog,
	Contact,
	ErrorPage,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Home />,
		children: [
			{
				index: true,
				element: <Landing />,
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
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
