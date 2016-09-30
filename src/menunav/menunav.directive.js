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
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.menunav' )
        .directive( 'northstarMenunav', ['$timeout', northstarMenunav] );

    function northstarMenunav ( $timeout ) {
        return {
            restrict: 'E',
            templateUrl: 'angular-northstar.menunav.tpl',
            replace: true,
            scope: true,
            controller: ['$scope', function ( $scope ) {
                var self = this;

                self.init = function() {
                    $timeout( function () {
                        IBMCore.common.module.sitenavmenu.init();
                        IBMCore.common.module.mobilemenu.init();
                        IBMCore.common.module.mobilemenu.addSiteNavigation();
                    } );
                };

                self.init();

                $scope.$watch(function() {
                    return self.navData;
                }, function( newVal ) {
                    console.log(newVal);
                    self.init();
                });
            }],
            controllerAs: 'northstarMenunavCtrl',
            bindToController: {
                navData: '='
            }
        };
    }
} )();
