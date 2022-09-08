import React, { Dispatch, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
	info: {
		title: string
		content: string[]
	}
	isLeft: boolean
	// shown: boolean
	// setShown: Dispatch<React.SetStateAction<boolean>>
}

const BackgroundSingle = ({ info, isLeft }: Props) => {
	const [shown, setShown] = useState<boolean>(false)
	const { inView, ref } = useInView({ trackVisibility: false, delay: 100 })
	useEffect(() => {
		if (!shown && inView) {
			setShown(true)
		}
	}, [inView, shown])
	return (
		<div
			className={`grid col-start-1 col-end-2 gap-8 ${
				isLeft ? 'justify-items-start' : 'justify-items-end'
			}  h-fit opacity-0 transition-opacity ease-in duration-[2000ms] ${
				shown && 'visible opacity-100 '
			}`}
			ref={ref}
		>
			<h3
				className={`${
					isLeft ? 'text-start' : 'text-end'
				} text-accentGrey text-sm tracking-wider`}
			>
				{info.title}
			</h3>
			<div className={`${isLeft ? 'text-start' : 'text-end'}`}>
				{info.content.map((paragraph) => {
					return (
						<p key={paragraph} className={`text-xl tracking-wide leading-10`}>
							{paragraph}
						</p>
					)
				})}
			</div>
		</div>
	)
}

export default BackgroundSingle
