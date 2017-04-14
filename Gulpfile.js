'use strict';
/**
 * Gulp file for front-end js check and etc.
 * Date      : 2017/4/5
 * copyright : (c) d.z.
 *
 * TODO:
 *     Sync folders after release using rsync.
 */

const   fs       = require('fs'),
        del      = require('del'),
        path     = require('path'),
        gulp     = require('gulp'),
        sass     = require('gulp-sass'),
        newer    = require('gulp-newer'),
        babel    = require('gulp-babel'),
        uglify   = require('gulp-uglify'),
        eslint   = require('gulp-eslint'),
        merge    = require('merge-stream'),
        replace  = require('gulp-replace'),
        cssnano  = require('gulp-cssnano'),
        htmlmin  = require('gulp-htmlmin'),
        catcss   = require('gulp-concat-css'),
        reload   = require('gulp-livereload'),
        prefixer = require('gulp-autoprefixer'),
        include  = require('gulp-file-include');


const PREFIX_CONF  = {browsers: ['last 5 versions']};
const CSSNANO_CONF = {safe: true};

gulp.task('watch', function() {

    let delay = 500;

    reload({ start: true });
    reload.listen();

    gulp.watch( ['static/scss/**/*.scss'] , {debounceDelay: delay}, () => {

        gulp.src('static/scss/**/*.scss')
            .pipe(newer({dest: 'static/css/', ext: '.css'}))
            .pipe(sass().on('error', sass.logError))
            .pipe(prefixer(PREFIX_CONF))
            .pipe(cssnano(CSSNANO_CONF))
            .pipe(gulp.dest('static/css/'))
            .pipe(reload());
            
    });

    gulp.watch( ['static/es6/**/*.es'], {debounceDelay: delay}, () => {

        gulp.src('static/es6/**/*.es')
            .pipe(newer({dest: 'static/js/', ext: '.js'}))
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest('static/js/'))
            .pipe(reload());
    });


});
gulp.task('release',function(){
    gulp.src(['static/scss/**/*.scss'])
                .pipe(sass().on('error', sass.logError))
                .pipe(prefixer(PREFIX_CONF))
                .pipe(cssnano(CSSNANO_CONF))
                .pipe(gulp.dest('static/css/'));
               

    gulp.src(['static/es6/**/*.es'])
                .pipe(babel())
                .pipe(uglify())
                .pipe(gulp.dest('static/js/'));
           
    
})







