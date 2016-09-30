( function () {
    'use strict';

    module.exports = function clean ( gulp, plugins, pkg ) {
        var del = require( 'del' );
        var buildPath = pkg.configParams.dirs.build || 'build';

        return function () {
            return del( [
                buildPath,
                '.tmp'
            ] );
        };
    };
} )();
