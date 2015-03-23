var app = angular.module("module", []);
var controllers = {};
controllers.SimpleController = function ($scope) {
    $scope.custNames = [
        {name: 'Bob', city: 'New York'},
        {name: 'Todd', city: 'LA'}
    ];
};
app.controller(controllers);
