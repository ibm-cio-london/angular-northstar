( function () {
    'use strict';

    // Load required modules and build config
    var gulp = require( 'gulp' );
    var pkg = require( './package.json' );
    var plugins = require( 'gulp-load-plugins' )();


    var scriptsTask = require( './tasks/scripts' )( gulp, plugins, pkg );
    var lintTask = require( './tasks/lint' )( gulp, plugins, pkg );
    var cleanTask = require( './tasks/clean' )( gulp, plugins, pkg );
    var testTask = require( './tasks/test' )();
    var copyTask = require( './tasks/copy' )( gulp, plugins, pkg );

    gulp.task( 'clean', cleanTask );
    gulp.task( 'copy', copyTask );
    gulp.task( 'scripts', ['clean'], scriptsTask );
    gulp.task( 'test', testTask );
    gulp.task( 'lint', lintTask );

    gulp.task( 'build', ['scripts'], copyTask );

    gulp.task( 'default', ['build'] );

} )();
