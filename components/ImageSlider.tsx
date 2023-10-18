import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-icons-kit'
import { chevronLeft } from 'react-icons-kit/fa/chevronLeft'
import { chevronRight } from 'react-icons-kit/fa/chevronRight'
import { ic_circle } from 'react-icons-kit/md/ic_circle'

import ProjectPopupContext from '../context/ProjectPopupContext'
import { ProjectPopupContextTypes } from '../typings'

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

	// Reset currentImage when close ProjectPopup
	useEffect(() => {
		if (popupStatus === false) {
			setTimeout(() => {
				setCurrentImage(0)
			}, 700)
		}
	}, [popupStatus])

	return (
		<div className=' grid grid-cols-5 grid-rows-6 md:flex items-center  gap-2 pt-4 pb-10  md:py-9 relative justify-items-center '>
			<Icon
				icon={chevronLeft}
				size={30}
				// onClick={closePopup}
				className={`cursor-pointer w-fit h-fit bg-gray-300  p-3 col-start-2 col-end-3 ${
					popupData.images.length === 1 &&
					'opacity-50 cursor-default text-gray-400'
				}`}
				onClick={handleDecrementCurrentImage}
			/>

			<div className='w-[80vw] h-[60vw] md:w-[35rem] md:h-[28rem] relative rounded-md transition-all ease-in-out duration-500 flex col-start-1 col-end-6 row-start-1 row-end-6 '>
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
				className={`cursor-pointer t w-fit h-fit  bg-gray-300 p-3 col-start-4 col-end-5  ${
					popupData.images.length === 1 &&
					'opacity-50 cursor-default text-gray-400'
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
