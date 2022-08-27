import SkillSingle from './SkillSingle'

const Skills = () => {
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
	return (
		<div className={`border-b border-black mx-4 `}>
			<div className='grid gap-16 md:gap-24 lg:gap-32 w-full pb-16 md:pb-24 lg:pb-32 '>
				<h2 className='text-5xl text-center'>Skills</h2>
				<div className={`grid  grid-cols-2 lg:grid-cols-3 gap-8 `}>
					{skills.map((skill) => {
						return <SkillSingle skill={skill} key={skill.title} />
					})}
				</div>
				<h3 className='text-xl text-center'>And More...</h3>
			</div>
		</div>
	)
}

export default Skills
