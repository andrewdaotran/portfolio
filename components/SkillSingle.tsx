import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
	skill: {
		title: string
		image: string
	}
}
const SkillSingle = ({ skill }: Props) => {
	const { inView, ref } = useInView({ trackVisibility: true, delay: 100 })

	const [shown, setShown] = useState<boolean>(false)
	useEffect(() => {
		if (!shown && inView) {
			setShown(true)
		}
	}, [inView])
	return (
		<div
			className={`grid text-center gap-8 opacity-0 transition-opacity ease-in duration-[2000ms] ${
				shown && 'visible opacity-100 '
			}`}
			key={skill.title}
			ref={ref}
		>
			<div className='bg-lightGrey rounded-full w-fit py-9 px-12 sm:py-12 sm:px-16 md:py-[4.5rem] md:px-24  mx-auto'>
				<div className='w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] relative '>
					<Image src={skill.image} layout='fill' className='object-cover ' />
				</div>
			</div>
			<h4 className=''>{skill.title}</h4>
		</div>
	)
}

export default SkillSingle
