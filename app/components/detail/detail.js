'use strict';

angular.module('myApp.detail', ['ngRoute', 'myApp.detail.service', 'myApp.detail.filter', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:newsId', {
    templateUrl: 'components/detail/template.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$routeParams', '$route', '$scope', 'detailService', '$sanitize',
    function($routeParams, $route, $scope, detailService) {
        detailService.readDetails({id : $routeParams.newsId}, function (detail) {
            $scope.detail = stripImg(detail.query.results.json.body);
        });
        //console.log($route);
}]);

angular.module('myApp.detail.filter', []).filter('stripImg', function () {
    return stripImg(input);
});

function stripImg(input) {
    var reImg = /<img\s.+src=("http.+")[^>]*>/img,
        output = input.replace(reImg, '<a href=$1 target="_blank" rel="noreferrer">[图片]</a>');

    return output;
}