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
 * @name northstarCheckbox.directive:northstarCheckbox
 * @restrict A
 * @element input
 * @description
 * # Why do we need it?
 * By default, if you include a select dropdown on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the select element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * On the net available Angular cycle, it uses the `IBMCore` method to initialise the select dropdown
 *
 * @author Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 *
 * @example
 * <example module="northstarCheckbox">
 *     <file name="index.html">
 *         <div ng-controller="checkboxCtrl">
 *              <input type="checkbox" id="ex-1">
 *              <label for="ex-1">This checkbox isn't initialised properly</label>
 *
 *              <input northstar-checkbox type="checkbox" id="ex-2">
 *              <label for="ex-2">This checkbox is initialised properly</label>
 *
 *              <input northstar-checkbox ng-model="bool" type="checkbox" id="ex-3">
 *              <label for="ex-3">This checkbox is bound to <pre>$scope.bool</pre></label>
 *              <pre>$scope.bool = {{bool}}</pre>
 *              <div ng-click="bool = !bool">Click here to toggle <pre>$scope.bool</pre></div>
 *         </div>
 *
 *     </file>
 *
 *     <file name="select.js">
 *         angular.module('northstar-checkbox').controller('checkboxCtrl', function($scope) {
 *              $scope.bool = true;
 *
 *              $scope.examples = [
 *                  {
 *                      name: 'Bluemix'
 *                  },
 *                  {
 *                      name: 'Watson Analytics'
 *                  },
 *                  {
 *                      name: 'This is disabled',
 *                      disabled: true
 *                  }
 *              ];
 *         });
 *     </file>
 * </example>
 */
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.checkbox' )
        .directive( 'northstarCheckbox', ['$timeout', northstarCheckbox] );

    function northstarCheckbox ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                // Wait until next angular cycle before initialising
                $timeout( function () {
                    IBMCore.common.widget.checkboxradio.init( element );
                } );
            }
        };
    }
} )();
