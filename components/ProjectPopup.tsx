import React from 'react'
import ImageSlider from './ImageSlider'

const ProjectPopup = () => {
	return (
		<div className='z-50 fixed top-0 right-0  mx-auto bg-gray-700 bg-gray-700/50 w-full h-full'>
			<div className='fixed grid  h-[40rem] w-[45rem] border border-red-500  top-[41%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white '>
				<ImageSlider />
			</div>
		</div>
	)
}

export default ProjectPopup

// top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%]
