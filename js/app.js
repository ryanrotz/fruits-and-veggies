/* setup your angular app here */

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope) {
  // $scope.fruitsArray = fruits;
  // $scope.vegetablesArray = vegetables;
  $scope.foodArray = fruits.concat(vegetables);

  $scope.fruitsArray = [];
  $scope.vegetablesArray = [];

 $scope.moveLeft = function(idx) {
  $scope.fruitsArray.push($scope.foodArray[idx]);
  $scope.foodArray.splice(idx, 1);
 };

  $scope.moveRight = function(idx) {
    $scope.vegetablesArray.push($scope.foodArray[idx]);
    $scope.foodArray.splice(idx, 1);
  };

  $scope.backLeft = function(idx) {
    $scope.foodArray.push($scope.vegetablesArray[idx]);
    $scope.vegetablesArray.splice(idx, 1);
  };

  $scope.backRight = function(idx) {
    $scope.foodArray.push($scope.fruitsArray[idx]);
    $scope.fruitsArray.splice(idx, 1);
  };


}]);


// Switched from directives to having everything in the controller

// app.directive('leftArrow', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     templateUrl: 'templates/leftArrow.html'
//   }
// })

// app.directive('rightArrow', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     templateUrl: 'templates/rightArrow.html'
//   }
// })




// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
