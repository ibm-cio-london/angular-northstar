( function () {
    'use strict';

    module.exports = function clean ( gulp, plugins, pkg ) {
        var del = require( 'del' );
        var distPath = pkg.configParams.dirs.dist || 'dist';
        var docsPath = pkg.configParams.dirs.docs || 'docs';
        var zipFolderPath = pkg.name || 'angular-northstar';

        return function () {
            return del( [
                distPath,
                docsPath,
                zipFolderPath,
                '.tmp'
            ] );
        };
    };
} )();
