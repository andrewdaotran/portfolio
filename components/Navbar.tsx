import { MenuAlt4Icon } from '@heroicons/react/outline'
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/fa/github'
// import { navicon } from 'react-icons-kit/fa/navicon'
import { menu } from 'react-icons-kit/entypo/menu'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'
import { circle } from 'react-icons-kit/fa/circle'
import { useContext, useState } from 'react'

import useWindowSize from '../custom-hooks/useWindowSize'
import NavbarStatusContext from '../context/navbarStatusContext'
import { NavbarStatusContextTypes } from '../typings'
import Link from 'next/link'

interface NavStatus {
	page: boolean
	status: boolean
}

const Navbar = () => {
	const {
		homeStatus,
		portfolioStatus,
		aboutMeStatus,
		setHomeStatus,
		setPortfolioStatus,
		setAboutMeStatus,
	} = useContext<NavbarStatusContextTypes>(NavbarStatusContext)

	const [menuClicked, setMenuClicked] = useState<boolean>(false)

	const windowSize = useWindowSize()
	return (
		<div className=' max-w-7xl mx-auto'>
			<div
				className={` ${
					windowSize.width < 1024 ? 'py-[3.75rem]' : 'py-14'
				}  px-4 grid grid-cols-3  items-center `}
			>
				{windowSize.width < 1024 ? (
					<h3 className='h-10 w-10 col-start-1 col-end-2 hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer '>
						<Icon icon={menu} size={30} />
					</h3>
				) : (
					<div className='flex col-start-1 col-end-2 justify-between w-[20rem] mt-[1.75rem]'>
						<div
							className=' group grid justify-items-center hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer '
							onMouseEnter={() =>
								setHomeStatus({ ...homeStatus, status: true })
							}
							onMouseLeave={() => {
								if (!homeStatus.page)
									setHomeStatus({ ...homeStatus, status: false })
							}}
						>
							<h3 className='w-fit '>HOME</h3>

							<Icon
								icon={circle}
								size={6}
								className={`hidden opacity-0 transition-opacity ease-in-out duration-300 group-hover:visible group-hover:opacity-100`}
							/>
						</div>
						<div
							className='group grid justify-items-center hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer '
							onMouseEnter={() =>
								setPortfolioStatus({ ...portfolioStatus, status: true })
							}
							onMouseLeave={() => {
								if (!portfolioStatus.page)
									setPortfolioStatus({ ...portfolioStatus, status: false })
							}}
						>
							<h3 className='w-fit '>PORTFOLIO</h3>
							<Icon
								icon={circle}
								size={6}
								className={`hidden opacity-0 transition-opacity ease-in-out duration-300 group-hover:visible group-hover:opacity-100`}
							/>
						</div>
						<div
							className='group grid justify-items-center hover:text-mainOrange transition-colors ease-in-out duration-300 cursor-pointer'
							onMouseEnter={() =>
								setAboutMeStatus({ ...aboutMeStatus, status: true })
							}
							onMouseLeave={() => {
								if (!portfolioStatus.page)
									setAboutMeStatus({ ...aboutMeStatus, status: false })
							}}
						>
							<h3 className='w-fit '>ABOUT ME</h3>
							<Icon
								icon={circle}
								size={6}
								className={`hidden opacity-0 transition-opacity ease-in-out duration-300 group-hover:visible group-hover:opacity-100`}
							/>
						</div>
					</div>
				)}

				<h3 className='  text-center col-start-2 col-end-3 '>ndru</h3>
				{windowSize.width > 767 && (
					<div className='flex gap-8 col-start-3 col-end-4  w-fit justify-self-end'>
						<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300'>
							<Link href={'https://www.linkedin.com/in/ndru/'}>
								<a target='_blank' rel='noopener noreferrer'>
									<Icon icon={linkedinSquare} size={25} />
								</a>
							</Link>
						</h3>
						<h3 className='hover:text-mainOrange cursor-pointer transition-colors ease-in-out duration-300'>
							<Link href={'https://github.com/andrewdaotran'}>
								<a target='_blank' rel='noopener noreferrer'>
									<Icon icon={github} size={25} />
								</a>
							</Link>
						</h3>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
