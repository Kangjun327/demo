
angular.module('app',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',
                {
                    url:'/home',
                    templateUrl:'data-view/home.html',
                    controller:'homeCtrl'
                })
            .when('/pie',
                {
                    url:'/pie',
                    templateUrl:'data-view/pie.html',
                    controller:'pieCtrl'
                })
            .when('/bar',
                {
                url:'/bar',
                templateUrl:'data-view/bar.html',
                controller:'barCtrl'
            })
            .when('/line',
                {
                url:'/line',
                templateUrl:'data-view/line.html',
                controller:'lineCtrl'
            })
            .otherwise({redirectTo:'/'});
    }]);




