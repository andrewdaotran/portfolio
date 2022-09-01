import Image from 'next/image'
import useWindowSize from '../custom-hooks/useWindowSize'
import BackgroundSingle from './BackgroundSingle'

const Hero = () => {
	const windowSize = useWindowSize()

	const leftInformation = [
		{
			title: 'BIOGRAPHY',
			content: [
				'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, temporibus? more words please',
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
			<div className='grid grid-cols-12 gap-y-16 gap-x-2 sm:gap-x-4 md:gap-x-8 xl:gap-x-10 xl:gap-y-0'>
				{/* Image */}
				<div className='w-fit border border-accentGrey mx-auto p-6 sm:p-11   rounded-full col-start-1 col-end-13 xl:col-start-4 xl:col-end-10 '>
					<div className='w-[76vw] h-[114vw] md:w-[38rem] md:h-[57rem] xl:w-[32rem] xl:h-[48rem] max-w-[32rem]  max-h-[48rem] relative '>
						<Image
							src={'/portfolio-image.jpeg'}
							layout='fill'
							className='object-cover rounded-full'
						/>
					</div>
				</div>
				{/* Information */}

				{/* Left */}
				<div className='grid gap-12 sm:gap-24 col-start-1 col-end-7   xl:col-end-4 xl:row-start-1 items-center '>
					{leftInformation.map((info) => {
						return (
							<BackgroundSingle info={info} key={info.title} isLeft={true} />
						)
					})}
				</div>
				{/* Right */}
				<div className='grid gap-12 sm:gap-24 col-start-7 col-end-13 xl:col-start-10 items-center '>
					{leftInformation.map((info) => {
						return (
							<BackgroundSingle info={info} isLeft={false} key={info.title} />
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Hero
