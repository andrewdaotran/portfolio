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
		setTimeout(() => {
			setPopupData({
				title: '',
				description: '',
				images: [],
				technologies: [],
				url: '',
				github: '',
			})
		}, 700)
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
