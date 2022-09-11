import { useContext } from 'react'
import NavbarStatusContext from '../context/NavbarStatusContext'
import { ic_close } from 'react-icons-kit/md/ic_close'
import * as Scroll from 'react-scroll'
import Icon from 'react-icons-kit'

import useClickOutside from '../custom-hooks/useClickOutside'
import { NavbarStatusContextTypes } from '../typings'
import useWindowSize from '../custom-hooks/useWindowSize'

const Sidebar = () => {
	const windowSize = useWindowSize()
	console.log(windowSize.width)
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
			page: homeStatus.page,
		},
		{
			title: 'ABOUT ME',
			linkTo: 'about-me',
			page: aboutMeStatus.page,
		},
		{
			title: 'PORTFOLIO',
			linkTo: 'portfolio',
			page: portfolioStatus.page,
		},
	]

	const handleCloseSidebar = () => setMenuClicked(false)

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
				className={`z-[100] fixed h-screen w-full sm:w-[28rem] top-0  bg-white transition-all duration-700 px-16 py-10 ${
					menuClicked
						? 'right-0'
						: menuClicked && windowSize.width >= 640
						? 'right-[-28rem]'
						: 'right-[-100%]'
				}`}
				ref={domNode}
			>
				<div className=' grid gap-16 pt-4 '>
					{/* Top plus X */}
					<div className='flex justify-between  items-center'>
						<h3>sidebar</h3>
						<div
							className=' hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300 '
							onClick={handleCloseSidebar}
						>
							<Icon size={windowSize.width < 641 ? 30 : 40} icon={ic_close} />
						</div>
					</div>
					<div className='grid gap-10'>
						{navigation.map((link) => {
							return (
								<Scroll.Link
									to={link.linkTo}
									smooth={true}
									duration={1000}
									key={link.title}
									onClick={handleCloseSidebar}
								>
									<div
										className=' group grid justify-items-start hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer w-fit'
										key={link.title}
									>
										<h3
											className={` w-fit font-bold ${
												windowSize.width < 768 ? 'text-xl' : 'text-2xl'
											} ${link.page && 'text-mainOrange '}`}
										>
											{link.title}
										</h3>
									</div>
								</Scroll.Link>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
