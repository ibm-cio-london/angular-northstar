( function () {
    'use strict';

    module.exports = function eslint ( gulp, gulpPlugins, pkg ) {

        return function () {
            var filesToBeIgnored = pkg.configParams.dirs.distIgnore;

            var archiver = require( 'archiver' );
            var fs = require( 'fs' );

            var output = fs.createWriteStream( __dirname + '/../' + pkg.name + '.tar.gz' );

            var archive = archiver( 'tar', {
                gzip: true
            } );

            archive.glob( '**/*', {
                ignore: filesToBeIgnored
            }, {
                prefix: pkg.name
            } );

            archive.pipe( output );

            return archive.finalize();
        };
    };
} )();
