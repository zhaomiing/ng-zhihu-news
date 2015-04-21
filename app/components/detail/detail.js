'use strict';

angular.module('myApp.detail', ['ngRoute', 'myApp.detail.service', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:newsId', {
    templateUrl: 'components/detail/template.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$routeParams', '$scope', 'detailService', '$sanitize', function($routeParams, $scope, detailService) {
        detailService.readDetails({id : $routeParams.newsId}, function (detail) {
        $scope.detail = detail.query.results.json;
      });
}]);