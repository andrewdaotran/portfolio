import React, { useContext } from 'react'
import Icon from 'react-icons-kit'
import { externalLink } from 'react-icons-kit/fa/externalLink'

import ProjectPopupContext from '../context/ProjectPopupContext'
import { ProjectPopupContextTypes } from '../typings'

const ProjectPopupDescription = () => {
	const { popupData } =
		useContext<ProjectPopupContextTypes>(ProjectPopupContext)
	return (
		<div className='flex flex-col h-[15rem]  w-full p-6  gap-1 '>
			<h3 className='text-2xl font-bold tracking-wide'>{popupData.title}</h3>
			<div className='flex gap-2'>
				{popupData.technologies.map((technology, index) => {
					return (
						<>
							<h4 className='text-gray-400 text-sm'>
								{technology}{' '}
								<span className='pl-2'>
									{index !== popupData.technologies.length - 1 ? '|' : ''}
								</span>
							</h4>
						</>
					)
				})}
			</div>
			<div className='border-t my-2 mr-10' />
			<p className='text-sm tracking-wide leading-relaxed'>
				{popupData.description}
			</p>
			<button className=' text-sm w-fit px-4 py-2 flex justify-center items-center gap-3 bg-mainOrange  border-mainOrange border text-white mt-4 hover:text-black  hover:bg-white transition-colors  ease-in-out duration-300 cursor-pointer tracking-wide '>
				<Icon size={15} icon={externalLink} />
				VIEW SITE
			</button>
		</div>
	)
}

export default ProjectPopupDescription
