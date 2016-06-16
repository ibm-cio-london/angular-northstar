'use strict';

/*
    Runs karma tests just once.

    Shows whole coverage report at the end in console
*/
var singleRun = function () {
    var KarmaServer = require('karma').Server;
    return function (done) {
        new KarmaServer({
            configFile: __dirname + '/../karma.conf.js',
            singleRun: true
        }, function() {
            done();
        }).start();
    };
};

var tdd = function () {
    var KarmaServer = require('karma').Server;
    var dirs = require(__dirname + '/../package.json').configParams.dir;
    return function (done) {
        new KarmaServer({
            configFile: __dirname + '/../karma.conf.js',
            singleRun: false,
            reporters: ['clear-screen', 'spec', 'coverage'],
            coverageReporter: {
                dir: dirs.dist + '/docs/coverage',
                reporters: [
                    {type: 'html', subdir: '.'},
                    {type: 'json-summary', subdir: '.'}
                ]
            },
            specReporter: {
                suppressSkipped: true
            },
            browsers: ['PhantomJS']
        }, function() {
            done();
        }).start();
    };
};

module.exports = {
    singleRun: singleRun,
    tdd: tdd
};
