import { Dispatch, SetStateAction } from 'react'

export interface NavbarStatusContextTypes {
	navigation: {
		title: string
		linkTo: string
		page: boolean
	}[]

	homeStatus: {
		page: boolean
		title: string
	}
	portfolioStatus: {
		page: boolean
		title: string
	}
	aboutMeStatus: {
		page: boolean
		title: string
	}
	menuClicked: boolean
	setHomeStatus: Dispatch<
		SetStateAction<{
			page: boolean
			title: string
		}>
	>
	setPortfolioStatus: Dispatch<
		SetStateAction<{
			page: boolean
			title: string
		}>
	>
	setAboutMeStatus: Dispatch<
		SetStateAction<{
			page: boolean
			title: string
		}>
	>
	setMenuClicked: Dispatch<SetStateAction<boolean>>
}

export interface ProjectPopupContextTypes {
	popupStatus: boolean
	setPopupStatus: Dispatch<SetStateAction<boolean>>
	popupData: Project
	setPopupData: Dispatch<
		SetStateAction<{
			title: string
			description: string
			images: any[]
			technologies: any[]
			url: string
			github: string
			page: string
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
	page: string
}
