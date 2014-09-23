define([
    'angular',
    'scripts/common/analytics/analytics',
    'angular-animate',
    'angular-ui-router'
],
    function (angular, AnalyticsDirective) {
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
