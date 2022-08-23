import Image from 'next/image'

import { useInView } from 'react-intersection-observer'

const Skills = () => {
	const { inView, ref } = useInView({ trackVisibility: true, delay: 100 })

	const skills = [
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
	console.log(inView)
	return (
		<div className={`border-b border-black mx-4 `}>
			<div className='grid gap-16 md:gap-24 lg:gap-32 w-full pb-16 md:pb-24 lg:pb-32 '>
				<h2 className='text-5xl text-center'>Skills</h2>
				<div
					className={`grid  grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-opacity ease-in duration-[2000ms] ${
						inView ? 'visible opacity-100 ' : 'opacity-0'
					}`}
					ref={ref}
				>
					{skills.map((skill) => {
						return (
							<div className='grid text-center gap-8 '>
								<div className='bg-[rgb(230,230,230)] rounded-full w-fit py-9 px-12 sm:py-12 sm:px-16 md:py-[4.5rem] md:px-24  mx-auto'>
									<div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] relative '>
										<Image
											src={skill.image}
											layout='fill'
											className='object-cover '
										/>
									</div>
								</div>
								<h4 className=''>{skill.title}</h4>
							</div>
						)
					})}
				</div>
				<h3 className='text-xl text-center'>And More...</h3>
			</div>
		</div>
	)
}

export default Skills
