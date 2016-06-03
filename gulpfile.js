'use strict';

var appEnv = require('cfenv').getAppEnv();

// Load required modules and build config
var gulp = require('gulp');
var config = require('./package.json').configParams;
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

// Returns the given task from the gulp folder
// e.g. getTask('scripts')
// that can then be used to construct build process
//
// Each file in /gulp/ directory defines a different task
var getTask = function (task) {
    return require('./tasks/' + task)(gulp, plugins, config, browserSync);
};

gulp.task('scripts', getTask('scripts'));
//gulp.task('unit', getTask('unit'));
//gulp.task('docs', getTask('docs'));

gulp.task('default', ['scripts'], function () {
    console.log('default');
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch(config.dir.src + '/**/*.js', ['scripts']);

    browserSync.init({
        port: appEnv.port + 1000,
        proxy: 'localhost:' + 51972,
        open: true
    });

    //gulp.watch(config.dir.src + '/**/*.html', ['docs']).on('change', browserSync.reload);
});
