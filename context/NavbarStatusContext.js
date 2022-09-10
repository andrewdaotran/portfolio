import { createContext, useState } from 'react'

const NavbarStatusContext = createContext()

export const NavbarStatusProvider = ({ children }) => {
	const [menuClicked, setMenuClicked] = useState(false)
	const [homeStatus, setHomeStatus] = useState({
		page: false,
		status: false,
	})

	const [portfolioStatus, setPortfolioStatus] = useState({
		page: false,
		status: false,
	})

	const [aboutMeStatus, setAboutMeStatus] = useState({
		page: false,
		status: false,
	})

	return (
		<NavbarStatusContext.Provider
			value={{
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
