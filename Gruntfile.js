module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'src/uikit/rui.css' : 'core/uikit/rui.styl',
                    'src/base/rbase.css' : 'core/base/rbase.styl',
                    'src/form/rform.css' : 'core/form/rform.styl',
                    'src/grid/rgrid.css' : 'core/grid/rgrid.styl',                    
                    'src/table/rtable.css' : 'core/table/rtable.styl'
                }
            }
        },
        concat: {
            rcatfull: {
                src:[
                    'src/base/rbase.css',
                    'src/form/rform.css',
                    'src/grid/rgrid.css',
                    'src/table/rtable.css'],
                dest: 'src/version-estable/rcat.css'
            }
        },
        cssmin: {
            base: { src: 'src/base/rbase.css', dest: 'src/base/rbase.min.css' },
            form: { src: 'src/form/rform.css', dest: 'src/form/rform.min.css' },
            grid: { src: 'src/grid/rgrid.css', dest: 'src/grid/rgrid.min.css' },
            table: { src: 'src/table/rtable.css', dest: 'src/rtable/rtable.min.css' },
            rcat: { src: 'src/version-estable/rcat.css', dest: 'src/version-estable/rcat.min.css' },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask(
        'default', ['stylus:compile', 'concat:rcatfull',
                    'cssmin:base', 'cssmin:form', 'cssmin:grid', 'cssmin:table', 'cssmin:rcat']);
};
