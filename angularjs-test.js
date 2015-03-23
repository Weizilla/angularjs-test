var app = angular.module("module", ['ngRoute']);
var controllers = {};

controllers.SimpleController = function ($scope, simpleFactory) {
    $scope.customers = simpleFactory.getCustomers();

    $scope.addCustomer = function() {
        $scope.customers.push(
            {name: $scope.newCustomer.name,
            city: $scope.newCustomer.city,
            age: $scope.newCustomer.age}
        );
    }
};

app.controller(controllers);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {controller: 'SimpleController', templateUrl: 'default.html'})
        .when('/city', {controller: 'SimpleController', templateUrl: 'city.html'})
        .when('/name', {controller: 'SimpleController', templateUrl: 'name.html'})
        .when('/age', {controller: 'SimpleController', templateUrl: 'age.html'})
        .when('/add', {controller: 'SimpleController', templateUrl: 'add.html'})
        .otherwise({redirectTo: '/'});
});

app.factory("simpleFactory", function()
{
    var customers = [
        {name: 'Bob', city: 'New York', age: 'Twenty two'},
        {name: 'Todd', city: 'LA', age: 'Thirty three'},
        {name: 'Joe', city: 'Miami', age: 'Ninety'}
    ];
    var factory = {};
    factory.getCustomers = function() {
        return customers;
    };

    return factory;
});

