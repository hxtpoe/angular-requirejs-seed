define([
    'angular',
    'angular-mocks',
    'app'
  ],
    function () {
        'use strict';

        describe('Controller: MainCtrl', function () {

            // load the controller's module
            beforeEach(module('controllers'));

            var MainCtrl;

            // Initialize the controller and a mock scope
            beforeEach(inject(function ($controller) {
                MainCtrl = $controller('MainController', {
                });
              }));

            it('should attach a list of awesomeThings to the scope', function () {
                expect(MainCtrl.awesomeThings.length).toBe(3);
              });
          });
      });