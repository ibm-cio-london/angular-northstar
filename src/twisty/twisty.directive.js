/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 * @author: Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 **/

( function () {
    'use strict';
    angular
        .module( 'angular-northstar.twisty' )
        .directive( 'northstarTwisty', ['$timeout', northstarTwisty] );

    function northstarTwisty ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                // Wait until next angular cycle before initialising
                $timeout( function () {
                    jQuery( element ).twisty();
                } );
            }
        };
    }
} )();
