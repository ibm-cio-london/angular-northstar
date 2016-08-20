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
     * @name ibm-northstar
     * @requires ibm-northstar.select
     * @requires ibm-northstar.checkbox
     * @requires ibm-northstar.locale
     * @requires ibm-northstar.sticky
     *
     * @description
     * # Angular & Northstar
     *
     * Main module of the application.
     *
     * Contains the other modules as dependencies
     */
    angular.module('ibm-northstar',
    [
//        'ibm-northstar.select',
        'ibm-northstar.checkbox',
//        'ibm-northstar.locale',
//        'ibm-northstar.sticky'
    ]);

    angular.module('ibm-northstar')
    .controller('testController', function() {

    });
})();
