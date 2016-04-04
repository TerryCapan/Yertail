angular.module('yerTales', [
  'yerTales.tales',
  'yerTales.input',
  'yerTales.services',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/input', {
      templateUrl: 'input/input.html',
      controller: 'InputController'
    })
    .when('/tales', {
      templateUrl: 'tales/tales.html',
      controller: 'TalesController'
    })
   .otherwise({
    redirectTo: '/tales'
   })
});