/**
 * common logic
 */
define(function () {

    /**
     * list of cached css files
     */
    var loadedCSS = [];

    var self = {
        /**
         * load resources of a controller module dynamically, return the resolve part of a state
         * @param name: controller name
         */
        lazyLoad: function (name) {
            return {

                /**
                 * load a css file dynamically, return a promise
                 */
                loadCSS: ['$q', function ($q) {
                    var defer = $q.defer();

                    // base css file should complete loading before any other one.
                    self.appendCSS(config.BASE_CSS, function () {
                        self.appendCSS(name, defer.resolve);
                    });

                    return defer.promise;
                }],

                /**
                 * load a controller module dynamically, return a promise
                 */
                loadCtrl: ['$q', function ($q) {
                    var defer = $q.defer();
                    require([name], defer.resolve);
                    return defer.promise;
                }]
            };
        },

        /**
         * append a css file to page head
         * @param name
         * @param callback
         */
        appendCSS: function (name, callback) {
            // load for only once
            if (loadedCSS.indexOf(name) == -1) {
                var path = '../css/' + name + '.css';

                var link = document.createElement("link");
                link.href = path;
                link.type = "text/css";
                link.rel = "stylesheet";
                link.onload = callback;
                document.head.appendChild(link);

                loadedCSS.push(name);
            } else {
                callback();
            }
        }
    };

    return self;
});