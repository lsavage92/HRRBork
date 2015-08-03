var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope){
  $scope.heading = "Hack Reactor Forest";
  $scope.currentImage = 0;
  $scope.currentDescription = 0;
  $scope.currentButton = 0;

  $scope.descriptions = [
  'You find yourself at the beginning of a long, grueling journey that will lead to untold riches and recognition. Do you wish to continue?',
  'As you continue forth, your legs grow tired and your stomach rumbles. You see a strange object glowing off in the distance. '
  ]
  $scope.buttonOptions = [
  {one: 'Yes', two: 'No'},
  {one: 'Inspect', two: 'Continue Walking'}
  ]
  $scope.imgs = [
  {src: '/img/forest_path.png'},
  {src: '/img/jsclearing.png'}
  ];


});

