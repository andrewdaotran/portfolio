import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Icon from 'react-icons-kit'
import { chevronLeft } from 'react-icons-kit/fa/chevronLeft'
import { chevronRight } from 'react-icons-kit/fa/chevronRight'
import { ic_circle } from 'react-icons-kit/md/ic_circle'

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
		setCurrentImage(
			currentImage === 0 ? popupData.images.length - 1 : currentImage - 1
		)
	}

	const handleIncrementCurrentImage = () => {
		if (popupData.images.length === 1) return
		setCurrentImage(
			currentImage === popupData.images.length - 1 ? 0 : currentImage + 1
		)
	}

	return (
		<div className='flex items-center gap-2 py-9 relative'>
			<Icon
				icon={chevronLeft}
				size={30}
				// onClick={closePopup}
				className={`cursor-pointer w-fit h-fit bg-gray-300 p-3 ${
					popupData.images.length === 1 && 'opacity-50 cursor-default'
				}`}
				onClick={handleDecrementCurrentImage}
			/>

			<div className='w-[35rem] h-[28rem] relative rounded-md transition-all ease-in-out duration-500 flex'>
				<Image
					src={popupData.images[currentImage] || '/No_image_available.svg.png'}
					layout='fill'
					className={`object-cover object-top rounded-md transition-all ease-in-out duration-500`}
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
			{/* Circle buttons under image */}
			{popupData.images.length > 1 && (
				<div className='absolute flex bottom-1 translate-x-[-50%] left-[50%] z-[110] gap-4'>
					{popupData.images.map((image, index) => {
						return (
							<div
								className={`cursor-pointer transition-all ease-in-out duration-500 ${
									currentImage === index ? 'text-mainOrange' : 'text-gray-300'
								}`}
								key={image}
								onClick={() => setCurrentImage(index)}
							>
								<Icon size={12} icon={ic_circle} />
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default ImageSlider
