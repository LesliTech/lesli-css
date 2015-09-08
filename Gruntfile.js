module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'src/nav/rnav.css' : 'core/nav/rnav.styl',
                    'src/uikit/rui.css' : 'core/uikit/rui.styl',
                    'src/base/rbase.css' : 'core/base/rbase.styl',
                    'src/form/rform.css' : 'core/form/rform.styl',
                    'src/grid/rgrid.css' : 'core/grid/rgrid.styl',
                    'src/helper/rhelp.css' : 'core/helper/rhelp.styl',
                    'src/table/rtable.css' : 'core/table/rtable.styl'
                }
            }
        },
        concat: {
            rcatfull: {
                src:[
                    'src/nav/rnav.css',
                    'src/base/rbase.css',
                    'src/form/rform.css',
                    'src/grid/rgrid.css',
                    'src/table/rtable.css',
                    'src/uikit/rui.css',
                    'src/helper/rhelp.css'],
                dest: 'src/version-estable/rcat.css'
            },
            rcatstructure: {
                src:[
                    'src/nav/rnav.css',
                    'src/base/rbase.css',
                    'src/form/rform.css',
                    'src/grid/rgrid.css',
                    'src/table/rtable.css'],
                dest: 'src/version-estable/rcat-structure.css'
            }
        },
        cssmin: {
            ui: { src: 'src/uikit/rui.css', dest: 'src/uikit/rui.min.css' },
            nav: { src: 'src/nav/rnav.css', dest: 'src/nav/rnav.min.css' },
            base: { src: 'src/base/rbase.css', dest: 'src/base/rbase.min.css' },
            form: { src: 'src/form/rform.css', dest: 'src/form/rform.min.css' },
            grid: { src: 'src/grid/rgrid.css', dest: 'src/grid/rgrid.min.css' },
            table: { src: 'src/table/rtable.css', dest: 'src/table/rtable.min.css' },
            helper: { src: 'src/helper/rhelp.css', dest: 'src/helper/rhelp.min.css' },
            rcat: { src: 'src/version-estable/rcat.css', dest: 'src/version-estable/rcat.min.css' },
            rcatstructure: { src: 'src/version-estable/rcat-structure.css', dest: 'src/version-estable/rcat-structure.min.css' },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask(
        'default', ['stylus:compile', 'concat:rcatfull','concat:rcatstructure',
                    'cssmin:ui','cssmin:nav','cssmin:base','cssmin:form','cssmin:grid','cssmin:table','cssmin:helper','cssmin:rcat','cssmin:rcatstructure']);
};
