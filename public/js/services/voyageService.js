function voyageService ($http) {
	return {
		ajouter: function (data){
			return $http.post('/voyage', data)
		},
		findAll: function (){
			return $http.get('/voyage')
		},
		update: function (id, data){
			return $http.put('/voyage/'+id, data)
		},
		delete: function (id){
			return $http.delete('/voyage/'+id)
		}
	}
}