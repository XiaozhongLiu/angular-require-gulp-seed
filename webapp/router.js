define(['app', 'util'], function (app, util) {
    app.config([
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$stateProvider',
        '$urlRouterProvider',
        function ($controllerProvider,
                  $compileProvider,
                  $filterProvider,
                  $provide,
                  $stateProvider,
                  $urlRouterProvider) {

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                controller: 'homeCtrl',
                templateUrl: 'view/home.html',
                resolve: util.loadCtrl('home')
            }).state('another', {
                url: '/another',
                controller: 'anotherCtrl',
                templateUrl: 'view/another.html',
                resolve: util.loadCtrl('another')
            });
        }]);
});