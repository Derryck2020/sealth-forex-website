import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navlinks, socialIcons } from '../data';
import { close, menu } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	const closeMenu = () => {
		setToggle(false);
		setActive('');
	};

	return (
		<section className='bg-white drop-shadow-md'>
			<div className='align-element py-3 flex sm:justify-between  sm:gap-x-16 sm:items-center sm:py-5'>
				<Link
					to='/'
					className='flex items-center gap-2 '
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<h2 className='text-2xl font-bold'>
						seal<span className='text-cyan-500 text-3xl'>TH</span>
					</h2>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10 '>
					{navlinks.map((link) => (
						<li
							key={link.id}
							className={`text-cyan-900 hover:text-cyan-500 text-[18px] capitalize font-medium cursor-pointer transition duration-300 ease-in-out`}
							onClick={() => setActive(link.text)}
						>
							<NavLink
								to={link.url}
								className={({ isActive }) =>
									isActive ? 'text-cyan-500' : 'text-cyan-900'
								}
							>
								{link.text}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className='sm:flex gap-5 hidden'>
					{socialIcons.map((link) => (
						<li
							key={link.id}
							className='text-cyan-900 hover:text-cyan-500 transition duration-300 ease-in-out'
						>
							<Link href={link.href}>{link.icon}</Link>
						</li>
					))}
				</ul>
				<div className='flex flex-1 sm:hidden justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='toggle'
						className=' object-contain cursor-pointer p-1 size-9 border border-slate-800 hover:border-none rounded'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-4 absolute bg-slate-900 top-20 my-2 min-w-[240px] z-10 rounded-xl`}
					>
						<ul className='list-none flex justify-end items-start flex-col gap-2'>
							{navlinks.map((link) => (
								<li
									key={link.id}
									className={`text-base text-cyan-500 capitalize tracking-wider cursor-pointer px-2 py-1.5 hover:border hover:border-solid hover:border-cyan-500 hover:w-[200px] rounded-lg transition duration-300 ease-in-out`}
									onClick={closeMenu}
								>
									<Link to={link.url}>{link.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
