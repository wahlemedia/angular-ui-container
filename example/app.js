(function () {

    'use strict';

    angular
        .module('app', [
            'ngAria',
            'ngMessages',
            'ngAnimate',
            'ngMaterial',
            'ui.container'
        ])
        .config(AppConfig)
        .controller('AppCtrl', AppCtrl);

    function AppConfig($uiContainerProvider) {

        $uiContainerProvider.setUiFlex(20);
        $uiContainerProvider.setUiShowOn('gt-sm');
    }

    function AppCtrl() {

    }

})();