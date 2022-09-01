import useWindowSize from '../custom-hooks/useWindowSize'
import ProjectSingleLarge from './ProjectSingleLarge'
import ProjectSingleSmall from './ProjectSingleSmall'
import { useState } from 'react'

const Projects = () => {
	const windowSize = useWindowSize()
	const [shown, setShown] = useState<boolean>(false)
	const projects = [
		{
			title: 'Find My Pet',
			github: '/',
			link: '/',
			image: '/find_my_pet.png',
			description: '',
			technologies: [
				'NextJS',
				'MongoDB',
				'TypeScript',
				'TailwindCSS',
				'GraphQL',
				'Context API',
				'PetFinder API',
			],
		},
		{
			title: 'Dungeons and Dragons Player Sheet',
			github: '/',
			link: '/',
			image: '/dungeons_and_dragons.png',
			description: '',
			technologies: [
				'ReactJS',
				'MongoDB',
				'Node.js',
				'Redux Toolkit',
				'Material UI',
			],
		},
		{
			title: 'Photography Blog',
			github: '/',
			link: '/',
			image: '/photography_blog.png',
			description: '',
			technologies: ['NextJS', 'Sanity.io', 'TypeScript', 'TailwindCSS'],
		},
		{
			title: 'The District Eye Care Landing Page',
			github: '/',
			link: '/',
			image: '/district_eye.png',
			description: '',
			technologies: ['NextJS', 'TailwindCSS'],
		},
	]
	return (
		<div className={`border-b border-black mx-4 `}>
			<div className='grid gap-16 md:gap-24 lg:gap-32 w-full pb-16 md:pb-24 lg:pb-32 '>
				<h2 className='text-5xl text-center'>Projects</h2>
				{projects.map((project, index) => {
					return windowSize.width < 640 ? (
						<ProjectSingleSmall
							project={project}
							key={project.title}
							shown={shown}
							setShown={setShown}
						/>
					) : (
						<ProjectSingleLarge
							project={project}
							key={project.title}
							shown={shown}
							setShown={setShown}
							index={index}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
