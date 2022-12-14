import React, { Dispatch, SetStateAction, useContext, useRef } from 'react'
import { Icon } from 'react-icons-kit'
import { ic_close } from 'react-icons-kit/md/ic_close'

import useClickOutside from '../custom-hooks/useClickOutside'
import ProjectPopupContext from '../context/ProjectPopupContext'
import { Project, ProjectPopupContextTypes } from '../typings'
import ImageSlider from './ImageSlider'
import ProjectPopupDescription from './ProjectPopupDescription'
import useWindowSize from '../custom-hooks/useWindowSize'

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

	let domNode = useClickOutside(() => {
		if (popupStatus) closePopup()
	})

	return (
		<>
			{/* Low Opacity Background */}
			<div
				className={`z-50 fixed top-0 right-0  mx-auto  w-full h-full transition-all ease-in-out duration-700 ${
					popupStatus
						? 'bg-gray-700/50 opacity-100'
						: ' opacity-0 pointer-events-none'
				}`}
			/>
			{/* Background of Popup */}
			<div
				className={` fixed grid h-fit w-[95vw] md:h-[47rem] md:w-[44.5rem] top-2 sm:top-[41%] sm:translate-y-[-50%] left-[50%] translate-x-[-50%] bg-gray-700 items-start justify-items-center z-[100] transition-all ease-in-out duration-700  ${
					popupStatus
						? ' opacity-100'
						: ' opacity-0 pointer-events-none duration-0'
				}`}
				ref={domNode}
			>
				<Icon
					icon={ic_close}
					size={40}
					onClick={closePopup}
					className={`hover:text-mainOrange border border-accentGrey rounded-full bg-accentGrey  cursor-pointer transition-colors ease-in-out duration-300 w-fit h-fit absolute top-6 right-4 z-20`}
				/>
				<ImageSlider />
				<ProjectPopupDescription />
			</div>
		</>
	)
}

export default ProjectPopup

// top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%]
