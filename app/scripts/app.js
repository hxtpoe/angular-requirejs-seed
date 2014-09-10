define([
    'angular',
    'scripts/routeManager',
    'scripts/common/commonModule',
    'scripts/homepage/homepageModule',
    'angular-ui-router'
],
    /*deps*/
    function (angular, RouteManager, CommonModule, HomepageModule)/*invoke*/ {
        'use strict';

        return angular.module('YoApp', [
                CommonModule(),
                HomepageModule(),
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router'
            ])
            .config(RouteManager);
    });