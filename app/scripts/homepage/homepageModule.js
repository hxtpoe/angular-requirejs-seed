define([
    'angular',
    'scripts/homepage/routeManager',
    'scripts/homepage/homepage-ctrl',
    'angular-ui-router',
    'angular-animate'
],
    /*deps*/
    function (angular, RouteManager, HomepageController)/*invoke*/ {
        'use strict';

        return function () {
            var name = 'homepageModule';

            angular.module(name, [
                    /*angJSDeps*/
                    'ui.router',
                    'ngAnimate'
                ])
                .controller("HomepageController", HomepageController)
                .config(RouteManager);

            return name;
        };
    });
