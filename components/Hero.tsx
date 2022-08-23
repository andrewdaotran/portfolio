import Image from 'next/image'
import React from 'react'

const Hero = () => {
	const leftInformation = [
		{
			title: 'BIOGRAPHY',
			content: [
				'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, temporibus?',
			],
		},
		{
			title: 'CONTACT',
			content: ['Orange County, California', 'andrewdaotran@gmail'],
		},
	]
	return (
		<div className='grid gap-16 md:gap-24 lg:gap-32 border-b border-black pb-16 md:pb-24 lg:pb-32  mx-4'>
			{/* Hero Copy */}
			<div className='text-5xl lg:text-7xl text-center grid gap-6 mt-4 lg:mt-28'>
				<h1>Andrew Tran</h1>
				<h1>Front End React Developer </h1>
				<h1>Based in OC</h1>
			</div>
			<div className='grid grid-cols-4'>
				{/* Image */}
				<div className='w-fit border border-accentGrey mx-auto p-6 md:p-8 lg:p-12 rounded-full col-start-1 col-end-5'>
					<div className='w-[16rem] h-[24rem] md:w-[28rem] md:h-[42rem]  lg:w-[40rem] lg:h-[60rem] relative '>
						<Image
							src={'/portfolio-image.jpeg'}
							layout='fill'
							className='object-cover rounded-full'
						/>
					</div>
				</div>
				{/* Information */}

				{/* Left */}
				<div className='grid gap-12'>
					{leftInformation.map((info) => {
						return (
							<div
								className='grid col-start-1 col-end-2 gap-8'
								key={info.title}
							>
								<h3 className='text-accentGrey'>{info.title}</h3>
								<div className=''>
									{info.content.map((paragraph) => {
										return <p key={paragraph}>{paragraph}</p>
									})}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Hero
