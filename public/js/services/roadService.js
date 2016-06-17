    function roadService ($http) {
	return {
		ajouter: function (data){
			return $http.post('/voyages', data)
		},
		findAll: function (){
			return $http.get('/voyages')
		},
		update: function (id, data){
			return $http.put('/voyages/'+id, data)
		},
		delete: function (id){
			return $http.delete('/voyages/'+id)
		}
	}
}
