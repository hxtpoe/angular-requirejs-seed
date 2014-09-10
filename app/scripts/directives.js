/*jshint unused: vars */
define([
    'angular',
    'directives/analytics',
    'angular-ui-router'
],
    /*deps*/
    function (angular, AnalyticsDirective)/*invoke*/ {
        'use strict';

        return angular.module('directives', [
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router'
            ])
            .directive("AnalyticsDirective", AnalyticsDirective);
    });