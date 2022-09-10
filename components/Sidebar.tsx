import { useContext, useRef } from 'react'
import NavbarStatusContext from '../context/NavbarStatusContext'
import { ic_close } from 'react-icons-kit/md/ic_close'
import * as Scroll from 'react-scroll'
import Link from 'next/link'
import Icon from 'react-icons-kit'

import useClickOutside from '../custom-hooks/useClickOutside'
import { NavbarStatusContextTypes } from '../typings'
import useWindowSize from '../custom-hooks/useWindowSize'

const Sidebar = () => {
	const windowSize = useWindowSize()
	const {
		homeStatus,
		portfolioStatus,
		aboutMeStatus,
		menuClicked,
		setHomeStatus,
		setPortfolioStatus,
		setAboutMeStatus,
		setMenuClicked,
	} = useContext<NavbarStatusContextTypes>(NavbarStatusContext)

	let domNode = useClickOutside(() => {
		setMenuClicked(false)
	})

	const navigation = [
		{
			title: 'HOME',
			linkTo: 'home',
		},
		{
			title: 'ABOUT ME',
			linkTo: 'about-me',
		},
		{
			title: 'PORTFOLIO',
			linkTo: 'portfolio',
		},
	]

	return (
		<>
			<div
				className={`fixed top-0 right-0  mx-auto  w-full h-full transition-all z-50 ease-in-out duration-700 ${
					menuClicked
						? 'bg-gray-700/90   opacity-100  '
						: '  opacity-0   pointer-events-none'
				}`}
			/>
			<div
				className={`z-[100] fixed h-screen w-full sm:w-[28rem] top-0  bg-white transition-all duration-700 p-8 ${
					menuClicked ? 'right-0' : 'right-[-28rem]'
				}`}
				ref={domNode}
			>
				<div className='absolute right-10 hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '>
					<Icon size={windowSize.width < 641 ? 30 : 40} icon={ic_close} />
				</div>

				<h3>sidebar</h3>
				<div>
					{navigation.map((link) => {
						return (
							<Scroll.Link
								to={link.linkTo}
								smooth={true}
								duration={1000}
								key={link.title}
							>
								<div
									className=' group grid justify-items-center hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer '
									key={link.title}
								>
									<h3 className='w-fit '>{link.title}</h3>
								</div>
							</Scroll.Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Sidebar
