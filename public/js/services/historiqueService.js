    function historiqueService ($http) {
	return {
		ajouter: function (data){
			return $http.post('/historique', data)
		},
		findAll: function (){
			return $http.get('/historique')
		},
		update: function (id, data){
			return $http.put('/historique/'+id, data)
		},
		delete: function (id){
			return $http.delete('/historique/'+id)
		}
	}
}
