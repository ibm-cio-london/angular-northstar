( function () {
    'use strict';

    module.exports = function eslint ( gulp, gulpPlugins, pkg ) {

        return function () {
            var filesToBeIgnored = pkg.configParams.dirs.distIgnore;

            var archiver = require( 'archiver' );
            var fs = require( 'fs' );

            var output = fs.createWriteStream( __dirname + '/../' + pkg.name + '.zip' );

            var archive = archiver( 'zip', {} );

            archive.glob( '**/*', {
                ignore: filesToBeIgnored
            } );

            archive.pipe( output );

            return archive.finalize();
        };
    };
} )();
