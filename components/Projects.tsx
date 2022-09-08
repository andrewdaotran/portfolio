import { useContext, useState } from 'react'

import ProjectPopup from './ProjectPopup'
import ProjectSingle from './ProjectSingle'
import { projectPages } from '../utils'
import ProjectPopupContext from '../context/ProjectPopupContext'
import { ProjectPopupContextTypes } from '../typings'

const Projects = () => {
	const { popupStatus, setPopupStatus, popupData, setPopupData } =
		useContext<ProjectPopupContextTypes>(ProjectPopupContext)
	// console.log(popupData)
	return (
		<div className={`border-b border-black mx-4 relative bg-white`}>
			{popupStatus && <ProjectPopup />}
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
							setPopupStatus={setPopupStatus}
							setPopupData={setPopupData}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
