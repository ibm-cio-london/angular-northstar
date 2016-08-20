/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/
(function () {
    'use strict';

    var $compile,
        $scope,
        $timeout;

    var directiveElement,
        scope;

    var getCompiled = function getCompiledElement(str, scp){
        var compiledElement = $compile(str)(scp);
        scp.$digest();
        return compiledElement;
    };

    fdescribe('V18 Select Directive', function() {
        beforeEach(function() {
            module('ibm-northstar.select');
            window.IBMCore = {
                common: {
                    widget: {
                        selectlist: {
                            init: jasmine.createSpy('init')
                        }
                    }
                }
            };



            inject(function(_$compile_, _$rootScope_, _$timeout_){
                $compile = _$compile_;
                $scope = _$rootScope_;
                $timeout = _$timeout_;
            });

            directiveElement = getCompiled('<select v18-select></select>', $scope);
            scope = directiveElement.isolateScope();
        });

        it('must not do anything until the next Angular cycle', function() {
            expect(IBMCore.common.widget.selectlist.init)
                .not.toHaveBeenCalled();
        });

        it('must call the IBMCore init method after a $timeout', function() {
            $timeout.flush();

            expect(IBMCore.common.widget.selectlist.init)
                .toHaveBeenCalledWith(directiveElement);
        });
    });

})();
