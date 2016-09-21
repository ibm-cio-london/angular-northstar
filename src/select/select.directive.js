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
 * @name angular-northstar.select.directive:v18Select
 * @restrict A
 * @element select
 * @description
 * # Why do we need it?
 * By default, if you include a select dropdown on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the select element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * On the next available Angular cycle, it uses the `IBMCore` method to initialise the select dropdown
 *
 * @author Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 *
 * @example
 * <example module="angular-northstar.select">
 *     <file name="index.html">
 *         <div ng-controller="selectCtrl">
 *              <div>
 *                  The below select dropdown doesn't have the directive placed on it:
 *              </div>
 *              <select>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  But this dropdown does...:
 *              </div>
 *              <select v18-select>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  This whole dropdown is disabled:
 *              </div>
 *              <select v18-select disabled>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  This is a multiple selection dropdown, still works within Angular application:
 *              </div>
 *              <select v18-select multiple>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *         </div>
 *
 *     </file>
 *
 *     <file name="select.js">
 *         angular.module('angular-northstar.select').controller('selectCtrl', function($scope) {
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
(function () {
    'use strict';
    angular
        .module('angular-northstar.select')
        .directive('northstarSelect', ['$timeout', northstarSelect]);

    function northstarSelect ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                // Wait until next angular cycle before initialising
                $timeout(function () {
                    IBMCore.common.widget.selectlist.init(element);
                });
            }
        };
    }
})();
