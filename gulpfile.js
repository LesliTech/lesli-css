/**
* Lesli
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*
* Powered by https://www.lesli.tech
* Building a better future, one line of code at a time.
*
* @author   Luis Donis <ldonis@lesli.tech>
* @license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
* @version  GIT: 1.0.0 alpha
*/


// · Including plugins and dependencies
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var modifyFile = require('gulp-modify-file')
//var browserSync = require('browser-sync').create()


// · Copy vendor modules & assets
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
gulp.task('vendor', () => {

	// LesliCSS loader
	gulp
	.src('./node_modules/normalize.css/normalize.css')
    .pipe(modifyFile((content, path, file) => {
        let start = '@mixin normalize() {\n'
        let end= '}'
        return `${start}${content}${end}`
    }))
    .pipe(rename({extname: ".scss"}))
	.pipe(gulp.dest('./src/vendor/'));

})



// · Compiling styles
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
gulp.task('scss', function () {

    // compile supercss to css
    let task = gulp
    .src('lesli.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));

})



// · Initialize watchers
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
gulp.task('watch', () => {

    gulp.watch('./xyzsrc/systemui/layout/*.html', ['build'])
    gulp.watch('./xyzsrc/systemui/scss/*.scss', ['build'])

})


// · Build 
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
gulp.task('build', ['vendor', 'scss'])


// · Run dev tasks
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~    ~·~     ~·~
gulp.task('dev', ['watch']);
