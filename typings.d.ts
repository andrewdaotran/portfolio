export interface NavbarStatusContextTypes {
	homeStatus: {
		page: boolean
		status: boolean
	}
	portfolioStatus: {
		page: boolean
		status: boolean
	}
	aboutMeStatus: {
		page: boolean
		status: boolean
	}
	setHomeStatus: Dispatch<
		SetStateAction<{
			page: boolean
			status: boolean
		}>
	>
	setPortfolioStatus: Dispatch<
		SetStateAction<{
			page: boolean
			status: boolean
		}>
	>
	setAboutMeStatus: Dispatch<
		SetStateAction<{
			page: boolean
			status: boolean
		}>
	>
}
