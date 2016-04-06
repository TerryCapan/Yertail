angular.module('yerTales.tales',[])

.controller('TalesController', function($scope, Tales, Input) {
  $scope.data = {};
  $scope.getAll = function() {
    $scope.data.tales = Tales.getTales();
  }
});