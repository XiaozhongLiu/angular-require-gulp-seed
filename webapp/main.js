require.config({
    baseUrl: './',
    paths: {
        // common libs
        jquery: 'jquery.min',
        angular: 'angular.min',
        uiRouter: 'angular-ui-router.min',

        // configs
        app: 'app',
        router: 'router',
        config: 'config',

        // pure scripts
        util: 'util',
        ui: 'ui',

        // services
        common: 'service/common',

        // controllers
        home: 'ctrl/home',
        another: 'ctrl/another'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter: {
            deps: ['angular'],
            exports: 'uiRouter'
        }
    }
});

require([
    'require',
    'angular',
    'jquery',
    'config',
    'router'
], function (require, angular) {
    $(function () {
        angular.bootstrap(this, ['webapp']);
    });
});