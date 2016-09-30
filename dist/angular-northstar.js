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
    angular
        .module( 'angular-northstar', [
            'angular-northstar.checkbox',
            'angular-northstar.select',
            'angular-northstar.setsameheight',
            'angular-northstar.showhide',
            'angular-northstar.tooltip',
            'angular-northstar.videoplayer',
        ] );
} )();

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

    angular
        .module( 'angular-northstar.checkbox', [] );
} )();

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

    angular
        .module( 'angular-northstar.setsameheight', [] );
} )();

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

    angular
        .module( 'angular-northstar.select', [] );
} )();

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

    angular
        .module( 'angular-northstar.showhide', [] );
} )();

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

    angular
        .module( 'angular-northstar.tooltip', [] );
} )();

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

    angular
        .module( 'angular-northstar.videoplayer', [] );
} )();

/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/**
 * @ngdoc directive
 * @name northstarCheckbox.directive:northstarCheckbox
 * @restrict A
 * @element input
 * @description
 * # Why do we need it?
 * By default, if you include a select dropdown on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the select element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * On the net available Angular cycle, it uses the `IBMCore` method to initialise the select dropdown
 *
 * @author Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 *
 * @example
 * <example module="northstarCheckbox">
 *     <file name="index.html">
 *         <div ng-controller="checkboxCtrl">
 *              <input type="checkbox" id="ex-1">
 *              <label for="ex-1">This checkbox isn't initialised properly</label>
 *
 *              <input northstar-checkbox type="checkbox" id="ex-2">
 *              <label for="ex-2">This checkbox is initialised properly</label>
 *
 *              <input northstar-checkbox ng-model="bool" type="checkbox" id="ex-3">
 *              <label for="ex-3">This checkbox is bound to <pre>$scope.bool</pre></label>
 *              <pre>$scope.bool = {{bool}}</pre>
 *              <div ng-click="bool = !bool">Click here to toggle <pre>$scope.bool</pre></div>
 *         </div>
 *
 *     </file>
 *
 *     <file name="select.js">
 *         angular.module('northstar-checkbox').controller('checkboxCtrl', function($scope) {
 *              $scope.bool = true;
 *
 *              $scope.examples = [
 *                  {
 *                      name: 'Bluemix'
 *                  },
 *                  {
 *                      name: 'Watson Analytics'
 *                  },
 *                  {
 *                      name: 'This is disabled',
 *                      disabled: true
 *                  }
 *              ];
 *         });
 *     </file>
 * </example>
 */
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.checkbox' )
        .directive( 'northstarCheckbox', ['$timeout', northstarCheckbox] );

    function northstarCheckbox ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                // Wait until next angular cycle before initialising
                $timeout( function () {
                    IBMCore.common.widget.checkboxradio.init( element );
                } );
            }
        };
    }
} )();

/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/**
 * @ngdoc directive
 * @name northstarSetsameheight.directive:northstarSetsameheight
 * @restrict A
 * @description
 * # Why do we need it?
 * By default, if you include a set same height widget on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the set same height element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * todo
 *
 * @author Matthew Parish <matthewparish@uk.ibm.com>
 */
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.setsameheight' )
        .directive( 'northstarSetsameheight', ['$timeout', northstarSetsameheight] );

    function northstarSetsameheight ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                function init () {
                    // Wait until next angular cycle before initialising
                    $timeout( function () {
                        jQuery(element).setsameheight();
                    } );
                }

                $scope.$on( 'rebuildSetSameHeight', init );

                init();
            }
        };
    }
} )();

/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/**
 * @ngdoc directive
 * @name angular-northstar.select.directive:northstarSelect
 * @restrict A
 * @element select
 * @description
 * # Why do we need it?
 * By default, if you include a select dropdown on a v18 page which is dynamically injected
 * into the page, it is included too late to be initialised by the `www.js` file.
 *
 * If we don't initialise the select element, the correct styles won't be applied and v18
 * design standards won't be met
 *
 * # What does this directive do?
 * On the next available Angular cycle, it uses the `IBMCore` method to initialise the select dropdown
 *
 * @author Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 *
 * @example
 * <example module="angular-northstar.select">
 *     <file name="index.html">
 *         <div ng-controller="selectCtrl">
 *              <div>
 *                  The below select dropdown doesn't have the directive placed on it:
 *              </div>
 *              <select>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  But this dropdown does...:
 *              </div>
 *              <select northstar-select>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  This whole dropdown is disabled:
 *              </div>
 *              <select northstar-select disabled>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *
 *              <div>
 *                  This is a multiple selection dropdown, still works within Angular application:
 *              </div>
 *              <select northstar-select multiple>
 *                  <option ng-repeat="prod in examples" ng-disabled="prod.disabled">{{prod.name}}</option>
 *              </select>
 *         </div>
 *
 *     </file>
 *
 *     <file name="select.js">
 *         angular.module('angular-northstar.select').controller('selectCtrl', function($scope) {
 *              $scope.examples = [
 *                  {
 *                      name: 'Bluemix'
 *                  },
 *                  {
 *                      name: 'Watson Analytics'
 *                  },
 *                  {
 *                      name: 'This is disabled',
 *                      disabled: true
 *                  }
 *              ];
 *         });
 *     </file>
 * </example>
 */
( function () {
    'use strict';
    angular
        .module( 'angular-northstar.select' )
        .directive( 'northstarSelect', ['$timeout', northstarSelect] );

    function northstarSelect ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                // Wait until next angular cycle before initialising
                $timeout( function () {
                    IBMCore.common.widget.selectlist.init( element );
                } );
            }
        };
    }
} )();

/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

/*

    Note that you must put display:none; on the showhide body
    otherwise it will appear briefly during load.
    Need to fix this ^^^^^^^

*/

( function () {
    'use strict';
    angular
        .module( 'angular-northstar.showhide' )
        .directive( 'northstarShowhide', ['$timeout', northstarShowhide] );

    function northstarShowhide ( $timeout ) {
        return {
            restrict: 'A',
            link: function ( $scope, element ) {
                $timeout( function () {
                    jQuery(element).showhide();
                } );
            }
        };
    }
} )();

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
    angular
        .module('angular-northstar.tooltip')
        .directive('northstarTooltip', ['$timeout', northstarTooltip]);

    function northstarTooltip ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    jQuery(element).tooltip();
                });
            }
        };
    }
})();

/*
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corp. 2016 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication, or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 * @author: Tom Ratcliffe <tomratcliffe@uk.ibm.com>
 **/

(function () {
    'use strict';
    angular
        .module('angular-northstar.videoplayer')
        .directive('northstarVideoplayer', ['$timeout', videoplayer]);

    function videoplayer ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    jQuery(element).videoplayer();
                });
            }
        };
    }
})();
