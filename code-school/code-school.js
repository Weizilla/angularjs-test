var app = angular.module("store", []);

app.controller("FoodController", function(){
    this.newFood = {}
    this.foods = [
        {name: "Taco", rating: 3, size: "Large" },
        {name: "Burrito", rating: 2, size: "Medium" },
        {name: "Salsa", rating: 4, size: "Mini" },
        {name: "Guac", rating: 1, size: "Small" }
    ];

    this.addFood = function()
    {
        this.newFood.createdOn = Date.now();
        this.foods.push(this.newFood);
        this.newFood = {}
    };
});
