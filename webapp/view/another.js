define(['app', 'common'], function (app) {
    app.register.controller('AnotherCtrl', function ($scope, CommonSvc) {
        $scope.value = 'This is the another page';
        console.log(CommonSvc.serviceMethod());
    });
});