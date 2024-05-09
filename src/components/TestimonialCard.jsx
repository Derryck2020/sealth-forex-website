import React, { useEffect, useState } from 'react';
import { testimonial_list } from '../data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const TestimonialCard = ({}) => {
	const [people, setPeople] = useState(testimonial_list);
	const [currentPerson, setCurrentPerson] = useState(0);

	const nextSlide = () => {
		setCurrentPerson((oldIndex) => (oldIndex + 1) % people.length);
	};

	const prevSlide = () => {
		setCurrentPerson(
			(oldIndex) => (oldIndex - 1 + people.length) % people.length
		);
	};

	const renderStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<svg
					key={i}
					fill={i <= rating ? '#facc15' : '#f3f4f6'}
					height='24'
					stroke='currentColor'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					viewBox='0 0 24 24'
					width='24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
				</svg>
			);
		}
		return stars;
	};

	useEffect(() => {
		let sliderId = setInterval(() => {
			nextSlide();
		}, 3000);
		return () => {
			clearInterval(sliderId);
		};
	}, [currentPerson]);

	return (
		<div className='relative overflow-hidden'>
			{people.map((person, index) => {
				return (
					<article
						key={person.id}
						style={{
							transform: `translateX(${100 * (index - currentPerson)}%)`,
							opacity: index === currentPerson ? 1 : 0,
							display: index === currentPerson ? 'block' : 'none',
						}}
						className='grid gap-4 p-2 h-full animate-pulse'
					>
						<img
							src={person.image}
							alt={person.name}
							className='w-36 h-36 mx-auto mb-2 flex items-center  object-cover rounded-full border-2 border-cyan-500 shadow-lg shadow-gray-500/50'
						/>
						<h5 className='testi-text-align uppercase text-cyan-500'>
							{person.name}
						</h5>
						<p className='testi-text-align text-lg uppercase font-semibold text-cyan-900'>
							{person.title}
						</p>
						<p className='testi-text-align text-lg text-cyan-900'>
							{person.text}
						</p>
						<p className='testi-text-align uppercase text-cyan-500'>
							{person.location}
						</p>
						<div className='flex w-40 mx-auto justify-center items-center'>
							{renderStars(person.rating)}
						</div>
					</article>
				);
			})}
			<button className='btn left-0' onClick={prevSlide}>
				<FiChevronLeft className='chevron-styles' />
			</button>
			<button className='btn right-0' onClick={nextSlide}>
				<FiChevronRight className='chevron-styles' />
			</button>
		</div>
	);
};

export default TestimonialCard;
