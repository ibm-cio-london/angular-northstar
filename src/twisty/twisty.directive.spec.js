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
    var $timeout;


    var getCompiled = function getCompiledElement ( str, scp ) {
        var compiledElement = $compile( str )( scp );
        scp.$digest();
        return compiledElement;
    };

    describe( 'Northstar Twisty Directive', function () {
        beforeEach( function () {
            module( 'angular-northstar.twisty' );

            inject( function ( _$compile_, _$rootScope_, _$timeout_ ) {
                $compile = _$compile_;
                $scope = _$rootScope_;
                $timeout = _$timeout_;
            } );

            getCompiled( '<span data-widget="twisty" northstar-twisty></span>', $scope );

            window.jQuery = function () {};

            spyOn( window, 'jQuery' ).and.returnValue( {
                twisty: function () { return; }
            } );
        } );

        it( 'must not do anything until the next Angular cycle', function () {
            expect( window.jQuery )
                .not.toHaveBeenCalled();
            console.log( 'test' );
        } );

        it( 'must call the jQuery method after a $timeout', function () {
            $timeout.flush();

            expect( window.jQuery ).toHaveBeenCalled();
        } );
    } );

} )();
