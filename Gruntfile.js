
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        ///* Compile stylus to css
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        stylus:{
            compile_tests:{
                options:{ 'compress': false, 'include css': true },
                files:{
                    'tests/grid/grid.test.css' : 'tests/grid/grid.test.styl'
                }
            }
        },


        ///* Copy vendor modules
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        copy: {

            ///* normalize.css
            //// https://necolas.github.io/normalize.css/
            normalize:{
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'node_modules/normalize.css/normalize.css',
                dest: 'src/vendor/'
            }

        },

        ///* Files watcher
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        watch: {
            stylus:{
                files: ['src/**/*.styl','tests/**/*.styl'],
                tasks: ['stylus']
            }
        },

    });


    ///* Including plugins and dependencies
    ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');


    ///* Defining Development tasks
    ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
    grunt.registerTask('compile', ['stylus']);
    grunt.registerTask('compile-tests', ['stylus:compile_tests']);
    grunt.registerTask('vendor', ['copy']);


};
