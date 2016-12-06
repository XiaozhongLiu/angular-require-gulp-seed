module.exports = {

    // is debug mode
    DEBUG: true,

    // webapp will listen at this port
    PORT: 3000,

    // secret for cookie and session
    SECRET: '^u-Dont-KNOW$',

    // common libs that needed to move from bower folders
    COMMON_LIBS: [
        'requirejs/require.js',
        'jquery-mobile/external/jquery/jquery.min.js',
        'angular/angular.min.js',
        'angular-ui-router/release/angular-ui-router.min.js'
    ]
};