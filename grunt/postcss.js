module.exports = {	
  options: {
		map: true,
		processors: [
			require('autoprefixer-core')({browsers: ['last 6 version', 'ie 9', 'ie 10']}),
			require('csswring')
		]
	},
	dist: {
		src: 'app/build/assets/css/*.css'
	}
};