/**
 * Created by ming on 4/18/15.
 */
angular.module('myApp.detail.service', ['ngResource'])
.factory('getDetail', ['$resource', function ($resource) {
    var detailUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22http://news-at.zhihu.com/api/4/news/:id%22&format=json';
    return $resource(detailUrl, {}, {
        readDetails : {
            method : 'GET',
            timeout : 10000 //10s
        }
    });
}])

.factory('stripImg', function () {
    return function (input) {
        var reImg = /<img\s.+src=("http.+")[^>]*>/img,
            output = input.replace(reImg, '<a href=$1 target="_blank" rel="noreferrer">[图片]</a>');

        return output;
    }
});