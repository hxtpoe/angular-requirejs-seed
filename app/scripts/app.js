/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
    'use strict';

    return angular.module('connectApp', ['connectApp.controllers.MainCtrl',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute'
        ])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            }).otherwise({
              redirectTo: '/'
            });
          });
  });
