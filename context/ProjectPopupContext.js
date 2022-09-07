import { createContext, useState } from 'react'

const ProjectPopupContext = createContext()

export const ProjectPopupProvider = ({ children }) => {
	const [popupStatus, setPopupStatus] = useState('')
	const [popupData, setPopupData] = useState({
		title: '',
		description: '',
		images: [],
		technologies: [],
		url: '',
		github: '',
	})
	const closePopup = () => {
		setPopupStatus('')
		setPopupData({
			title: '',
			description: '',
			images: [],
			technologies: [],
			url: '',
			github: '',
		})
	}

	return (
		<ProjectPopupContext.Provider
			value={{
				popupData,
				popupStatus,
				setPopupData,
				setPopupStatus,
				closePopup,
			}}
		>
			{children}
		</ProjectPopupContext.Provider>
	)
}

export default ProjectPopupContext
