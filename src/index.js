var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
    })
    .when("/about", {
      templateUrl: "./pages/about.html",
    })
    .when("/contact", {
      templateUrl: "./pages/contact.html",
    })
    .otherwise({
      template: "<h1>Khong tim thay Page</h1>",
    });
});
