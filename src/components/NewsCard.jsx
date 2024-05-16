import React from 'react';
import { BsCalendar4Event } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaUserPen } from 'react-icons/fa6';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NewsCard = ({ img, url, title, text, admin, date }) => {
	return (
		<article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
			<div className='grid grid-cols-2 gap-4 m-6'>
				<img
					src={img}
					alt={title}
					className='object-cover object-center h-48 rounded-lg'
				/>
				<div>
					<Link
						to={url}
						className='text-cyan-950 hover:text-cyan-500 transition-style'
					>
						<h2 className='text-xl capitalize tracking-wide font-medium'>
							{title}
						</h2>
					</Link>

					<p className='mt-4 text-cyan-900'>{text}</p>
				</div>
			</div>

			<div className='flex justify-between items-center mx-6 py-2'>
				<ul className='flex flex-row gap-6 justify-between px-4 py-3 text-gray-500 border border-gray-500 rounded-full'>
					<li className='flex flex-row items-center gap-1'>
						<FaUserPen />
						<Link
							className='hover:text-cyan-500 transition-style'
							to={url}
						>
							{admin}
						</Link>
					</li>
					<li className='flex flex-row items-center gap-2'>
						<BsCalendar4Event />
						{date}
					</li>
				</ul>
				<div className=''>
					<Link
						to={url}
						className=' flex mx-auto my-5  py-3 px-6 border text-gray-700 border-gray-500 hover:border-transparent hover:bg-cyan-500 hover:text-white  rounded-full transition-style'
					>
						<FaExternalLinkAlt />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default NewsCard;
