/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		backgroundImage: {
			'find-my-pet': "url('../public/find_my_pet.png')",
		},
		extend: {
			colors: {
				mainOrange: 'rgb(250,69,42)',
				accentGrey: 'rgb(208, 208, 208)',
				lightGrey: 'rgb(230,230,230)',
			},
			fontFamily: {
				playFair: ['Playfair Display'],
			},
		},
	},
	plugins: [],
}
