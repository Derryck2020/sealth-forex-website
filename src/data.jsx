import { nanoid } from 'nanoid';
import { BsTwitterX, BsLinkedin, BsFacebook } from 'react-icons/bs';

export const navlinks = [
	{ id: nanoid(), href: 'services', text: 'services' },
	{ id: nanoid(), href: 'about', text: 'about' },
	{ id: nanoid(), href: 'contact', text: 'contact' },
];

export const socialIcons = [
	{
		id: nanoid(),
		icon: (
			<BsTwitterX className='h-5 w-5 text-cyan-900 hover:text-cyan-500' />
		),
		href: 'https://twitter.com',
	},
	{
		id: nanoid(),
		icon: (
			<BsFacebook className='h-5 w-5 text-cyan-900 hover:text-cyan-500' />
		),
		href: 'https://facebook.com',
	},
	{
		id: nanoid(),
		icon: (
			<BsLinkedin className='h-5 w-5 text-cyan-900 hover:text-cyan-500' />
		),
		href: 'https://linkedin.com',
	},
];

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'first project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'second project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'third project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
];
