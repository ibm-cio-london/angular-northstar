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

    var $compile;
    var $scope;

    var element;


    var getCompiled = function getCompiledElement ( str, scp ) {
        var compiledElement = $compile( str )( scp );
        scp.$digest();
        return compiledElement;
    };

    describe( 'Northstar Twisty Directive', function () {
        beforeEach( function () {

            angular.element.fn.twisty = jasmine.createSpy( 'twisty' );

            module( 'angular-northstar.twisty' );

            inject( function ( _$compile_, _$rootScope_ ) {
                $compile = _$compile_;
                $scope = _$rootScope_;
            } );

            $scope.clickFunction = function clickFunction () {
                $scope.testBool = true;
            };

            var elementString =
                '<ul id="testFixture" data-widget="twisty" class="ibm-twisty" northstar-twisty>' +
                    '<li>' +
                        '<span class="ibm-twisty-head">' +
                            '<a id="testFixtureLink" ng-click="clickFunction();">Twisty</a>' +
                        '</span>' +
                    '</li>' +
                '</ul>';

            element = getCompiled( elementString, $scope );

        } );

        it( 'must call the twisty method', function () {
            expect( angular.element.fn.twisty ).toHaveBeenCalled();
        } );

        it( 'must not break any directives or interactions on the element', function () {

            expect( $scope.testBool ).toBe( undefined );

            element.find( '#testFixtureLink' ).click();

            $scope.$apply();

            expect( $scope.testBool ).toBe( true );
        } );
    } );

} )();

