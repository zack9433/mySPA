'use strict';

angular.module('mySPA', [
  'ngSanitize',
  'ui.router'
])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
