define([''], function () {
    'use strict';

    var AnalyticsDirective = function ($window, $location) {
        return {
            restrict: 'E',
            link: function ($scope) {
                $scope.$on('$stateChangeStart',
                    function () {
                        $window.ga('set', 'page', $location.path());
                        $window.ga('send', 'pageview');
                    });
            }
        };
    };

    return [ "$window", "$location", AnalyticsDirective ];
});