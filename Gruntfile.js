module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        ///* Compile stylus to css
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        stylus:{
            compile_only:{
                options:{ 'compress': false },
                files:{
                    'dist/base/base.css' : 'src/base/compile.styl',
                    'dist/grid/grid.css' : 'src/grid/compile.styl'
                }
            },
            compile_minify:{
                options:{ 'compress': true },
                files:{
                    'dist/base/base.min.css' : 'dist/base/base.css',
                    'dist/grid/grid.min.css' : 'dist/grid/grid.css'
                }
            },
            framework_only:{
                options:{ 'compress': false },
                files:{
                    'dist/lesli.css' : [
                        'dist/base/base.css',
                        'dist/grid/grid.css'
                    ]
                }
            },
            framework_minify:{
                options:{ 'compress': true },
                files:{
                    'dist/lesli.min.css' : 'dist/lesli.css'
                }
            }
        },

        ///* Files watcher
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        watch: {
            stylus:{
                files: ['src/**/*.styl'],
                tasks: ['stylus:compile_only']
            }
        },

    });


    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');


    ///* Defining Development tasks
    ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
    grunt.registerTask('compile', ['stylus:compile_only']);
    grunt.registerTask('distribute', ['cssmin:compile_minify']);
    grunt.registerTask('deploy', ['stylus']);

};
