app.controller('ListCtrl', function($scope, simpleFactory, listFactory) {

  // $http.get(`list.json`)
  // .then((val) => {
  //   $scope.list = val.data.list
  // })

  $scope.mainVar = simpleFactory.getVariable

  listFactory.getList()
  .then((val) => {
    console.log('val from listctrl', val)
    $scope.list = val.list
  })

})
