import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Icon } from 'react-icons-kit'
import { externalLink } from 'react-icons-kit/fa/externalLink'
import { github } from 'react-icons-kit/fa/github'
import { useInView } from 'react-intersection-observer'

import useWindowSize from '../custom-hooks/useWindowSize'
import { Project } from '../typings'

interface Props {
	project: Project
	index: number
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
}

const ProjectSingle = ({
	project,
	index,
	setPopupStatus,
	setPopupData,
}: Props) => {
	const windowSize = useWindowSize()
	const [shown, setShown] = useState<boolean>(false)

	const handleOpenProjectPopup = (e) => {
		setPopupStatus(project.title)
		setPopupData(project)
	}

	const { inView, ref } = useInView({ trackVisibility: false, delay: 100 })
	useEffect(() => {
		if (!shown && inView) {
			setShown(true)
		}
	}, [inView, shown])
	return windowSize.width < 640 ? (
		// Small Version
		<div
			className={` ${
				windowSize.width < 450
					? 'h-[100vw] '
					: windowSize.width > 500
					? 'h-[65vw]'
					: 'h-[90vw]'
			}  w-[90vw] sm:w-[90vw] sm:h-[60vw]  shadow-lg   relative mx-auto opacity-0 transition-opacity ease-in duration-[2000ms] cursor-pointer  ${
				shown && 'visible opacity-100 '
			}`}
			ref={ref}
			onClick={handleOpenProjectPopup}
		>
			<div className='opacity-30 '>
				<Image
					src={project.images[0]}
					layout='fill'
					className='object-cover object-top'
				/>
			</div>
			{/* Absolute Description */}
			<div className='absolute p-8 grid gap-6 top-0 bottom-0 my-auto pointer-events-none'>
				<div className=''>
					<h4 className='text-sm '>Featured Project</h4>
					<h3 className='font-bold text-2xl hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300'>
						{project.title}
					</h3>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					totam quisquam dolor, porro sed voluptates.
				</p>
				<div className='flex gap-4 flex-wrap text-xs '>
					{project.technologies.map((technology) => {
						return (
							<p className='' key={technology}>
								{technology}
							</p>
						)
					})}
				</div>
				<div className='flex gap-6 pointer-events-auto'>
					<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '>
						<Link href={`/`}>
							<a target='_blank' rel='noopener noreferrer'>
								<Icon icon={github} size={25} />
							</a>
						</Link>
					</h3>
					<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '>
						<Link href={`/`}>
							<a target='_blank' rel='noopener noreferrer'>
								<Icon icon={externalLink} size={25} />
							</a>
						</Link>
					</h3>
				</div>
			</div>
		</div>
	) : (
		// Large Version
		<div
			className={` grid gap-4 relative mx-auto w-full h-auto px-16 opacity-0 transition-opacity ease-in duration-[2000ms] ${
				shown && 'visible opacity-100 '
			}`}
			ref={ref}
		>
			<div className='relative grid grid-cols-5'>
				{/* Absolute Overlay */}
				<div
					className={`absolute  h-fit w-[60%] lg:w-[50%] z-10 top-0 bottom-0 my-auto grid gap-4 lg:gap-8 ${
						index % 2 === 0 ? 'right-0' : 'left-0'
					} `}
				>
					<div className={`grid ${index % 2 === 0 && 'justify-items-end'}`}>
						<h4 className='text-sm lg:text-lg xl:text-xl'>Featured Project</h4>
						<h3
							className='font-bold text-lg lg:text-2xl xl:text-3xl hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300'
							onClick={handleOpenProjectPopup}
						>
							{project.title}
						</h3>
					</div>

					<div className='bg-lightGrey  p-4 rounded-md'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
							totam quisquam dolor, porro sed voluptates.
						</p>
					</div>
					<div
						className={`flex gap-4 flex-wrap text-xs lg:text-lg xl:text-xl ${
							index % 2 === 0 ? 'justify-end' : 'justify-start'
						}`}
					>
						{project.technologies.map((technology) => {
							return (
								<p className='' key={technology}>
									{technology}
								</p>
							)
						})}
					</div>
					<div
						className={`flex gap-6 ${
							index % 2 === 0 ? 'justify-end' : 'justify-start'
						}`}
					>
						<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '>
							<Link href={`/`}>
								<a>
									<Icon
										icon={github}
										size={
											windowSize.width < 1024
												? 25
												: windowSize.width < 1280
												? 30
												: 35
										}
									/>
								</a>
							</Link>
						</h3>
						<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '>
							<Link href={`/`}>
								<a>
									<Icon
										icon={externalLink}
										size={
											windowSize.width < 1024
												? 25
												: windowSize.width < 1280
												? 30
												: 35
										}
									/>
								</a>
							</Link>
						</h3>
					</div>
				</div>
				{/* <Link href={'/'}> */}
				<div
					className={`opacity-50 hover:opacity-100 transition-opacity ease-in duration-[300ms] ${
						index % 2 === 0 ? 'col-start-1 col-end-4' : 'col-start-3 col-end-6'
					}   w-[100%] h-[33vw] max-h-[30rem] relative rounded-md cursor-pointer`}
				>
					<Image
						src={project.images[0]}
						layout='fill'
						className='object-cover object-top rounded-md'
						onClick={handleOpenProjectPopup}
					/>
				</div>
				{/* </Link> */}
			</div>
			{/*Absolute Overlay End */}
		</div>
	)
}

export default ProjectSingle
