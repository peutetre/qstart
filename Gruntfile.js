module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
          all: ['test/*.html']
        },
        jshint: {
            all: {
                src: ['src/qstart.js']
            }
        },
        watch: {
            all: {
                files: ['src/qstart.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('test', 'qunit');
    grunt.registerTask('default', ['jshint']);
};
