/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.sticky' )
        .directive( 'northstarSticky', ['$window', northstarSticky] );

    function northstarSticky ( $window ) {
        return {
            scope: {
                northstarSticky: '@',
                stickyOtherElement: '@'
            },
            link: function ( scope, element ) {
                var windowEl = angular.element( $window );
                var body = angular.element( 'body' );
                var offset;

                var handler = function () {

                    offset = 0;

                    var hidingSitenavOnSmall = true;

                    if ( !hidingSitenavOnSmall || ( !angular.element( 'html' ).hasClass( 'ibm-grid-small' ) && body.hasClass( 'ibm-sitenav-menu-sticky' ) ) ) {
                        offset += 51;
                    }

                    if ( body.hasClass( 'ibm-masthead-sticky-showing' ) ) {
                        offset += 51;
                    }
                    var diff = windowEl.scrollTop() - element.offset().top + offset;
                    if ( diff >= 0 ) {
                        element.addClass( scope.northstarSticky );

                        if ( scope.stickyOtherElement ) {
                            angular.element( scope.stickyOtherElement ).addClass( scope.northstarSticky );
                        }
                    } else {
                        element.removeClass( scope.northstarSticky );

                        if ( scope.stickyOtherElement ) {
                            angular.element( scope.stickyOtherElement ).removeClass( scope.northstarSticky );
                        }
                    }
                };

                windowEl.on( 'scroll', scope.$apply.bind( scope, handler ) );

                scope.$on( 'destroy', function () {
                    windowEl.unbind( 'scroll', handler );
                } );

            }
        };
    }

} )();
