(function () {

    'use strict';

    angular
        .module('ui.container', [])
        .controller('UiContainerCtrl', UiContainerCtrl);

    UiContainerCtrl.$inject = ['$mdMedia', '$scope', '$log'];

    function UiContainerCtrl($mdMedia, $scope, $log) {

        var vm = this;
        vm.uiShowSpacer = true;

        var breakpoint = 'gt-sm';

        //$scope.$watch(function () {
        //
        //    return $mdMedia(breakpoint);
        //
        //}, function (newValue, oldValue) {
        //
        //    $scope.$emit('ui.showSpacer', {
        //        showSpacer: newValue
        //    });
        //
        //    vm.uiShowSpacer = newValue;
        //    //   $scope.$apply();
        //
        //    //$log.log(newValue, oldValue);
        //});


        //
        //$scope.$watch("vm.uiShowSpacer", function handleUiShowChange(newValue, oldValue) {
        //
        //    $log.log('change:', newValue, oldValue);
        //
        //    $log.info('watch',$mdMedia(breakpoint), breakpoint);
        //
        //    vm.uiShowSpacer = $mdMedia(breakpoint);
        //    $scope.uiShowSpacer = $mdMedia(breakpoint);
        //
        //
        //    $log.log(vm.uiShowSpacer);
        //});


        vm.setBreakpoint = function (value) {
            breakpoint = value;
        };

        //vm.uiShowSpacer = function() {
        //     return vm.uiShowSpacer;
        //};

        return {
            setBreackpoint: function (value) {
                vm.setBreakpoint(value)
            }
        }
    }

})();