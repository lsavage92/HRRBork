var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope, Progress){
  $scope.state = {
    img: 0,
    desc: 0,
    btn: 0,
    head: 0
  }

  $scope.headings = [
  'Hack Reactor Forest',
  'Clear() Your Mind'
  ];
  $scope.descriptions = [
  'You find yourself at the beginning of a long, grueling journey that will lead to untold riches and recognition. Do you wish to continue?',
  'As you continue forth, your legs grow tired and your stomach rumbles. You see a strange object glowing off in the distance. '
  ];
  $scope.imgs = [
  {src: '/img/forest_path.png'},
  {src: '/img/jsclearing.png'}
  ];
  $scope.buttonOptions = [
  {one: 'Yes', two: 'No'},
  {one: 'Inspect', two: 'Continue Walking'}
  ];

  $scope.proceed = function(){
    Progress.continue();
    $scope.state.img = Progress.state;
    $scope.state.desc = Progress.state;
    $scope.state.head = Progress.state;
    //$scope.currentButton = Progress.state;
  }
});

myApp.factory('Progress', function(){
  var Progress = {};
  Progress.state = 0;

  Progress.continue = function(){
    Progress.state++;
  };
  Progress.getState = function(){
    return Progress.state;
  };
  return Progress;
});