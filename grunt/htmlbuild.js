module.exports = {	
	dist: {
		src: 'app/templates/*.html',
		dest: 'app/build/',
		options: {
			beautify: true,
			relative: true,
			scripts: {
				'main': 'app/build/assets/javascripts/build/scripts.min.js'              
			},
			styles: {
				'main': 'app/build/assets/css/main.css'
			},
			sections: {
				layout: {
					header: 'app/templates/layout/header.html',
					footer: 'app/templates/layout/footer.html',
				},
			},
			data: {
				// Data to pass to templates
			},
		}
	}
};