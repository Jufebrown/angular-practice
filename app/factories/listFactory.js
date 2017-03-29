app.factory('listFactory', function($http){
  return {
    getList : () => {
      return $http.get('list.json')
      .then((value) => {
        console.log("value", value)
        return value.data
      })
    }
  };
})
