import Link from 'next/link'
import Icon from 'react-icons-kit'

import { iconLinks } from '../utils'

const Footer = () => {
	return (
		<div className=' h-48  fixed px-4 bottom-0  left-[50%] translate-x-[-50%] grid  justify-items-center items-center -z-20'>
			<h2 className='tracking-wider'>andrewdaotran@gmail.com</h2>
			<div className='flex gap-8 w-fit '>
				{iconLinks.map((link) => {
					return (
						<h3
							className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300  pointer-events-auto'
							key={link.title}
						>
							<Link href={link.link}>
								<a target='_blank' rel='noopener noreferrer'>
									<Icon icon={link.icon} size={25} />
								</a>
							</Link>
						</h3>
					)
				})}
			</div>
		</div>
	)
}

export default Footer

//  text-center bottom-0 h-64 -z-20 border border-red-500 max-w-7xl
