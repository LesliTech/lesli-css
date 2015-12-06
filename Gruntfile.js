module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Clone source repositories
        ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
        gitclone: {
            base: {
                options: {
                    repository: 'https://github.com/ResponsiveCat/rBase.git',
                    branch: 'master',
                    directory: 'src/rBase'
                },
            },
            grid: {
                options: {
                    repository: 'https://github.com/ResponsiveCat/rGrid.git',
                    branch: 'master',
                    directory: 'src/rGrid'
                },
            },
            helper: {
                options: {
                    repository: 'https://github.com/ResponsiveCat/rHelper.git',
                    branch: 'master',
                    directory: 'src/rHelper'
                },
            },
            nav: {
                options: {
                    repository: 'https://github.com/ResponsiveCat/rNav.git',
                    branch: 'master',
                    directory: 'src/rNav'
                },
            },
            ui: {
                options: {
                    repository: 'https://github.com/ResponsiveCat/rUi.git',
                    branch: 'master',
                    directory: 'src/rUi'
                },
            }
        },
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Copy RCat modules
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/rHelper/core/*.styl'], dest: 'core/helper', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['src/rBase/core/*.styl'], dest: 'core/base', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['src/rGrid/core/*.styl'], dest: 'core/grid', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['src/rNav/core/*.styl'], dest: 'core/nav', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['src/rUi/core/*.styl'], dest: 'core/ui', filter: 'isFile'}
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
                    'dist/nav/rnav.css' : 'core/nav/rnav.styl',
                    'dist/ui/rui.css' : 'core/ui/rui.styl'
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
                     'dist/ui/rui.css',
                     'dist/helper/rhelper.css'],
                dest:'dist/rcat.css'
            },
            structure: {
                src:['dist/base/rbase.css',
                     'dist/grid/rgrid.css',
                     'dist/nav/rnav.css',
                     'dist/helper/rhelper.css'],
                dest:'dist/rcat.structure.css'
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
            ui: { src: 'dist/ui/rui.css', dest: 'dist/ui/rui.min.css' },
            dist: { src: 'dist/rcat.css', dest: 'dist/rcat.min.css' },
            structure: { src: 'dist/rcat.structure.css', dest: 'dist/rcat.structure.min.css' }
        }

    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-git');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining copy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('clone', ['gitclone']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('compile', ['stylus']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deploy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus', 'concat','cssmin']);

};
