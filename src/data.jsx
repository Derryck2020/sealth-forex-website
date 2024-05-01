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
	expert,
	support,
	profit,
	no_hidden,
	technology,
	transparency,
	maria,
	elaine,
	ben,
	nathan,
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

export const highlight_items = [
	{
		id: nanoid(),
		icon: expert,
		title: 'friendly & expert',
		text: 'Our company provides reliable guidance for successful forex investment.',
	},
	{
		id: nanoid(),
		icon: support,
		title: '24/7 support',
		text: 'Assistance to clients is always availiable, ensuring prompt support whenever they need it.',
	},
	{
		id: nanoid(),
		icon: profit,
		title: 'best profit split',
		text: 'Fair and equitable distribution of profits for all stakeholders.',
	},
	{
		id: nanoid(),
		icon: no_hidden,
		title: 'no hidden rules',
		text: 'Transparent policies with no concealed regulations or undisclosed conditions.',
	},
	{
		id: nanoid(),
		icon: technology,
		title: 'Advanced Technology',
		text: 'State-of-the-art trading platforms with real-time market data.',
	},
	{
		id: nanoid(),
		icon: transparency,
		title: 'Transparency',
		text: 'We are committed to providing accurate and timely information, fair pricing.',
	},
];

export const testimonial_list = [
	{
		id: nanoid(),
		name: 'maria font',
		image: maria,
		location: 'london, uk',
		title: 'impressive results',
		text: 'Have been trading with this forex company for over a year now, and I am consistently impressed with the results. Their expert analysis and guidance have helped me achieve steady profits.',
		rating: 5,
	},
	{
		id: nanoid(),
		name: 'ben staham',
		image: ben,
		location: 'Texas, USA',
		title: 'Exceptional Support',
		text: 'They are always available to assist me with any questions or concerns I have, providing prompt and helpful responses',
		rating: 4,
	},
	{
		id: nanoid(),
		name: 'elaine waters',
		image: elaine,
		location: 'dortmund, German',
		title: 'Transparent and Trustworthy',
		text: 'They operate with integrity and honesty, ensuring that there are no hidden fees or surprises. I feel confident trading with them.',
		rating: 5,
	},
	{
		id: nanoid(),
		name: 'nathan jeffery',
		image: nathan,
		location: 'liverpool, UK',
		title: 'Advanced Technology, Easy to Use',
		text: 'The trading platform provided by this forex company is top-notch. It offers advanced technology with user-friendly features, making it easy for me to execute trades and monitor the market.',
		rating: 5,
	},
];
