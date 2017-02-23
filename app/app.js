"use strict";

var app = angular.module("RouteApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
  when('/Hwy66',{
    templateUrl: "partials/Hwy66.html",
    controller: "Hwy66Ctrl"
  }).
  when('/PacificCoast', {
  	templateUrl: "partials/PacificCoast.html",
  	controller: "PacificCoastCtrl"
  }).
  otherwise('/Hwy66');
});