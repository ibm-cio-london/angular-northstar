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
        $scope;

    var directiveElement,
        scope;

    var getCompiled = function getCompiledElement(str, scp){
        var compiledElement = $compile(element)(scp);
        scp.$digest();
        return compiledElement;
    };

    beforeEach(function() {
        module('v18.select');

        inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $scope = _$rootScope_;
        });

        directiveElement = getCompiled('<select v18-select></select>', $scope);
        scope = directiveElement.isolateScope();
    });

    describe('V18 Select Directive', function() {
        console.log(directiveElement);
    });

})();
