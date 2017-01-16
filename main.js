var app = angular.module('monkeyButtApp', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })
  .when('/list', {
    controller: 'listCtrl',
    templateUrl: 'partials/list.html'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
})

app.controller('listCtrl', function($scope) {
  console.log('here is the list controller')
})
