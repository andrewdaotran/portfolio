import SkillSingle from './SkillSingle'
import { skills } from '../utils'

const Skills = () => {
	return (
		// border-b border-black
		<div className={` mx-4 bg-white border-b border-black`}>
			{/* pb-16 md:pb-24 lg:pb-32 */}
			<div className='grid gap-16 md:gap-24 lg:gap-32 w-full pb-12 '>
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
