module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				secondarycol: {
					200: '#ddd7c2',
					400: '#ded3b0'
				}
			},
			fontFamily: {
				fbd: ['Open Sans'],
				sbd: ['Poppins']
			}
		},
		backgroundImage: {
			'hero-pattern': "url('./assets/images/yoga.jpg')"
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
