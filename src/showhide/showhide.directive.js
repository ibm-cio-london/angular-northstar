/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/*

    Note that you must put display:none; on the showhide body
    otherwise it will appear briefly during load.
    Need to fix this ^^^^^^^

*/

( function () {
    'use strict';
    angular
        .module( 'angular-northstar.showhide' )
        .directive( 'northstarShowhide', ['$timeout', northstarShowhide] );

    function northstarShowhide ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                $timeout( function () {
                    element.showhide();
                } );
            }
        };
    }
} )();
