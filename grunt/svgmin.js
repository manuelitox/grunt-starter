module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: 'app/build/assets/graphics/svgs',
				src: ['*.svg'],
				dest: 'app/build/assets/graphics/source'
			}
		]
	}
};