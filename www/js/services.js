angular.module('starter.services', [])
    .factory('BackendAPI', function ($http) {
        var baseURL = "https://api.backendless.com/62AB2F7D-8191-93B4-FF59-A751D7C4A600/51CDA945-467B-8919-FF4F-76D928F09000/";
        var header = {'Content-Type': 'application/json'};
        return {
            providers: function () {
                return $http.get(baseURL + "data/ServiceProviders", header);
            },

            get_sections: function () {
                return $http.get(baseURL + "data/Sections", header);
            }
        };
    })

    .factory('NewsFactory', ['$http', function ($http) {
        var rss_converter = "https://rss2json.com/api.json?rss_url=";
        return {
            getNewsTitles: function (url) {
                return $http.get(rss_converter + encodeURIComponent(url));
            }
        };
    }])
