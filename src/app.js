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

    /**
     * @ngdoc object
     * @name v18
     * @requires v18Select
     * @requires v18Checkbox
     * @requires v18Localeselector
     * @requires v18Sticky
     *
     * @description
     * # Angular & v18
     *
     * Main module of the application.
     *
     * Contains the other modules as dependencies
     */
    angular.module('v18',
    [
        'v18Select',
        'v18Checkbox',
        'v18Localeselector',
        'v18Sticky'
    ]);
})();
