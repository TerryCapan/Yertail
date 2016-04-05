angular.module('yerTales.tales',[])

.controller('TalesController', function($scope, Tales) {
  $scope.data = {};
  // Tales.getAll();
  //   .then(function(tales) {
  //     $scope.data.tales = tales;
  //   })
  $scope.message = 'hello there tales and stuff';
});