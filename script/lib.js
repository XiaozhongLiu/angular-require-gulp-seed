/**
 * common logic
 */
define({
    /**
     * load a controller module dynamically, return the resolve part of a state
     * @param name :controller mudule name
     */
    loadCtrl: function (name) {
        return {
            init: ['$q', function ($q) {
                var defer = $q.defer();
                require([name], function () {
                    defer.resolve();
                });
                return defer.promise;
            }]
        }
    }
});