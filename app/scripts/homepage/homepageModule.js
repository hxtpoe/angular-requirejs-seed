define([
    'angular',
    'scripts/homepage/routeManager',
    'scripts/homepage/homepage-ctrl',
    'angular-ui-router'
],
    /*deps*/
    function (angular, RouteManager, HomepageController)/*invoke*/ {
        'use strict';

        return function () {
            var name = 'homepageModule';

            angular.module(name, [
                    /*angJSDeps*/
                    'ui.router',
                    'mgcrea.ngStrap.modal'
                ])
                .controller("HomepageController", HomepageController)
                .config(RouteManager);

            return name;
        };
    });
