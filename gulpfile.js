'use strict';

// Load required modules and build config
var gulp = require('gulp');
var config = require('./package.json');
var plugins = require('gulp-load-plugins')();


var scriptsTask = require('./tasks/scripts')(gulp, plugins, config.configParams.dirs);
var lintTask = require('./tasks/lint')(gulp, plugins, config.configParams.dirs);
var testTask = require('./tasks/test')();

gulp.task('scripts', scriptsTask);
gulp.task('test', testTask);
gulp.task('lint', lintTask);
