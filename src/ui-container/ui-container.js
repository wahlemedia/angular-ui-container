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
     * then angular materials 'gt-md'.
     *
     * @param {integer} uiFlex the width of the spacer
     * @param {string} uiShowOn the default hide aria
     *
     */
    function uiContainerDirective($compile, $mdMedia, $animate, $uiContainer, $log) {

        return {
            scope: {
                uiShowOn: '@'
            },
            link: link,
            restrict: ' EA'
        };

        function link(scope, element, attrs) {

            $log.log('uiFlex:', $uiContainer.getUiFlex());

            scope.$watch(function () {

                return $mdMedia(scope.uiShowOn);

            }, function (isShown, oldValue) {

                var e = element.parent().find('.ui-spacer');

                //  $animate[isShown ? 'addClass' : 'revmoveClass'](element, 'hide');
                if(isShown) {
                    $animate.removeClass(e[0], 'hide');
                    $animate.removeClass(e[1], 'hide');
                } else {
                    $animate.addClass(e[0], 'hide');
                    $animate.addClass(e[1], 'hide');
                }

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

        this.setUiFlex = function(value) {
            this.uiFlex = value;
        };

        this.$get = function() {
            var self = this;
            return {
                getUiFlex: function() {
                    return self.uiFlex;
                }
            }
        };
    }

})();