define(['app'], function (app) {
    app.register.controller('anotherCtrl', function ($scope) {
        $scope.value = 'This is the another page';
    });
});