'use strict';

var scripts = function (gulp, plugins, config, bSync) {
    return function () {
        return gulp
        .src(
            [
                config.dir.src + '/app.js',
                config.dir.src + '/**/*.module.js',
                config.dir.src + '/**/*.js',
                '!' + config.dir.src + '/**/*.spec.js'
            ]
        )
        .pipe(bSync.stream())
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(config.dir.dist))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('app.min.js'))
        .pipe(gulp.dest(config.dir.dist));
    };
};

module.exports = scripts;
