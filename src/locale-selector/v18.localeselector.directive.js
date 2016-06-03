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
    angular
    .module('v18.localeselector')
    .directive('v18Localeselector', [ v18Locale ]);

    function v18Locale() {

        return {
            priority: 1000,
            restrict: 'A',
            link: function( scope, element, attrs) {
                scope.$watch(attrs.v18Localeselector, function( langs ) {
                    if ( langs !== undefined ) {

                        var head = angular.element(document).find('head');

                        // Inject each of the languages as a <link> element with
                        // correct attributes into the head of the page
                        angular.forEach(langs, function(lang) {

                            lang.url = lang.url || '';
                            lang.locale = lang.locale || '';
                            lang.label = lang.label || false;

                            if ( true ) {
                                var locale = '<link rel="alternate" href="' + lang.url + '"' +
                                    ' hreflang="' + lang.locale + '"' +
                                    ' data-label="' + lang.label + '"' +
                                    ' />';

                                head.prepend(locale);
                            } else {
                                console.log(lang);
                            }
                        });

                        //IBMCore.common.module.localeselector.setupLocaleSelector();
                    }
                });
            }
        };
    }
})();
