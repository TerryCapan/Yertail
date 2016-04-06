angular.module('yerTales.input',[])

.controller('InputController', function($scope, $location, Input, Tales) {
  $scope.data = {};
  $scope.populateWords = function() {
    $scope.data.randomWords = Input.random(Input.words);
    // console.log(Input.words)
  };
  $scope.addTale = function() {
    var complete = true;
    var current = [
      [$scope.data.randomWords[0], $scope.textZero],
      [$scope.data.randomWords[1], $scope.textOne],
      [$scope.data.randomWords[2], $scope.textTwo],
      [$scope.data.randomWords[3], $scope.textThree]
     ];
    var username = $scope.username;
    for ( var i = 0; i < current.length -1; i++ ) {
      if ( !current[i][1]  || current[i][1] === '' ) {
        complete = false;
      }
    }
    if ( !username  || username === '' ) {
      complete = false;
    }
    if ( complete ) {
        var newTale = {
          tale: current,
          username: username
        }
        console.log(newTale, 'input.js')
        Tales.addTale(newTale);
        $location.path('/tales');
    } else {
      //show div with message to fill out empty inputs
      $scope.incomplete = true;
      console.log('fill em all in, pally')
    }
  };
});