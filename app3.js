var app = angular.module("myapp", [ "ngRoute" ]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template: "<h1>Welcome to my Website!!</h1><p>Welcome to my Website!!</p>"
    })
    .when("/profile", {
        templateUrl:"profile.html"
    })
    .when("/users", {
        templateUrl:"users.html"
        controller:"usercontroller"
    });
});

app.controller("usercontroller", function($scope) {
    $scope.pageTitle = 'Users - list - page';
});