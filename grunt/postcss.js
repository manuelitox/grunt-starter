module.exports = {	
  options: {
		map: true,
		processors: [
			require('autoprefixer')({browsers: ['last 6 version', 'ie 9', 'ie 10']}),
			require('cssnano')({zindex: false})
		]
	},
	dist: {
		src: 'app/build/assets/css/*.css'
	}
};