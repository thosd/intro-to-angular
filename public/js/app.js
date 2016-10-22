(function() {

  angular.module('intro', [])
        .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //what tools the MainController function needs

  function MainController($scope){ //$scope is our bridge to the dom
    console.log('Now main controlling...');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }
}());
