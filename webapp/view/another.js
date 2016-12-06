define(['app', 'sample'], function (app) {
    app.register.controller('AnotherCtrl', function ($scope, SampleSvc) {
        $scope.value = 'This is the another page';
        console.log(SampleSvc.serviceMethod());
    });
});