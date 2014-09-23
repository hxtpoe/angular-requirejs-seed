define([
    'angular',
    'scripts/routeManager',
    'scripts/common/commonModule',
    'scripts/homepage/homepageModule',
    'angular-ui-router',
    'angular-animate',
    'angular-strap',
    'angular-strap-tpl',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource'
],
    function (angular, RouteManager, CommonModule, HomepageModule) {
        'use strict';

        return angular.module('YoApp', [
                'ngAnimate',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router',
                'mgcrea.ngStrap.modal',
                CommonModule(),
                HomepageModule()
            ])
            .config(RouteManager)
            .config(["$modalProvider", function ($modalProvider) {
                angular.extend($modalProvider.defaults, {
                    html: true
                });
            }]);
    }
)
;