app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        console.log("c success");
        $scope.fiveDay = data;
    }); 
}]);
