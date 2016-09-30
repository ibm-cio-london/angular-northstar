/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 * @author: Matt Parish <matthewparish@uk.ibm.com>
 * @author: Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 **/

(function () {
    'use strict';
    angular
        .module('angular-northstar.tooltip')
        .directive('northstarTooltip', ['$timeout', northstarTooltip]);

    function northstarTooltip ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    jQuery(element).tooltip();
                });
            }
        };
    }
})();
