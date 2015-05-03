module.exports = {
	options: {
		livereload: true,
	},			
	css: {
		files: '**/*.scss',
		tasks: ['sass']
	},
	js: {
		files: 'app/build/assets/javascripts/*.js',
		tasks: ['uglify']
	},
	minifysvg: {
		files: ['app/build/assets/graphics/svgs/*.svg'],
		tasks: ['svgmin']
	},
	icons: {
		files: ['app/build/assets/graphics/source/*.svg'],
		tasks: ['grunticon']
	},
	postcss: {
		files: ['app/build/assets/css/*.css'],
		tasks: ['postcss']
	}
};