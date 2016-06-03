/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/
(function () {
    'use strict';
    angular
        .module('v18.select')
        .directive('v18Select', ['$timeout', v18Select]);

    function v18Select ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    IBMCore.common.widget.selectlist.init(element);
                });
            }
        };
    }
})();
