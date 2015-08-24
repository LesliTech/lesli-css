module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy:{
            main: {
                files:[
                    {src: 'core/base/rbase.css', dest: 'src/base/'}
                ]
            }
        }
        /*
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
        */
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('default', ['concat:css', 'cssmin:css']);
    grunt.registerTask('default', ['copy:main']);
};
