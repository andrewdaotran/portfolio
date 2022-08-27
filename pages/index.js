import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
export default function Home() {
	return (
		<div className='grid gap-16 md:gap-24 lg:gap-32'>
			<Hero />
			<Projects />
			<Skills />
		</div>
	)
}
