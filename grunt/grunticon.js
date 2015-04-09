module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'app/build/assets/graphics/source',
			src: ['*.svg', '*.png'],
			dest: 'app/build/assets/graphics/output'
		}],
		options: {
			enhanceSVG: true
		}		
	}
};