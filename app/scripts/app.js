'use strict';

/**
 * @ngdoc overview
 * @name flipkartApp
 * @description
 * # flipkartApp
 *
 * Main module of the application.
 */
angular
    .module('flipkartApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/trimmers', {
                templateUrl: 'views/trimmers.html',
                controller: 'TrimmersController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });