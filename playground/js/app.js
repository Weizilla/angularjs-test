var app = angular.module("Playground", ['ngRoute']);

app.directive("dir1", function() {
    return {
        restrict: "E",
        templateUrl: "js/directives/dir1.html"
    };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/main.html"
    })
    .when("/other", {
        templateUrl: "views/other.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});
