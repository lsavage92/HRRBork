var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope){
  $scope.roomNum = 0;

  $scope.currentRoom = {};

  $scope.getCurrentRoom = function() {
    $scope.currentRoom = rooms[$scope.roomNum];
  }

  $scope.getCurrentRoom();
});


