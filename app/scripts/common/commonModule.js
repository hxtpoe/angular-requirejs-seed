define([
    'angular',
    'scripts/common/analytics/analytics'
],
    /*deps*/
    function (angular, AnalyticsDirective)/*invoke*/ {
        'use strict';

        return function () {
            var name = 'commonModule';

            angular.module(name, [])
                .directive('AnalyticsDirective', AnalyticsDirective);
            return name;
        };
    });
