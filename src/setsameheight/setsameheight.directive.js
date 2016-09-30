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
 * @name v18SetSameHeight.directive:northstarSetsameheight
 * @restrict A
 * @description
 * # Why do we need it?
 * By default, if you include a set same height widget on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the set same height element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * todo
 *
 * @author Matthew Parish <matthewparish@uk.ibm.com>
 */
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.setsameheight' )
        .directive( 'northstarSetsameheight', ['$timeout', northstarSetsameheight] );

    function northstarSetsameheight ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                function init () {
                    // Wait until next angular cycle before initialising
                    $timeout( function () {
                        element.setsameheight();
                    } );
                }

                $scope.$on( 'rebuildSetSameHeight', init );

                init();
            }
        };
    }
} )();
