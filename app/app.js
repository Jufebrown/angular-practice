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
