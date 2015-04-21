app.factory("forecast", ["$http", function($http) {
    return $http.get("http://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json")
        .success(function(data) {
            console.log("f success");
            return data;
        })
        .error(function(err) {
            return err;
        })
        .success(function(data) {
            console.log("f2 success");
            return data;
        });
}]);

app.factory("forecast2", function() {
    return "FORECAST 2";
});
