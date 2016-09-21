(function() {
    'use strict';

    module.exports = function scripts(gulp, plugins, dirs) {
        var fs = require('fs');
        var path = require('path');
        var merge = require('merge-stream');

        var scriptsPath = dirs.src;
        var outputPath = dirs.build + '/' + dirs.dist;
        var tmpPath = dirs.tmp;

        function getFolders(dir) {
            return fs.readdirSync(dir)
                .filter(function(file) {
                return fs.statSync(path.join(dir, file)).isDirectory();
            });
        }

        return function() {
            var folders = getFolders(scriptsPath);

            var tasks = folders.map(function(folder) {
                return gulp.src(
                    [
                        path.join(scriptsPath, folder, '/**/*.module.js'),
                        path.join(scriptsPath, folder, '/**/*.directive.js'),
                        path.join(scriptsPath, folder, '/**/*.service.js'),
                        path.join(scriptsPath, folder, '/**/*.template.js'),
                        path.join(scriptsPath, folder, '/**/*.js'),
                        path.join(tmpPath, folder, '/**/*.js'),
                        path.join('!' + scriptsPath, folder, '/**/*.spec.js')
                    ]
                )
                // Concat into northstar-angular.{folder}.js
                .pipe(plugins.concat('northstar-angular-' + folder + '.js'))
                // Write to dist folder
                .pipe(gulp.dest(outputPath))
                // Minify
                .pipe(plugins.uglify())
                // Rename to northstar-angular.{folder}.min.js and output again to dist
                .pipe(plugins.rename('northstar-angular-' + folder + '.min.js'))
                .pipe(gulp.dest(outputPath));
            });

            var templates = folders.map(function(folder) {
                return gulp.src(
                    [
                        path.join(scriptsPath, folder, '/**/*.html'),
                    ]
                )
                .pipe(plugins.angularTemplatecache({
                    module: 'northstar-angular.' + folder,
                    transformUrl: function(url) {
                        return 'northstar-angular/' + url;
                    }
                }))
                .pipe(plugins.concat('northstar-angular-' + folder + '.template.js'))
                // Write to dist folder
                .pipe(gulp.dest(path.join(tmpPath, folder)))
                // Minify
                .pipe(plugins.uglify())
                // Rename to northstar-angular.{folder}.min.js and output again to dist
                .pipe(plugins.rename('northstar-angular-' + folder + '.min.js'))
                .pipe(gulp.dest(outputPath));
            });


            // process all remaining files in scriptsPath root into main.js and main.min.js files
            var root = gulp.src(
                [
                    path.join(scriptsPath, '/**/*.module.js'),
                    path.join(scriptsPath, '/**/*.directive.js'),
                    path.join(scriptsPath, '/**/*.service.js'),
                    path.join(scriptsPath, '/**/*.template.js'),
                    path.join('!' + scriptsPath, '/**/*.spec.js')
                ]
            )
            .pipe(plugins.concat('northstar-angular.js'))
            .pipe(gulp.dest(outputPath))
            .pipe(plugins.uglify())
            .pipe(plugins.rename('northstar-angular.min.js'))
            .pipe(gulp.dest(outputPath));

            return merge(templates, tasks, root);
        };
    };
})();
