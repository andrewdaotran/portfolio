import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { NavbarStatusProvider } from '../context/navbarStatusContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<div className='font-playFair max-w-7xl mx-auto'>
			<Head>
				<title>Andrew Tran - Front End React Developer</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<NavbarStatusProvider>
				<Navbar>
					<Component {...pageProps} />
				</Navbar>
			</NavbarStatusProvider>
		</div>
	)
}

export default MyApp
