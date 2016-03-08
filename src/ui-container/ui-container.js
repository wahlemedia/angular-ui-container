/**
 * ui.container  - v0.2.1
 *
 * Copyright 2016 - wahlemedia
 * Licence under MIT
 */

(function () {

    'use strict';

    /**
     * @ngdoc module
     * @name ui.container
     *
     * @description an ui container that extends the angular-material
     * framework an creates an wrapper on the main content
     *
     */

    angular
        .module('ui.container', [])
        .directive('uiContainer', uiContainerDirective)
        .provider('$uiContainer', uiContainerProvider);

    uiContainerDirective.$inject = ['$compile', '$mdMedia', '$animate', '$uiContainer', '$log'];


    /**
     * @ngdocs directive
     * @name uiContainerDirective
     * @module ui.container
     *
     * @restrict EA
     *
     * @description create an ui-container directive that create an flex-container
     * around the main aria and creates an spacer left and right of the container.
     *
     * The Spacer scales within the application an hides on a breakboint less
     * then angular materials 'gt-sm'.
     *
     * @param {integer} uiFlex the width of the spacer
     * @param {string} uiShowOn the default hide aria
     *
     */
    function uiContainerDirective($compile, $mdMedia, $animate, $uiContainer, $log) {

        return {
            scope: {},
            link: link,
            restrict: ' EA'
        };

        function link(scope, element, attrs) {

            $log.log('uiFlex:', $uiContainer.getUiFlex());

            scope.$watch(function () {

                return $mdMedia($uiContainer.getUiShowOn());

            }, function (isShown, oldValue) {

                var e = element.parent().find('.ui-spacer');

                angular.forEach(e, function(value) {
                    $animate[isShown ? 'removeClass' : 'addClass' ](value, 'hide');
                });

            });

            var spacer = '<div flex="' + $uiContainer.getUiFlex() + '" class="ui-spacer">';

            element.parent().prepend(spacer);
            element.parent().append(spacer);
            element.attr('flex', 'flex');

            $compile(element.contents())(scope);
        }
    }

    /**
     * @ngdocs provider
     * @name uiContainerProvider
     * @module ui.container
     *
     * @description a provider to configure the flex width of the spacer element.
     *
     */
    function uiContainerProvider() {
        this.uiFlex = 20;
        this.uiShowOn = 'gt-sm';

        this.setUiFlex = function (value) {
            this.uiFlex = value;
        };

        this.setUiShowOn = function (value) {
            this.uiShowOn = value;
        };

        this.$get = function () {
            var self = this;
            return {
                getUiFlex: function () {
                    return self.uiFlex;
                },
                getUiShowOn: function () {
                    return self.uiShowOn;
                }
            }
        };
    }

})();