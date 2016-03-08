(function () {

    'use strict';

    angular
        .module('ui.container')
        .directive('uiContainer', uiContainerDirective);


    uiContainerDirective.$inject = ['$compile', '$mdMedia', '$animate', '$log'];

    function uiContainerDirective($compile, $mdMedia, $animate, $log) {

        return {
            scope: {
                uiFlex: '@',
                uiShowOn: '@'
            },
            link: link,
            // templateUrl: './app/components/ui-container/ui-container.html',
            restrict: ' EA',
            controller: 'UiContainerCtrl',
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