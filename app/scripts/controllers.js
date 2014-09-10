/*jshint unused: vars */
define([
    'angular',
    'controllers/main'
],
    /*deps*/
    function (angular, MainController)/*invoke*/ {
        'use strict';

        return angular.module('controllers', [])
            .controller('MainController', MainController);
    });