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
    .module('v18.checkbox')
    .directive('v18Checkbox', ['$timeout', v18Select]);

    function v18Select ($timeout) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function ($scope, element, $attrs, ngModel) {
                console.log(element);
                // Wait until next angular cycle before initialising
                $timeout(function() {
                    IBMCore.common.widget.checkboxradio.init(element);

                    /*
                        Below is adapted from: https://github.com/fronteed/icheck/issues/62#issuecomment-91805046
                     */
                    var value = $attrs.value;
                    $scope.$watch($attrs.ngModel, function(){
                        angular.element(element).iCheck('update');
                    });

                    $scope.$watch($attrs.ngDisabled, function(newValue) {
                        angular.element(element).iCheck(newValue ? 'disable':'enable');
                        angular.element(element).iCheck('update');
                    });

                    return angular.element(element)
                    .on('ifToggled', function(event) {
                        if (angular.element(element).attr('type') === 'checkbox' && $attrs.ngModel) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(event.target.checked);
                            });
                        }
                        if (angular.element(element).attr('type') === 'radio' && $attrs.ngModel) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(value);
                            });
                        }
                    })
                    .on('ifChanged', function(event) {
                        if (angular.element(element).attr('type') === 'checkbox' && $attrs.ngModel) {
                            $scope.$apply(function() {
                                return ngModel.$setViewValue(event.target.checked);
                            });
                        }
                        if (angular.element(element).attr('type') === 'radio' && $attrs.ngModel) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(value);
                            });
                        }
                    })
                    .on('ifClicked', function() {
                        console.log('iCheck click');
                    });
                });
            }
        };
    }

})();
