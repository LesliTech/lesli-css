module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Copy RCat modules
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['rcat_modules/rcat-helper/src/*.styl'], dest: 'src/helper', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['rcat_modules/rcat-base/src/*.styl'], dest: 'src/base', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['rcat_modules/rcat-grid/src/*.styl'], dest: 'src/grid', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['rcat_modules/rcat-nav/src/*.styl'], dest: 'src/nav', filter: 'isFile'}
                ]
            }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Compile tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'dist/helper/rhelper.css' : 'src/helper/rhelper.styl',
                    'dist/base/rbase.css' : 'src/base/rbase.styl',
                    'dist/grid/rgrid.css' : 'src/grid/rgrid.styl',
                    'dist/nav/rnav.css' : 'src/nav/rnav.styl'
                }
            }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Concat tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        concat: {
            rcat: {
                src:['dist/base/rbase.css',
                     'dist/grid/rgrid.css',
                     'dist/nav/rnav.css',
                     'dist/helper/rhelper.css'],
                dest:'dist/rcat.css'
            }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Minify tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        cssmin: {
            helper: { src: 'dist/helper/rhelper.css', dest: 'dist/helper/rhelper.min.css' },
            base: { src: 'dist/base/rbase.css', dest: 'dist/base/rbase.min.css' },
            grid: { src: 'dist/grid/rgrid.css', dest: 'dist/grid/rgrid.min.css' },
            nav: { src: 'dist/nav/rnav.css', dest: 'dist/nav/rnav.min.css' },
            dist: { src: 'dist/rcat.css', dest: 'dist/rcat.min.css' }
        }

    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining all tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('build', ['copy']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('compile', ['stylus']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deploy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus', 'concat','cssmin']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining all tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('default', ['copy', 'stylus', 'concat','cssmin']);

};
