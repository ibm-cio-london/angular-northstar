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

    var $compile;
    var $scope;
    var $timeout;

    var directiveElement;

    var getCompiled = function getCompiledElement ( str, scp ) {
        var compiledElement = $compile( str )( scp );
        scp.$digest();
        return compiledElement;
    };

    describe( 'Northstar Select Directive', function () {
        beforeEach( function () {
            module( 'angular-northstar.select' );
            window.IBMCore = {
                common: {
                    widget: {
                        selectlist: {
                            init: jasmine.createSpy( 'init' )
                        }
                    }
                }
            };

            inject( function ( _$compile_, _$rootScope_, _$timeout_ ) {
                $compile = _$compile_;
                $scope = _$rootScope_;
                $timeout = _$timeout_;
            } );

            directiveElement = getCompiled( '<select northstar-select></select>', $scope );
        } );

        it( 'must not do anything until the next Angular cycle', function () {
            expect( IBMCore.common.widget.selectlist.init )
                .not.toHaveBeenCalled();
        } );

        it( 'must call the IBMCore init method after a $timeout', function () {
            $timeout.flush();

            expect( IBMCore.common.widget.selectlist.init )
                .toHaveBeenCalledWith( jasmine.objectContaining( {
                    0: directiveElement[0],
                    length: 1
                } ) );
        } );
    } );

} )();
