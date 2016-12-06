define(['app'], function (app) {
    app.register.factory('SampleSvc', function () {
        return {
            serviceMethod: function () {
                return 'service method get called';
            }
        }
    });
});