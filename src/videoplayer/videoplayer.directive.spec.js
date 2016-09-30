/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 * @author: Matt Parish <matthewparish@uk.ibm.com>
 * @author: Tom Ratcliffe <tomratcliffe@uk.ibm.com>
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

    describe('Northstar Videoplayer Directive', function() {
        beforeEach(function() {
            module('angular-northstar.videoplayer');

            inject(function(_$compile_, _$rootScope_, _$timeout_){
                $compile = _$compile_;
                $scope = _$rootScope_;
                $timeout = _$timeout_;
            });

            directiveElement = getCompiled('<div northstar-videoplayer></div>', $scope);
            scope = directiveElement.isolateScope();

            window.jQuery = function() {};

            spyOn(window, 'jQuery').and.returnValue({
                videoplayer: function() { return; }
            });
        });

        it('must not do anything until the next Angular cycle', function() {
            expect(window.jQuery)
                .not.toHaveBeenCalled();
        });

        it('must call the init method after a $timeout', function() {
            $timeout.flush();

            expect(window.jQuery).toHaveBeenCalled();
        });
    });

})();
