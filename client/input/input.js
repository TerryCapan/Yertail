angular.module('yerTales.input',[])

.controller('InputController', function($scope, Input, Tales) {
  $scope.data = {};
  $scope.populateWords = function() {
    $scope.data.randomWords = Input.random(Input.words);
    // console.log(Input.words)
  };
});