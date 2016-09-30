'use strict';

var $compile,
    $scope,
    $window,
    scope,
    directiveElement,
    sampleHTML,
    compiledHTML,
    $document,
    windowElement,
    bodyElement;

describe('northstar sticky directive', function() {

   beforeEach(function() {
        module('angular-northstar.sticky');

        inject(function(_$compile_, _$rootScope_, _$window_, _$document_){
            $compile = _$compile_;
            $scope = _$rootScope_;
            $window = _$window_;
            $document = _$document_;
        });

        windowElement = angular.element($window);
        bodyElement = document.querySelector('body');

        sampleHTML = '<div style="padding:200px;"><p>asdasd</p><div id="target" class="cats" northstar-sticky="sticky"></div></div>';
        compiledHTML = getCompiled(sampleHTML);
        directiveElement = compiledHTML.find('#target');

        scope = directiveElement.isolateScope();
    });

    var getCompiled = function getCompiledElement(string){
        var element = angular.element(string);
        var compiledElement = $compile(element)($scope);
        $scope.$digest();
        return compiledElement;
    };

    it('must apply the sticky class', function() {
        windowElement.trigger('scroll');
        expect(directiveElement.hasClass('sticky')).toBeTruthy();

    });
});
