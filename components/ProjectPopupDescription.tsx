import Link from 'next/link'
import React, { Fragment, useContext } from 'react'
import Icon from 'react-icons-kit'
import { externalLink } from 'react-icons-kit/fa/externalLink'

import ProjectPopupContext from '../context/ProjectPopupContext'
import useWindowSize from '../custom-hooks/useWindowSize'
import { ProjectPopupContextTypes } from '../typings'

const ProjectPopupDescription = () => {
	const { popupData, closePopup } =
		useContext<ProjectPopupContextTypes>(ProjectPopupContext)

	const windowSize = useWindowSize()
	return (
		<div className='flex flex-col h-fit w-[95vw] md:h-[15rem]  md:w-full p-6  gap-1 bg-white '>
			<h3 className='text-2xl font-bold tracking-wide'>{popupData.title}</h3>
			<div className='flex gap-2 flex-wrap'>
				{popupData.technologies.map((technology, index) => {
					return (
						<Fragment key={technology}>
							<h4 className='text-gray-400 text-sm'>
								{technology}{' '}
								<span className='pl-2'>
									{index !== popupData.technologies.length - 1 ? '|' : ''}
								</span>
							</h4>
						</Fragment>
					)
				})}
			</div>
			<div className='border-t my-2 mr-10' />
			{windowSize.height > 730 && (
				<p className='text-sm tracking-wide leading-relaxed'>
					{popupData.description}
				</p>
			)}

			<div className='flex gap-4'>
				{popupData.url && (
					<button className=' text-sm w-fit px-4 py-2 flex justify-center items-center gap-3 bg-mainOrange  border-mainOrange border text-white mt-4 hover:text-black  hover:bg-white transition-colors  ease-in-out duration-300 cursor-pointer tracking-wide'>
						<Icon size={15} icon={externalLink} />
						VIEW SITE
					</button>
				)}

				<Link href={popupData.page}>
					<button
						className=' text-sm w-fit px-4 py-2 flex justify-center items-center gap-3 bg-accentGrey  border-accentGrey border text-black mt-4  hover:border-accentGrey hover:bg-white transition-colors  ease-in-out duration-300 cursor-pointer tracking-wide '
						onClick={closePopup}
					>
						<Icon size={15} icon={externalLink} />
						LEARN MORE
					</button>
				</Link>
			</div>
		</div>
	)
}

export default ProjectPopupDescription
