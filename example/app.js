(function () {

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
    }

    function AppCtrl() {

    }
})();