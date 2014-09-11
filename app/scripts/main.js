/*jshint unused: vars */
require.config({
    baseUrl: './',
    paths: {
        'angular': 'bower_components/angular/angular',
        'sassbootstrap': 'bower_components/sass-bootstrap/dist/js/bootstrap',
        'sass-bootstrap': 'bower_components/sass-bootstrap/dist/js/bootstrap',
        'angular-scenario': 'bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-strap': 'bower_components/angular-strap/dist/angular-strap.min',
        'angular-strap-tpl': 'bower_components/angular-strap/dist/angular-strap.tpl.min'
    },
    shim: {
        'angular': {
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
        'angular-animate': {
            exports: 'angular'
        },
        'angular-strap': [
            'angular',
            'angular-animate'
        ],
        'angular-strap-tpl': [
            'angular',
            'angular-animate',
            'angular-strap'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        }
    },
    priority: [
        'angular',
        'angular-animate'
    ],
    packages: [

    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'scripts/app'
], function (angular, app) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});
