require.config({
    baseUrl: './',
    paths: {
        // common libs
        jquery: 'jquery.min',
        angular: 'angular.min',
        uiRouter: 'angular-ui-router.min',

        // configs
        app: 'common',
        config: 'common',
        router: 'common',

        // pure scripts
        ui: 'common',
        util: 'common',

        // services
        sample: 'service/sample',

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