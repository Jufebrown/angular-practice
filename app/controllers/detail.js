app.controller('DetailCtrl', function($scope, $routeParams, $http) {
  $scope.thatNumber = $routeParams.someVariable
  $http.get(`list.json`)
  .then(function(val) {
    $scope.selectedItem = val.data.list[$scope.thatNumber]
    // $scope.selectedItem = list[$scope.thatNumber]
  })
})
