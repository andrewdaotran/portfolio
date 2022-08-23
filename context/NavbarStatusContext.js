import { createContext, useState } from 'react'

const NavbarStatusContext = createContext()

export const NavbarStatusProvider = ({ children }) => {
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
				setHomeStatus,
				setPortfolioStatus,
				setAboutMeStatus,
			}}
		>
			{children}
		</NavbarStatusContext.Provider>
	)
}

export default NavbarStatusContext
