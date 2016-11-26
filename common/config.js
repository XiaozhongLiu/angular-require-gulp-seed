require.config({
    baseUrl: '/angular-require-seed/view/',
    paths: {
        // common libs
        'jquery': '../common/bower_components/jquery-mobile/external/jquery/jquery.min',
        'angular': '../common/bower_components/angular/angular.min',
        'uiRouter': '../common/bower_components/angular-ui-router/release/angular-ui-router',

        // configs
        'app': '../common/app',
        'router': '../common/router',
        'bootstrap': '../common/bootstrap',

        // pure scripts
        'lib': '../script/lib',
        'ui': '../script/ui',

        // controllers
        'home': 'home',
        'another': 'another'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular'],
            exports: 'uiRouter'
        }
    },
    deps: ['bootstrap']
});