/**
 * Created by ming on 4/18/15.
 */
angular.module('myApp.comments', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/comments', {
            templateUrl : 'components/comments/template.html',
            controller : 'CommentsCtrl'
        });
    }])
    .controller('CommentsCtrl', [function () {

    }]);
