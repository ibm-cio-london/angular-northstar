'use strict';

var scripts = function (gulp, plugins, config, bSync) {
    return function () {
        return gulp
        .src('index.html')
        .pipe(bSync.stream())
        .pipe(plugins.usemin({
            v18Checkbox: [ plugins.uglify() ]
        }))
        .pipe(gulp.dest(config.dir.dist));
    };
};

module.exports = scripts;
