import React, { useEffect, useState } from 'react';
import { testimonial_list } from '../data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const TestimonialCard = ({
	id,
	name,
	image,
	title,
	location,
	text,
	rating,
}) => {
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
						className='grid gap-4 p-2 h-full'
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
