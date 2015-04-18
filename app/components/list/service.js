/**
 * Created by ming on 4/18/15.
 */
angular.module('myApp.list.service', ['ngResource'])
.factory('listService', ['$resource', function($resource) {
        return $resource('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22http%3A%2F%2Fnews-at.zhihu.com%2Fapi%2F4%2Fnews%2Flatest%22%20and%20itemPath%20%3D%20%22json.stories%22&format=json&callback=', {}, {
            query : {
                method : 'get'
            }
        });
    }]);