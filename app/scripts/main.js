/*jshint unused: vars */
require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        sassbootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'angularUiRouter'
        },
        'angular-cookies': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'angular-resource': [
            'angular'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        }
    },
    priority: [
        'angular'
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'angular-ui-router'
], function (angular, app) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});
