var app = angular.module('monkeyButtApp', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
})
