/**
 * Created by ming on 4/18/15.
 */
angular.module('myApp.list.service', ['ngResource'])
.factory('listService', ['$resource', function($resource) {
        return $resource('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22http://news-at.zhihu.com/api/4/news/latest%22&format=json&callback=', {}, {
            read : {
                method : 'GET',
                timeout : 10000//10s
            }
        });
    }]);