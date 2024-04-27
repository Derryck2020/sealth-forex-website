import { nanoid } from 'nanoid';
import { BsTwitterX, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

import {
	research,
	trading,
	currency,
	tesla_img,
	gbpusd_img,
	microsoft_img,
	eurousd_img,
	amazon_img,
} from './assets';

export const navlinks = [
	{ id: nanoid(), href: 'about', text: 'about' },
	{ id: nanoid(), href: 'services', text: 'services' },
	{ id: nanoid(), href: 'blog', text: 'blog' },
	{ id: nanoid(), href: 'contact', text: 'contact' },
];

export const socialIcons = [
	{
		id: nanoid(),
		icon: <BsTwitterX className='h-5 w-5' />,
		href: 'https://twitter.com',
	},
	{
		id: nanoid(),
		icon: <BsFacebook className='h-5 w-5' />,
		href: 'https://facebook.com',
	},
	{
		id: nanoid(),
		icon: <BsLinkedin className='h-5 w-5' />,
		href: 'https://linkedin.com',
	},
];

export const products = [
	{
		id: nanoid(),
		img: currency,
		url: '#',
		title: 'currency pair and analysis',
		text: 'Discover currency pairs and expert analysis for optimal trading strategies. Stay informed with comprehensive market insights and make ...',
	},
	{
		id: nanoid(),
		img: trading,
		url: '#',
		title: 'PAMM account trading',
		text: 'Our PAMM account trading service allows you to invest in Forex with experienced traders who will manage your funds on your behalf, providing a stress-free ...',
	},
	{
		id: nanoid(),
		img: research,
		url: '#',
		title: 'trade monitoring and support',
		text: 'Keep track of your trades and receive expert support with our comprehensive trade monitoring and support services for your forex trading journey ...',
	},
];

export const stockItems = [
	{
		id: nanoid(),
		title: 'eurusd',
		icon: eurousd_img,
		trend: <FaArrowTrendDown className='text-red-600' />,
		price: 1.07,
	},
	{
		id: nanoid(),
		title: 'amazon',
		icon: amazon_img,
		trend: <FaArrowTrendUp className='text-green-600' />,
		price: 179.62,
	},
	{
		id: nanoid(),
		title: 'gbpusd',
		icon: gbpusd_img,
		trend: <FaArrowTrendDown className='text-red-600' />,
		price: 1.249,
	},
	{
		id: nanoid(),
		title: 'tesla',
		icon: tesla_img,
		trend: <FaArrowTrendDown className='text-red-600' />,
		price: 168.29,
	},
	{
		id: nanoid(),
		title: 'microsoft',
		icon: microsoft_img,
		trend: <FaArrowTrendUp className='text-green-600' />,
		price: 406.32,
	},
];
