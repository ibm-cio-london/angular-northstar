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
    .module('v18',
    [
        'v18.checkbox',
        'v18.localeselector',
        'v18.sticky'
    ])

    .controller('testController', TestController);

    function TestController() {
        this.locales = [
            {
                locale: 'en-us',
                url: '#/en-us'
            },
            {
                locale: 'fr-fr',
                url: '#/fr-fr'
            },
            {
                locale: 'es-la',
                label: 'Latin America Stuff',
                url: '#/es-la'
            }
        ];
    }
})();
