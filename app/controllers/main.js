app.controller('MainCtrl', function($scope, simpleFactory) {
  console.log('anything')
  $scope.potatoes = 'baked!'
  $scope.onClickFunction = (newVal) => {
    console.log("newVal", newVal)
    simpleFactory.setVariable(newVal)
  }
  $scope.mainVar = simpleFactory.getVariable()
})
