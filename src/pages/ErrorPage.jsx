import React from 'react';

const ErrorPage = () => {
	return (
		<main className='flex flex-col h-96 justify-center items-center gap-4'>
			<h1 className='text-3xl'>Oops! An error occured. 😵</h1>
			<p>Please refresh the page and try again.</p>
		</main>
	);
};

export default ErrorPage;
