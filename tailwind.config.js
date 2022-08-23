/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				mainOrange: 'rgb(250,69,42)',
				accentGrey: 'rgb(208, 208, 208)',
			},
			fontFamily: {
				playFair: ['Playfair Display'],
			},
		},
	},
	plugins: [],
}
