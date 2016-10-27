( function () {
    'use strict';


    module.exports = function eslint ( gulp, gulpPlugins, pkg ) {
        var dirs = pkg.configParams.dirs;

        var buildDir = dirs.build;

        return function () {
            return gulp.src( ['./package.json', './README.md', './LICENSE.txt', './index.js'] )
            .pipe( gulp.dest( buildDir ) );
        };
    };
} )();
