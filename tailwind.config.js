module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			zIndex: {
				'-10': '-10',
			},
			fontSize: {
				xxs: [
					'0.5rem',
					{
						letterSpacing: '0.02rem',
					},
				],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
