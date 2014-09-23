define([
    'angular',
    'scripts/common/analytics/analytics',
    'angular-ui-router',
    'angular-animate'
],
    /*deps*/
    function (angular, AnalyticsDirective)/*invoke*/ {
        'use strict';

        return function () {
            var name = 'commonModule';

            angular.module(name, [
                    'ui.router',
                    'ngAnimate'
                ])
                .directive('AnalyticsDirective', AnalyticsDirective);
            return name;
        };
    });
