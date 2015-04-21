var app = angular.module("Playground", []);

app.directive("dir1", function() {
    return {
        restrict: "E",
        templateUrl: "js/directives/dir1.html"
    };
});
