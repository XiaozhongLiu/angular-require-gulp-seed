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
                controller: 'HomeCtrl',
                templateUrl: 'view/home.html',
                resolve: util.lazyLoad('home')
            }).state('another', {
                url: '/another',
                controller: 'AnotherCtrl',
                templateUrl: 'view/another.html',
                resolve: util.lazyLoad('another')
            });
        }]);
});