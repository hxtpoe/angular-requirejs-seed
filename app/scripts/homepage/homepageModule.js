define([
    'angular',
    'scripts/homepage/routeManager',
    'scripts/homepage/homepage-ctrl',
    'angular-animate',
    'angular-ui-router'
],
    function (angular, RouteManager, HomepageController) {
        'use strict';

        return function () {
            var name = 'homepageModule';

            angular.module(name, [
                    'ui.router',
                    'ngAnimate'
                ])
                .controller("HomepageController", HomepageController)
                .config(RouteManager);

            return name;
        };
    });
