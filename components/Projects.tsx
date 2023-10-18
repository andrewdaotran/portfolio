import ProjectPopup from './ProjectPopup'
import ProjectSingle from './ProjectSingle'
import { projectPages } from '../utils'

const Projects = () => {
	// delete, just for deployment
	return (
		<div className={`border-b border-black mx-4 relative bg-white `}>
			<ProjectPopup />
			{/* {popupStatus && <ProjectPopup />} */}
			<div className='grid gap-16 md:gap-24 lg:gap-32 w-full pb-16 md:pb-24 lg:pb-32 '>
				<h2 className='text-5xl text-center pt-16 mt-[-4rem]' id='portfolio'>
					Projects
				</h2>
				{projectPages.map((project, index) => {
					return (
						<ProjectSingle
							project={project}
							key={project.title}
							index={index}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
