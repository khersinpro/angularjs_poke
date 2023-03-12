app.factory('pokemonService', function($http, $q) {
    return {
        getAll: function(offset, limit) {
            var deferred = $q.defer();
            $http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
                function successCallback(data, status) {
                    deferred.resolve(data.data.results);
                }, function errorCallback(data, status) {
                    deferred.reject('Une erreur s\'est produite.')
                }
            )
            return deferred.promise;
        }
    }
})