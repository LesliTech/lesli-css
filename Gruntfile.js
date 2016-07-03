module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        ///* Copy RCat modules
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/rcat-cat/src/*.styl'], dest: 'src/cat', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/rcat-init/src/*.styl'], dest: 'src/init', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/rcat-base/src/*.styl'], dest: 'src/base', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/rcat-grid/src/*.styl'], dest: 'src/grid', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/rcat-nav/src/*.styl'], dest: 'src/nav', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/rcat-helper/src/*.styl'], dest: 'src/helper', filter: 'isFile'}
                ]
            }
        },


        ///* Compile tasks
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'dist/rcat.css' : 'src/cat/rcat.styl',
                    'dist/base/rbase.css' : 'src/base/rbase.styl',
                    'dist/grid/rgrid.css' : 'src/grid/rgrid.styl',
                    'dist/nav/rnav.css' : 'src/nav/rnav.styl',
                    'dist/helper/rhelper.css' : 'src/nav/rnav.styl',
                }
            }
        },


        ///* Minify tasks
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        cssmin: {
            base: { src: 'dist/base/rbase.css', dest: 'dist/base/rbase.min.css' },
            grid: { src: 'dist/grid/rgrid.css', dest: 'dist/grid/rgrid.min.css' },
            nav: { src: 'dist/grid/rgrid.css', dest: 'dist/grid/rgrid.min.css' },
            helper: { src: 'dist/helper/rhelper.css', dest: 'dist/helper/rhelper.min.css' },
            dist: { src: 'dist/rcat.css', dest: 'dist/rcat.min.css' }
        }


    });


    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');


    ///* Copy modules
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('build', ['copy']);


    ///* Compile framework
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('compile', ['stylus']);


    ///* Minify files
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('distribute', ['cssmin']);


    ///* Running/defining deploy tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['copy', 'stylus', 'cssmin']);


    ///* Running/defining all tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('default', ['copy', 'stylus', 'cssmin']);

};
