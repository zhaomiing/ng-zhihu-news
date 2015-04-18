'use strict';

angular.module('myApp.detail', ['ngRoute', 'ngResource', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:newsId', {
    templateUrl: 'components/detail/template.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$routeParams', '$scope', '$resource', '$sanitize', function($routeParams, $scope, $resource) {
      var detailUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22http://news-at.zhihu.com/api/4/news/' + $routeParams.newsId + '%22&format=json';

      $resource(detailUrl, {}, {
        query : {
          method : 'get'
        }
      }).get({}, function (detail) {
        console.log(detail);
        $scope.detail = detail.query.results.json;
          //$scope.body = $sanitize.trustAsHtml($scope.detail.body);
      });
}]);