/*jshint unused: vars */
define([
    'angular',
    'routeManager',
    'controllers',
    'directives',
    'angular-ui-router'
],
    /*deps*/
    function (angular, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('YoApp', [
                'controllers',
                'directives',
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router'
            ])
            .config(RouteManager);
    });