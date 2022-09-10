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
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(90deg)' },
				},
			},
			animation: {
				wiggle: 'wiggle 500ms ease-in-out',
			},
		},
	},
	plugins: [],
}
