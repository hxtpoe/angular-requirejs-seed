define([], function () {
    'use strict';
    var RouteManager = function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                views: {
                    'appview@': {
                        templateUrl: 'views/main.html',
                        controller: 'MainController as MainCtrl'
                    }
                }
            })
            .state('notFound', {
                url: '/404',
                views: {
                    'appview@': {
                        templateUrl: 'views/404.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/404');
    };

    return ['$stateProvider', '$urlRouterProvider', RouteManager];
});