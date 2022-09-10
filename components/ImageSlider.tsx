import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Icon from 'react-icons-kit'
import { chevronLeft } from 'react-icons-kit/fa/chevronLeft'
import { chevronRight } from 'react-icons-kit/fa/chevronRight'

import ProjectPopupContext from '../context/ProjectPopupContext'
import { Project, ProjectPopupContextTypes } from '../typings'

interface Props {
	project: Project
}

const ImageSlider = () => {
	const [currentImage, setCurrentImage] = useState<number>(0)
	const { popupStatus, setPopupStatus, popupData, setPopupData, closePopup } =
		useContext<ProjectPopupContextTypes>(ProjectPopupContext)

	const handleDecrementCurrentImage = () => {
		if (popupData.images.length === 1) return
		if (currentImage === 0) {
			setCurrentImage(popupData.images.length - 1)
		}
		setCurrentImage(currentImage - 1)
	}

	const handleIncrementCurrentImage = () => {
		if (popupData.images.length === 1) return
		if (currentImage === popupData.images.length - 1) {
			setCurrentImage(0)
		}
		setCurrentImage(currentImage + 1)
	}

	return (
		<div className='flex items-center gap-4 '>
			<Icon
				icon={chevronLeft}
				size={30}
				// onClick={closePopup}
				className={`cursor-pointer w-fit h-fit bg-gray-300 p-3 ${
					popupData.images.length === 1 && 'opacity-50 cursor-default'
				}`}
				onClick={handleDecrementCurrentImage}
			/>

			<div className='w-[60vw] h-[50vw] relative rounded-md'>
				<Image
					src={popupData.images[currentImage] || '/No_image_available.svg.png'}
					layout='fill'
					className='object-cover object-top rounded-md'
				/>
			</div>
			<Icon
				icon={chevronRight}
				size={30}
				// onClick={closePopup}
				className={`cursor-pointer t w-fit h-fit bg-gray-300 p-3 ${
					popupData.images.length === 1 && 'opacity-50 cursor-default'
				}`}
				onClick={handleIncrementCurrentImage}
			/>
		</div>
	)
}

export default ImageSlider
