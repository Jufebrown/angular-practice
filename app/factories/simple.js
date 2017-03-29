app.factory('simpleFactory', function(){

  var bologna

  return {
    // getter
    getVariable: function() {
      if(bologna) {
        return bologna
      } else {
        return "no bologna"
      }
    },
    // setter
    setVariable: function(newValue) {
      bologna = newValue
    }
  }
})
