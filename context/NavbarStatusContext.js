import { createContext, useState } from 'react'

const NavbarStatusContext = createContext()

export const NavbarStatusProvider = ({ children }) => {
	const [menuClicked, setMenuClicked] = useState(false)
	const [homeStatus, setHomeStatus] = useState({
		page: false,
		title: 'HOME',
	})

	const [portfolioStatus, setPortfolioStatus] = useState({
		page: false,
		title: 'PORTFOLIO',
	})

	const [aboutMeStatus, setAboutMeStatus] = useState({
		page: false,
		title: 'ABOUT ME',
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

	return (
		<NavbarStatusContext.Provider
			value={{
				navigation,
				homeStatus,
				portfolioStatus,
				aboutMeStatus,
				menuClicked,
				setHomeStatus,
				setPortfolioStatus,
				setAboutMeStatus,
				setMenuClicked,
			}}
		>
			{children}
		</NavbarStatusContext.Provider>
	)
}

export default NavbarStatusContext
