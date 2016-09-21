(function() {
    'use strict';

    var gulpIf = require('gulp-if');

    function isFixed(file) {
        // Has ESLint fixed the file contents?
        // Also check we aren't running on Travis
        // or other CIs as we don't want to fix anything that won't
        // be committed back
        return file.eslint !== null && file.eslint.fixed && !process.env.CI;
    }

    module.exports = function eslint(gulp, gulpPlugins, dirs) {
        var options = {};

        if ( !process.env.CI ) {
            options = {
                fix: true
            };
        }

        return function() {
            return gulp.src(dirs.src + '/**/*.js')
            .pipe(gulpPlugins.eslint( options ))
            .pipe(gulpPlugins.eslint.format('stylish'))
            .pipe(gulpIf(isFixed, gulp.dest(function(file) {
                // Pipe the fixed file back to it's original location
                return file.base;
            })))
            .pipe(gulpPlugins.eslint.failAfterError());
        };
    };
})();
