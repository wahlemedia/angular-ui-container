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
        .directive('uiContainer', uiContainerDirective);

    uiContainerDirective.$inject = ['$compile', '$mdMedia', '$animate', '$log'];


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
    function uiContainerDirective($compile, $mdMedia, $animate, $log) {

        return {
            scope: {
                uiFlex: '@',
                uiShowOn: '@'
            },
            link: link,
            restrict: ' EA',
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true

        };

        function link(scope, element, attrs, vm) {

            //scope.$on('ui.showSpacer', function (event, data) {
            //
            //    scope.showSpacer = data.showSpacer;
            //
            //    element.parent().find('.ui-spacer')
            //
            //});

           // var breakpoint = 'gt-sm';

            scope.$watch(function () {

                return $mdMedia(scope.vm.uiShowOn);

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

            var spacer = '<div flex="' + scope.vm.uiFlex + '" class="ui-spacer">';

            element.parent().prepend(spacer);
            element.parent().append(spacer);
            element.attr('flex', 'flex');

            $compile(element.contents())(scope);
        }
    }

})();