const app = angular.module('monkeyButtApp', ['ngRoute'])

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
  .when('/list/:someVariable', {
    controller: 'DetailCtrl',
    templateUrl: 'partials/detail.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
  $scope.onClickFunction = () => {
    $scope.potatoes = 'you clicked the button'
  }
})

app.controller('ListCtrl', function($scope, $http) {
  console.log('here is the list controller')

  $http.get(`list.json`)
  .then((val) => {
    console.log('list.json', val.data)
    $scope.list = val.data.list
  })
})
