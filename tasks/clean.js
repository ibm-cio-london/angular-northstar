'use strict';

var clean = function(paths) {
    var del = require('del');

    if(typeof paths === 'string') {
        console.log('string');
        paths = [paths];
    }
    return function () {
        return del(paths);
    };
};


module.exports = {
    dist: function() {
        return clean('dist');
    },
    docs: function() {
        return clean(['dist/examples', 'dist/docs']);
    }
};
