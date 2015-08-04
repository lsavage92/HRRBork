var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope){
  $scope.roomNum = 0;

  $scope.currentRoom = {};

  $scope.audioPlay = function() {
    $scope.audio = document.createElement('audio');
    $scope.audio.src = $scope.currentRoom.audioSrc;
    $scope.audio.load();
    $scope.audio.play();
  };
  $scope.getCurrentRoom = function() {
    $scope.currentRoom = rooms[$scope.roomNum];
  };

  $scope.proceedLeft = function() {
    $scope.roomNum = $scope.currentRoom.options[0];
    $scope.getCurrentRoom();
    if($scope.currentRoom.audio){
      $scope.audioPlay();
    }
  };

  $scope.proceedRight = function(){
    $scope.roomNum = $scope.currentRoom.options[1];
    $scope.getCurrentRoom();
    if($scope.currentRoom.audio){
      $scope.audioPlay();
    }
  };

  $scope.getCurrentRoom();
});


