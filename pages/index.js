import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import WhiteSpace from '../components/WhiteSpace'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='grid gap-16 md:gap-24 lg:gap-32 relative'>
			<Hero />
			<Projects />
			<Skills />
			<WhiteSpace />
			<Footer />
		</div>
	)
}
