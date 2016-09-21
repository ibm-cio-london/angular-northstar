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

    var checkboxElement;
    var radioElement;

    var getCompiled = function getCompiledElement ( str, scp ) {
        var compiledElement = $compile( str )( scp );
        scp.$digest();
        return compiledElement;
    };

    describe( 'Northstar Checkbox Directive', function () {
        beforeEach( function () {
            module( 'angular-northstar.checkbox' );

            window.IBMCore = {
                common: {
                    widget: {
                        checkboxradio: {
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

            checkboxElement = getCompiled( '<input type="checkbox" northstar-checkbox ng-model="checkboxValue" ng-disabled="checkboxDisabled">yo<span>something else</span></input>', $scope );

            radioElement = getCompiled( '<input class="hey" type="radio" northstar-checkbox ng-model="radioValue" >yo<span>something else</span></input>', $scope );

            // set scope variables
            $scope.checkboxValue = false;
            $scope.checkboxDisabled = false;
            $scope.radioValue = false;

        } );

        it( 'must not do anything until the next Angular cycle', function () {
            expect( IBMCore.common.widget.checkboxradio.init )
                .not.toHaveBeenCalled();
        } );

        it( 'must call the IBMCore init method after a $timeout', function () {
            $timeout.flush();

            expect( IBMCore.common.widget.checkboxradio.init )
            .toHaveBeenCalledWith( jasmine.objectContaining( {
                0: checkboxElement[0],
                length: 1
            } ) );

            expect( IBMCore.common.widget.checkboxradio.init )
            .toHaveBeenCalledWith( jasmine.objectContaining( {
                0: radioElement[0],
                length: 1
            } ) );
        } );
    } );

} )();
