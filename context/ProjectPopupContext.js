import { createContext, useState } from 'react'

const ProjectPopupContext = createContext()

export const ProjectPopupProvider = ({ children }) => {
	const [popupStatus, setPopupStatus] = useState(false)
	const [popupData, setPopupData] = useState({
		title: '',
		description: '',
		images: [],
		technologies: [],
		url: '',
		github: '',
		page: '',
	})
	const closePopup = () => {
		setPopupStatus(false)
		setTimeout(() => {
			if (popupStatus) return
			setPopupData({
				title: '',
				description: '',
				images: [],
				technologies: [],
				url: '',
				github: '',
				page: '',
			})
		}, 600)
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
