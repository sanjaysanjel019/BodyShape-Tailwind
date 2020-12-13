module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				secondarycol: {
					200: '#ddd7c2',
					400: '#ded3b0'
				},
				iconsColors: {
					200: '#f4e8c1'
				},
				graycol: {
					100: '#e8e8e8',
					200: '#999999',
					400: '#777777'
				}
			},
			fontFamily: {
				fbd: ['Open Sans'],
				sbd: ['Poppins'],
				allura: ['Allura']
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
