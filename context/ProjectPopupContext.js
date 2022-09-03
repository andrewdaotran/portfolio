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
	})

	return (
		<ProjectPopupContext.Provider
			value={{
				popupData,
				popupStatus,
			}}
		>
			{children}
		</ProjectPopupContext.Provider>
	)
}

export default ProjectPopupContext
