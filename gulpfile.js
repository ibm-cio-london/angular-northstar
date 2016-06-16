'use strict';

// Load required modules and build config
var gulp = require('gulp');
var config = require('./package.json').configParams;
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

// Returns the given task from the gulp folder
// e.g. getTask('scripts')
// that can then be used to construct build process
// Each file in /tasks/ directory defines a different task
var getTask = function (task, subTask) {
    if(subTask) {
        return require('./tasks/' + task)[subTask](gulp, plugins, config, browserSync);
    } else {
        return require('./tasks/' + task)(gulp, plugins, config, browserSync);
    }

};

gulp.task('scripts', getTask('scripts'));

/**
 *   Testing tasks
 */
gulp.task('test', getTask('test', 'singleRun'));
gulp.task('tdd', getTask('test', 'tdd'));

/**
 *   Cleaning tasks
 */
gulp.task('clean', getTask('clean', 'dist'));
gulp.task('clean:docs', getTask('clean', 'docs'));

/**
 *   Doc generation tasks
 */
gulp.task('docs', getTask('docs'));

/**
 *   Build tasks
 */
gulp.task('build', function() {
    runSequence('test', 'scripts');
});

/**
 *   Watch tasks
 */
gulp.task('watch', function() {
    runSequence('clean', ['scripts', 'docs'], function() {
        gulp.watch(config.dir.src + '/**/*.js', ['scripts', 'docs']);

        browserSync.init({
            server: {
                baseDir: './'
            },
            directory: false,
            open: false
        });
        gulp.watch(config.dir.docs + '/**/*.html').on('change', browserSync.reload);
    });
});
