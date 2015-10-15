module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Deployment tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'src/base/rbase.css' : 'core/base/rbase.styl',
                    'src/grid/rgrid.css' : 'core/grid/rgrid.styl',
                    'src/form/rform.css' : 'core/form/rform.styl',
                    'src/nav/rnav.css' : 'core/nav/rnav.styl',
                    'src/table/rtable.css' : 'core/table/rtable.styl',
                    'src/helper/rcenter.css' : 'core/helper/rcenter.styl',
                    'src/helper/rlayout.css' : 'core/helper/rlayout.styl',
                    'src/helper/rframing.css' : 'core/helper/rframing.styl',
                    'src/uikit/rui.css' : 'core/uikit/rui.styl'
                }
            }
        },
        concat: {
            rcat: {
                src:[
                    'src/base/rbase.css',
                    'src/grid/rgrid.css',
                    'src/form/rform.css',
                    'src/nav/rnav.css',
                    'src/table/rtable.css',
                    'src/helper/rcenter.css',
                    'src/helper/rlayout.css',
                    'src/uikit/rui.css'],
                dest: 'src/version/rcat.css'
            },
            rcatfull: {
                src:[
                    'src/base/rbase.css',
                    'src/grid/rgrid.css',
                    'src/form/rform.css',
                    'src/nav/rnav.css',
                    'src/table/rtable.css',
                    'src/helper/rcenter.css',
                    'src/helper/rlayout.css',
                    'src/helper/rframing.css',
                    'src/uikit/rui.css'],
                dest: 'src/version/full/rcat.full.css'
            },
            rcatdev: {
                src:[
                    'src/base/rbase.css',
                    'src/grid/rgrid.css',
                    'src/form/rform.css',
                    'src/nav/rnav.css',
                    'src/table/rtable.css',
                    'src/helper/rcenter.css',
                    'src/helper/rlayout.css',
                    'src/helper/rframing.css'],
                dest: 'src/version/dev/rcat.dev.css'
            },
            rcatstructure: {
                src:[
                    'src/base/rbase.css',
                    'src/grid/rgrid.css',
                    'src/form/rform.css',
                    'src/nav/rnav.css',
                    'src/table/rtable.css',
                    'src/helper/rcenter.css',
                    'src/helper/rlayout.css'],
                dest: 'src/version/structure/rcat.structure.css'
            }
        },
        cssmin: {
            ui: { src: 'src/uikit/rui.css', dest: 'src/uikit/rui.min.css' },
            nav: { src: 'src/nav/rnav.css', dest: 'src/nav/rnav.min.css' },
            base: { src: 'src/base/rbase.css', dest: 'src/base/rbase.min.css' },
            form: { src: 'src/form/rform.css', dest: 'src/form/rform.min.css' },
            grid: { src: 'src/grid/rgrid.css', dest: 'src/grid/rgrid.min.css' },
            table: { src: 'src/table/rtable.css', dest: 'src/table/rtable.min.css' },
            center: { src: 'src/helper/rcenter.css', dest: 'src/helper/rcenter.min.css' },
            layout: { src: 'src/helper/rlayout.css', dest: 'src/helper/rlayout.min.css' },
            framing: { src: 'src/helper/rframing.css', dest: 'src/helper/rframing.min.css' },
            rcat: { src: 'src/version/rcat.css', dest: 'src/version/rcat.min.css' },
            rcatdev: { src: 'src/version/dev/rcat.dev.css', dest: 'src/version/dev/rcat.dev.min.css' },
            rcatfull: { src: 'src/version/full/rcat.full.css', dest: 'src/version/full/rcat.full.min.css' },
            rcatstructure: { src: 'src/version/structure/rcat.structure.css', dest: 'src/version/structure/rcat.structure.min.css' },
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Development tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        stylint: {
            options: {
              configFile: false,
              config: {colons: 'never'}
            },
            src: ['core/base/rbase.styl']
          },
    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-stylint');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deployment tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy',
                    ['stylus:compile', 'concat:rcat','concat:rcatfull','concat:rcatdev','concat:rcatstructure',
                    'cssmin:ui','cssmin:nav','cssmin:base','cssmin:form','cssmin:grid','cssmin:table','cssmin:center',
                    'cssmin:layout','cssmin:framing','cssmin:rcat','cssmin:rcatfull','cssmin:rcatstructure','cssmin:rcatdev']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining Development tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('dev',['stylint']);
};
