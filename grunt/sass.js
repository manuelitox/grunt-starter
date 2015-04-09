module.exports = {	
	dist: {
		options: {
			style: 'expanded' // Output style. Can be: nested, compact, compressed, expanded.
		},
		files: {
			// output path : .scss path
 			'app/build/assets/css/main.css': 'app/build/assets/scss/main.scss',
		}
	}
};