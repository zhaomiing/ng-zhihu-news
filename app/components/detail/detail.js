'use strict';

angular.module('myApp.detail', ['ngRoute', 'myApp.detail.service', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:newsId', {
    templateUrl: 'components/detail/template.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$routeParams', '$route', '$scope', 'getDetail', 'stripImg', '$log',
    function($routeParams, $route, $scope, getDetail, stripImg, $log) {
        getDetail.readDetails({id : $routeParams.newsId}, function (detail) {
            $log.info(detail);
            $scope.detail = stripImg(detail.query.results.json.body);
        });
}]);