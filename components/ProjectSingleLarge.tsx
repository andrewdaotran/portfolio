import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, useEffect, useState } from 'react'
import { Icon } from 'react-icons-kit'
import { externalLink } from 'react-icons-kit/fa/externalLink'
import { github } from 'react-icons-kit/fa/github'
import { useInView } from 'react-intersection-observer'

import useWindowSize from '../custom-hooks/useWindowSize'

interface Props {
	project: {
		title: string
		github: string
		link: string
		image: string
		description: string
		technologies: string[]
	}
	shown: boolean
	setShown: Dispatch<React.SetStateAction<boolean>>
	index: number
}

const ProjectSingleLarge = ({ project, shown, setShown, index }: Props) => {
	const windowSize = useWindowSize()

	const { inView, ref } = useInView({ trackVisibility: false, delay: 100 })
	useEffect(() => {
		if (!shown && inView) {
			setShown(true)
		}
	}, [inView, shown])
	return (
		<div
			className={` grid gap-4 relative mx-auto w-full h-auto px-16 opacity-0 transition-opacity ease-in duration-[2000ms] ${
				shown && 'visible opacity-100 '
			}`}
			ref={ref}
		>
			<div className={`grid ${index % 2 === 0 && 'justify-items-end'}`}>
				<h4 className='text-sm lg:text-lg xl:text-xl'>Featured Project</h4>
				<h3 className='font-bold text-lg lg:text-2xl xl:text-3xl'>
					{project.title}
				</h3>
			</div>
			<div className='relative grid grid-cols-5 '>
				<div
					className={`absolute bg-lightGrey h-fit w-[60%] z-10 top-0 bottom-0 ${
						index % 2 === 0 ? 'right-0' : 'left-0'
					} my-auto p-4 rounded-md`}
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
						totam quisquam dolor, porro sed voluptates.
					</p>
				</div>
				{/* <Link href={'/'}> */}
				<div
					className={`opacity-50 hover:opacity-100 transition-opacity ease-in duration-[300ms] ${
						index % 2 === 0 ? 'col-start-1 col-end-4' : 'col-start-3 col-end-6'
					}   w-[100%] h-[33vw] max-h-[30rem] relative rounded-md cursor-pointer`}
				>
					<Image
						src={project.image}
						layout='fill'
						className='object-cover object-top rounded-md'
					/>
				</div>
				{/* </Link> */}
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
				<Link href={`/`}>
					<a>
						<Icon
							icon={github}
							size={
								windowSize.width < 1024 ? 25 : windowSize.width < 1280 ? 30 : 35
							}
						/>
					</a>
				</Link>
				<Link href={`/`}>
					<a>
						<Icon
							icon={externalLink}
							size={
								windowSize.width < 1024 ? 25 : windowSize.width < 1280 ? 30 : 35
							}
						/>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default ProjectSingleLarge
