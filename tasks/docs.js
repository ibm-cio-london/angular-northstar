'use strict';

var docs = function (gulp, plugins, config, bSync) {
    return function () {
        var options = {
            scripts: [
                '//1.www.s81c.com/common/v18/js/www.js',
                '//1.www.s81c.com/common/v18/js/forms.js',
                require('path').resolve('../bower_components/angular/angular.min.js'),
                require('path').resolve('../bower_components/angular/angular.min.js.map'),
                require('path').resolve('../bower_components/angular-animate/angular-animate.min.js'),
                require('path').resolve('../bower_components/angular-animate/angular-animate.min.js.map'),
                config.dir.dist + '/app.js',

            ],
            styles: [
                '//1.www.s81c.com/common/v18/css/www.css',
                '//1.www.s81c.com/common/v18/css/forms.css'
            ],
            html5Mode: false,
            startPage: '/api',
            title: 'Angular & v18',
            titleLink: '/api'
        };

        return gulp.src(config.dir.src + '/**/*.js')
            .pipe(plugins.ngdocs.process(options))
            .pipe(gulp.dest(config.dir.dist + '/docs/api'))
            .pipe(bSync.stream());
    };
};

module.exports = docs;
