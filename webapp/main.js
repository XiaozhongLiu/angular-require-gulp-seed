require.config({
    baseUrl: './',
    paths: {
        // common libs
        jquery: 'common/jquery.min',
        angular: 'common/angular.min',
        uiRouter: 'common/angular-ui-router.min',

        // configs
        app: 'app',
        router: 'router',

        // pure scripts
        util: 'util',
        ui: 'ui',

        // controllers
        home: 'view/home',
        another: 'view/another'
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
    'router'
], function (require, angular) {
    $(function () {
        angular.bootstrap(this, ['webapp']);
    });
});