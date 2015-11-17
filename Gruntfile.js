module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Copy RCat modules
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        copy: {
            rcat: {
                files: [
                    {expand: true, flatten: true, src: ['../rHelper/core/*.styl'], dest: 'core/helper', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['../rBase/core/*.styl'], dest: 'core/base', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['../rGrid/core/*.styl'], dest: 'core/grid', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['../rNav/core/*.styl'], dest: 'core/nav', filter: 'isFile'}
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
                    'dist/helper/rhelper.css' : 'core/helper/rhelper.styl',
                    'dist/base/rbase.css' : 'core/base/rbase.styl',
                    'dist/grid/rgrid.css' : 'core/grid/rgrid.styl',
                    'dist/nav/rnav.css' : 'core/nav/rnav.styl'
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
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Watcher tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        watch: {
            stylus:{
                files: ['core/*.styl'],
                tasks: ['stylus:compile']
            }
        }
    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining copy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('consolidate', ['copy']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('compile', ['stylus']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deploy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus', 'concat','cssmin']);

};
