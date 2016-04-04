angular.module('yerTales.tales',[])

.controller('TalesController', function($scope) {
  $scope.data = {};
  // Recipes.getAll();
  //   .then(function(tales) {
  //     $scope.data.tales = tales;
  //   })
  $scope.message = 'hello there tales and stuff';
});