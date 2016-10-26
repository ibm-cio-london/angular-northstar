( function () {
    'use strict';

    var debug = require( 'gulp-debug' );

    module.exports = function scripts ( gulp, plugins, pkg ) {
        var fs = require( 'fs' );
        var path = require( 'path' );
        var merge = require( 'merge-stream' );

        var scriptsPath = pkg.configParams.dirs.src;
        var outputPath = pkg.configParams.dirs.build + '/' + pkg.configParams.dirs.dist;
        var tmpPath = pkg.configParams.dirs.tmp;

        var namespace = pkg.name;

        function getFolders ( dir ) {
            return fs.readdirSync( dir )
                .filter( function ( file ) {
                    return fs.statSync( path.join( dir, file ) ).isDirectory();
                } );
        }

        return function () {
            var folders = getFolders( scriptsPath );

            var tasks = function () {
                return folders.map( function ( folder ) {
                    console.log( path.join( tmpPath, folder, '/**/*.template.js' ) );
                    return gulp.src(
                        [
                            path.join( scriptsPath, folder, '/**/*.module.js' ),
                            path.join( scriptsPath, folder, '/**/*.directive.js' ),
                            path.join( scriptsPath, folder, '/**/*.service.js' ),
                            path.join( scriptsPath, folder, '/**/*.js' ),
                            path.join( tmpPath, folder, '/**/*.template.js' ),
                            path.join( '!' + scriptsPath, folder, '/**/*.spec.js' )
                        ]
                    )
                    .pipe( debug( {title: 'All files: ' + folder} ) )
                    // Concat into northstar-angular.{folder}.js
                    .pipe( plugins.concat( namespace + '-' + folder + '.js' ) )
                    // Write to dist folder
                    .pipe( gulp.dest( outputPath ) )
                    // Minify
                    .pipe( plugins.uglify() )
                    // Rename to northstar-angular.{folder}.min.js and output again to dist
                    .pipe( plugins.rename( namespace + '-' + folder + '.min.js' ) )
                    .pipe( gulp.dest( outputPath ) );
                } );
            };

            var templates = function () {
                return folders.map( function ( folder ) {
                    return gulp.src(
                        [
                            path.join( scriptsPath, folder, '/**/*.html' )
                        ]
                    )
                    .pipe( debug( {title: 'Templates: ' + folder} ) )
                    .pipe( plugins.angularTemplatecache( {
                        module: namespace + '.' + folder,
                        transformUrl: function () {
                            return namespace + '.' + folder + '.tpl';
                        }
                    } ) )
                    .pipe( plugins.concat( folder + '.template.js' ) )
                    // Write to dist folder
                    .pipe( gulp.dest( path.join( tmpPath, folder ) ) );
                } );

            };

            // process all remaining files in scriptsPath root into main.js and main.min.js files
            var root = function () {
                return gulp.src(
                    [
                        path.join( scriptsPath, '/**/*.module.js' ),
                        path.join( scriptsPath, '/**/*.directive.js' ),
                        path.join( scriptsPath, '/**/*.service.js' ),
                        path.join( scriptsPath, '/**/*.template.js' ),
                        path.join( '!' + scriptsPath, '/**/*.spec.js' )
                    ]
                )
                .pipe( debug( {title: 'Root: '} ) )
                .pipe( plugins.concat( namespace + '.js' ) )
                .pipe( gulp.dest( outputPath ) )
                .pipe( plugins.uglify() )
                .pipe( plugins.rename( namespace + '.min.js' ) )
                .pipe( gulp.dest( outputPath ) );
            };

            return merge( templates(), tasks(), root() );
        };
    };
} )();
