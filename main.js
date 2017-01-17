var app = angular.module('monkeyButtApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })
  .when('/list', {
    controller: 'ListCtrl',
    templateUrl: 'partials/list.html'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
})

app.controller('ListCtrl', function($scope, $http) {
  console.log('here is the list controller')

  $http.get(`list.json`)
  .then(function(val) {
    console.log('list.json', val.data)
    $scope.list = val.data.list
  })
})
