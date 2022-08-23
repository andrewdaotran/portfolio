import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { NavbarStatusProvider } from '../context/navbarStatusContext'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavbarStatusProvider>
				<Navbar>
					<Component {...pageProps} />
				</Navbar>
			</NavbarStatusProvider>
		</>
	)
}

export default MyApp
