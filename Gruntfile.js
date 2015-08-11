module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'src/base/*',
                    'src/grid/*'
                ],
                dest: 'src/version-estable/rcat-structure.css'
            }
        },
        cssmin: {
            css: {
                src: 'src/version-estable/rcat-structure.css',
                dest: 'src/version-estable/rcat-structure.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:css', 'cssmin:css']);
};