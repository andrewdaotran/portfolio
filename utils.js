import { github } from 'react-icons-kit/fa/github'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'

export const projectPages = [
	{
		title: 'Cancun Deadpool',
		description:
			"React Native mobile application for a childhood friend's bachelor party in Cancun, Mexico. Utilized a Firebase realtime database to allow each user to make their picks and view the leaderboard in real time.",
		images: [],
		technologies: ['React Native', 'Firebase', 'NativewindCSS, Expo'],
		url: '',
		github: 'https://github.com/andrewdaotran/cancun-deadpool-app',
		page: '/',
	},
	{
		title: 'Find My Pet',
		description:
			'Full-stack web application to reunite users to their lost pets, queries PetFinder API to display adoptable pets in the US ',
		images: [
			'/find-my-pet/fmp-1.png',
			'/find-my-pet/fmp-2.png',
			'/find-my-pet/fmp-3.png',
			'/find-my-pet/fmp-4.png',
			'/find-my-pet/fmp-5.png',
		],
		technologies: [
			'NextJS',
			'MongoDB',
			'TypeScript',
			'TailwindCSS',
			'GraphQL',
			'Context API',
			'PetFinder API',
		],
		url: '',
		github: 'https://github.com/andrewdaotran/find-my-pet',
		page: '/',
	},
	{
		title: 'Dungeons and Dragons Player Sheet',
		description:
			'React and Node.js CRUD application that enables users to electronically create and edit dungeons and dragons player sheets for a seamless, and clean gameplay experience',
		images: [
			'/dnd/dnd-1.png',
			'/dnd/dnd-2.png',
			'/dnd/dnd-3.png',
			'/dnd/dnd-4.png',
			'/dnd/dnd-5.png',
		],
		technologies: [
			'ReactJS',
			'MongoDB',
			'Node.js',
			'Redux Toolkit',
			'Material UI',
		],
		url: '',
		github: 'https://github.com/andrewdaotran/dnd-player-sheet',
		page: '/',
	},
	{
		title: 'Photography Blog',
		description:
			'Personal passion project fusing both of my loves in life, photography and coding. Photography blog utilizing React to design the front end and Sanity.io as the headless CMS',
		images: ['/photography_blog.png'],
		technologies: ['NextJS', 'Sanity.io', 'TypeScript', 'TailwindCSS'],
		url: 'https://ndru-web-dev-blog.vercel.app/',
		github: 'https://github.com/andrewdaotran/blog-dev-journey',
		page: '',
	},
	{
		title: 'The District Eye Care Landing Page',
		description:
			'Conducted UX heuristic evaluation to redesign The District Eye Care site with a mobile first approach and focused on readability and accessibility ',
		images: [
			'/district/district-1.png',
			'/district/district-2.png',
			'/district/district-3.png',
			'/district/district-4.png',
		],
		technologies: ['NextJS', 'TailwindCSS'],
		url: 'https://district-eye-landing-page.vercel.app/',
		github: 'https://github.com/andrewdaotran/district-eye-landing-page',
		page: '',
	},
]

export const heroLeftInformation = [
	{
		title: 'BIOGRAPHY',
		content: [
			'Advertiser turned coder who is passionate about learning new technologies. I am learning something new everyday!',
		],
	},
	{
		title: 'CONTACT',
		content: [
			'Orange County, California',
			'andrewdaotran@gmail',
			'Github: @andrewdaotran',
		],
	},
]
export const heroRightInformation = [
	{
		title: 'SPECIALIZATION',
		content: [
			'Full Stack Web Developer specializing in React and TypeScript for front end development while utilizing Node.js, MongoDB, and GraphQL on the backend.',
		],
	},
	{
		title: 'INTERESTS',
		content: [
			'Photography and Stenography',
			'Korean Pop and Dramas',
			'Football and Basketball',
		],
	},
]

export const skills = [
	{
		title: 'React',
		image: '/react_icon.png',
	},
	{
		title: 'TypeScript',
		image: '/typescript_icon.png',
	},
	{
		title: 'Node.js',
		image: '/node_icon.png',
	},
	{
		title: 'MongoDB',
		image: '/mongodb_icon.png',
	},
	{
		title: 'TailwindCSS',
		image: '/tailwind_css_icon.png',
	},
	{
		title: 'GraphQL',
		image: '/graphql_icon.png',
	},
]

export const iconLinks = [
	{
		title: 'linkedIn',
		link: 'https://www.linkedin.com/in/ndru/',
		icon: linkedinSquare,
	},
	{
		title: 'github',
		link: 'https://github.com/andrewdaotran',
		icon: github,
	},
]
