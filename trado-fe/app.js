var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "login.html",
      controller: "LoginController",
    })
    .when("/home", {
      templateUrl: "home.html",
      controller: "HomeController",
    })
    .when("/bookings", {
      templateUrl: "bookings.html",
      controller: "BookingsController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
