import Image from 'next/image'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { externalLink } from 'react-icons-kit/fa/externalLink'
import { github } from 'react-icons-kit/fa/github'
import { Dispatch, useEffect, useState } from 'react'
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
}

const ProjectSingleSmall = ({ project, shown, setShown }: Props) => {
	const windowSize = useWindowSize()
	const { inView, ref } = useInView({ trackVisibility: false, delay: 100 })

	useEffect(() => {
		if (!shown && inView) {
			setShown(true)
		}
	}, [inView])
	return (
		<div
			className={` ${
				windowSize.width < 450
					? 'h-[100vw] '
					: windowSize.width > 500
					? 'h-[65vw]'
					: 'h-[90vw]'
			}  w-[90vw] sm:w-[90vw] sm:h-[60vw]  shadow-lg   relative mx-auto opacity-0 transition-opacity ease-in duration-[2000ms] ${
				shown && 'visible opacity-100 '
			}`}
			ref={ref}
		>
			<div className='opacity-30'>
				<Image
					src={project.image}
					layout='fill'
					className='object-cover object-top'
				/>
			</div>
			{/* Absolute Description */}
			<div className='absolute p-8 grid gap-6 top-0 bottom-0 my-auto'>
				<div className=''>
					<h4 className='text-sm'>Featured Project</h4>
					<h3 className='font-bold text-2xl'>{project.title}</h3>
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
				<div className='flex gap-6'>
					<Link href={`/`}>
						<a>
							<Icon icon={github} size={25} />
						</a>
					</Link>
					<Link href={`/`}>
						<a>
							<Icon icon={externalLink} size={23} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectSingleSmall
