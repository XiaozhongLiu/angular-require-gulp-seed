define(['app'], function (app) {
    app.register.factory('CommonSvc', function () {
        return {
            serviceMethod: function () {
                return 'service method get called';
            }
        }
    });
});