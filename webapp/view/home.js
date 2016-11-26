define(['app'], function (app) {
    app.register.controller('homeCtrl', function ($scope) {
        $scope.value = 'This is the home page';
    });
});