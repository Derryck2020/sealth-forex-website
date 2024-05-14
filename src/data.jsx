import { nanoid } from 'nanoid';
import { BsTwitterX, BsLinkedin, BsFacebook } from 'react-icons/bs';
import {
	FaArrowTrendDown,
	FaArrowTrendUp,
	FaLayerGroup,
	FaLeaf,
	FaRegHourglassHalf,
} from 'react-icons/fa6';

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
	ivan,
	brooke,
	freda,
	bruce,
} from './assets';

export const navlinks = [
	{ id: nanoid(), url: '/about', text: 'about' },
	{ id: nanoid(), url: '/services', text: 'services' },
	{ id: nanoid(), url: '/blog', text: 'blog' },
	{ id: nanoid(), url: '/contact', text: 'contact' },
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
		text: 'The support team at this forex is exceptional and timely. They are always available to assist me with any questions or concerns I have, providing prompt and helpful responses.',
		rating: 4,
	},
	{
		id: nanoid(),
		name: 'elaine waters',
		image: elaine,
		location: 'dortmund, German',
		title: 'Transparent and Trustworthy',
		text: 'I appreciate the transparency and trustworthiness of this forex company. They operate with integrity and honesty, ensuring that there are no hidden fees or surprises. I feel confident trading with them.',
		rating: 5,
	},
	{
		id: nanoid(),
		name: 'nathan jeffery',
		image: nathan,
		location: 'liverpool, UK',
		title: 'Advanced Technology, Easy to Use',
		text: 'The trading platform provided by this forex company is top-notch. It offers advanced technology with user-friendly features, making it easy for me to execute trades and monitor the market.',
		rating: 4,
	},
];

export const footer_details = [
	{
		id: nanoid(),
		topic: 'overview',
		details: ['stock indices', 'commodities', 'forex'],
	},
	{
		id: nanoid(),
		topic: 'company',
		details: ['about', 'blog', 'careers'],
	},
	{
		id: nanoid(),
		topic: 'account info',
		details: ['individual account', 'professional account', 'VIP account'],
	},
	{
		id: nanoid(),
		topic: 'legal',
		details: ['terms & conditions', 'privacy & policy', 'contact'],
	},
];

export const about_details = [
	{
		id: nanoid(),
		icon: <FaLeaf className='size-7 ' />,
		topic: 'philosophy',
		text: 'Empowering traders with education, cutting-edge tools, and transparent strategies to navigate and succeed in the Forex market.',
	},
	{
		id: nanoid(),
		icon: <FaLayerGroup className='size-7' />,
		topic: 'culture',
		text: 'Our Forex trading company fosters a culture of collaboration, continuous learning, integrity, and innovation, empowering traders to thrive.',
	},
	{
		id: nanoid(),
		icon: <FaRegHourglassHalf className='size-7' />,
		topic: 'history',
		text: 'Pioneering Forex trading since 2010, our company has a rich history of innovation, integrity, and client success worldwide.',
	},
];
export const professional_details = [
	{
		id: nanoid(),
		icon: freda,
		name: 'queenstar cohen',
		position: 'chief executive officer',
		text: 'Dynamic, strategic, visionary leader global forex trading operations.',
		links: [
			{
				id: nanoid(),
				icon: <BsFacebook className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsTwitterX className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsLinkedin className='h-4 w-4' />,
				href: '#',
			},
		],
	},
	{
		id: nanoid(),
		icon: ivan,
		name: 'vikram sharma',
		position: 'executive assistant',
		text: 'Vikram is highly skilled adept at navigating forex markets, ensuring seamless trading.',
		links: [
			{
				id: nanoid(),
				icon: <BsFacebook className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsTwitterX className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsLinkedin className='h-4 w-4' />,
				href: '#',
			},
		],
	},
	{
		id: nanoid(),
		icon: bruce,
		name: 'criswell bruce',
		position: 'marketing specialist',
		text: 'Strategic at orchestrating market initiatives and maximizing profits.',
		links: [
			{
				id: nanoid(),
				icon: <BsFacebook className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsTwitterX className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsLinkedin className='h-4 w-4' />,
				href: '#',
			},
		],
	},
	{
		id: nanoid(),
		icon: brooke,
		name: 'elsa brooks',
		position: 'human resources',
		text: 'Recruiting skilled professionals for currency trading, managing talents in dynamic forex markets.',
		links: [
			{
				id: nanoid(),
				icon: <BsFacebook className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsTwitterX className='h-4 w-4' />,
				href: '#',
			},
			{
				id: nanoid(),
				icon: <BsLinkedin className='h-4 w-4' />,
				href: '#',
			},
		],
	},
];
