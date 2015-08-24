module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less"); 

 grunt.loadNpmTasks("grunt-autoprefixer"); 

 grunt.loadNpmTasks("grunt-combine-media-queries"); 

 grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.initConfig({
	cssmin: { 
		style: { 
			options: { 
				keepSpecialComments: 0, 
				report: "gzip" 
			}, 
			files: { 
				"css/style.min.css": ["css/style.css"] 
			} 
		}
	},
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('lint', ['lintspaces']);
};