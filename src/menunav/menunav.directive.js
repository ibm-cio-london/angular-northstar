/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/**
 * @ngdoc directive
 * @name v18Checkbox.directive:v18Checkbox
 * @restrict E
 * @description
 * # Why do we need it?
 * todo
 *
 * # What does this directive do?
 * todo
 *
 * @author Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 */
(function () {
    'use strict';
    angular
        .module('northstar-angular.menunav')
        .directive('northstarMenunav', ['$timeout', v18menunav]);

    function v18menunav ($timeout) {
        return {
            restrict: 'A',
            templateUrl: 'northstar-angular/menunav.tpl.html',
            link: function () {
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    IBMCore.common.module.sitenavmenu.init();
                });
            }
        };
    }
})();
