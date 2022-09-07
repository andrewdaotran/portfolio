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

export interface ProjectPopupContextTypes {
	popupStatus: string
	setPopupStatus: Dispatch<SetStateAction<string>>
	popupData: Project
	setPopupData: Dispatch<
		SetStateAction<{
			title: string
			description: string
			images: any[]
			technologies: any[]
			url: string
			github: string
		}>
	>
	closePopup: () => void
}

export interface Project {
	title: string
	description: string
	technologies: string[]
	images: string[]
	url: string
	github: string
}
