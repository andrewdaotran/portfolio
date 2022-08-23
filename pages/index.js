import Hero from '../components/Hero'
import Skills from '../components/Skills'
export default function Home() {
	return (
		<div className='grid gap-16 md:gap-24 lg:gap-32'>
			<Hero />
			<Skills />
		</div>
	)
}
