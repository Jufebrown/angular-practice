app.controller('MainCtrl', function($scope, simpleFactory, myFactory) {
  $scope.potatoes = 'baked!'
  $scope.onClickFunction = () => {
  }
  $scope.mainVar = simpleFactory.getVariable()
  $scope.setVariable = function(newVariable) {
    console.log('new variable is', newVariable)
    simpleFactory.setVariable(newVariable)
  }
})
