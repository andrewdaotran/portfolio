import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import Footer from '../components/Footer'
import { useContext, useEffect } from 'react'
import NavbarStatusContext from '../context/NavbarStatusContext'

export default function Home() {
	const {
		homeStatus,
		portfolioStatus,
		aboutMeStatus,
		setHomeStatus,
		setPortfolioStatus,
		setAboutMeStatus,
	} = useContext(NavbarStatusContext)

	useEffect(() => {
		setHomeStatus({ ...homeStatus, page: true })
		setAboutMeStatus({ ...aboutMeStatus, page: false })
		setPortfolioStatus({ ...portfolioStatus, page: false })
	}, [])

	return (
		<>
			<div className='grid gap-16 md:gap-24 lg:gap-32 relative bg-white mb-48'>
				{/* {menuClicked && <Sidebar />} */}
				<Sidebar />
				<Hero />
				<Projects />
				<Skills />
				<Footer />
			</div>
		</>
	)
}
