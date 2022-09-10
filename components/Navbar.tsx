import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/entypo/menu'
import { circle } from 'react-icons-kit/fa/circle'
import { useContext, useState } from 'react'
import * as Scroll from 'react-scroll'
import Link from 'next/link'

import useWindowSize from '../custom-hooks/useWindowSize'
import NavbarStatusContext from '../context/NavbarStatusContext'
import { NavbarStatusContextTypes } from '../typings'
import { iconLinks } from '../utils'

const Navbar = ({ children }) => {
	const { menuClicked, navigation, setMenuClicked } =
		useContext<NavbarStatusContextTypes>(NavbarStatusContext)

	const handleMenuClicked = () => {
		setMenuClicked(!menuClicked)
	}

	const windowSize = useWindowSize()
	return (
		<>
			<div
				className={` z-50 ${
					windowSize.width < 1024 ? 'py-[3.75rem]' : 'py-14'
				}  px-4 grid grid-cols-3  items-center`}
			>
				{/* Small Screen */}
				{windowSize.width < 1024 ? (
					<h3
						className={` w-fit col-start-1 col-end-2 hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer z-50 ${
							menuClicked
								? 'rotate-90 transition-transform duration-500'
								: 'transition-transform duration-500'
						}`}
						onClick={handleMenuClicked}
					>
						<Icon icon={menu} size={40} />
					</h3>
				) : (
					// Large Screen
					<div className='flex col-start-1 col-end-2 justify-between w-[20rem] mt-[1.75rem] z-20'>
						{navigation.map((link) => {
							return (
								<Scroll.Link
									to={link.linkTo}
									smooth={true}
									duration={1000}
									key={link.title}
								>
									<div
										className={` group grid justify-items-center hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer ${
											link.page && 'text-mainOrange'
										}`}
										key={link.title}
									>
										<h3 className={`w-fit `}>{link.title}</h3>

										<Icon
											icon={circle}
											size={6}
											className={`hidden transition-opacity ease-in-out duration-300 group-hover:visible group-hover:opacity-100 ${
												link.page || 'opacity-0 '
											}`}
										/>
									</div>
								</Scroll.Link>
							)
						})}
					</div>
				)}
				<h3 className='  text-center col-start-2 col-end-3 z-50'>ndru</h3>
				{windowSize.width > 767 && (
					<div className='flex gap-8 col-start-3 col-end-4  w-fit justify-self-end'>
						{iconLinks.map((link) => {
							return (
								<h3
									className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 z-50'
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
				)}
			</div>

			{children}
		</>
	)
}

export default Navbar
