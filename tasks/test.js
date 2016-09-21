(function () {
    'use strict';

    module.exports = function test () {
        var Server = require('karma').Server;
        return function () {
            new Server({
                configFile: require('path').resolve(__dirname + '/../karma.conf.js'),
                singleRun: true
            }).start();
        };
    };
})();
