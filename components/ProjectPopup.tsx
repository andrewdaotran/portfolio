import React, { Dispatch, SetStateAction, useContext } from 'react'
import { Icon } from 'react-icons-kit'
import { close } from 'react-icons-kit/fa/close'

import ProjectPopupContext from '../context/ProjectPopupContext'
import { Project, ProjectPopupContextTypes } from '../typings'
import ImageSlider from './ImageSlider'

interface Props {
	setPopupStatus: Dispatch<SetStateAction<string>>
	setPopupData: Dispatch<
		SetStateAction<{
			title: string
			description: string
			images: any[]
			technologies: any[]
			url: string
			github: string
		}>
	>
	popupData: Project
}

const ProjectPopup = () => {
	const { popupStatus, setPopupStatus, popupData, setPopupData, closePopup } =
		useContext<ProjectPopupContextTypes>(ProjectPopupContext)

	return (
		<div className='z-50 fixed top-0 right-0  mx-auto bg-gray-700 bg-gray-700/50 w-full h-full'>
			<div className='fixed grid  h-[40rem] w-[45rem] border border-red-500  top-[41%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white items-start justify-items-center'>
				<Icon
					icon={close}
					size={30}
					onClick={closePopup}
					className={`hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 w-fit h-fit absolute top-10 right-10`}
				/>
				<ImageSlider />
			</div>
		</div>
	)
}

export default ProjectPopup

// top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%]
