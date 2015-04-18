'use strict';

// Declare app level module which depends on components, and service
angular.module('myApp', [
  'ngRoute',
  'myApp.list',
  'myApp.detail',
  'myApp.comments',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
