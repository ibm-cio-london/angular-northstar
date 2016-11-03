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
        .directive( 'northstarTwisty', ['$compile', northstarTwisty] );

    function northstarTwisty ( $compile ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {

                /*
                    Initialise the twisty on this element
                */
                angular.element( element ).twisty();

                /*
                    The Northstar JavaScript wraps Twisty widgets in additional HTML, and in the
                    process it breaks any directives that might have been added to twisty elements
                    (angular-translate, for example).

                    This line runs $compile on the element contents after the twisty widget has
                    been initialised, to make sure all of our directives still work
                */
                $compile( element.contents() )( $scope );
            }
        };
    }
} )();
