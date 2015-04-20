'use strict';

// Declare app level module which depends on components, and service
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.list',
  'myApp.detail',
  'myApp.comments'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
