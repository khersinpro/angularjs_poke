angular.module('pokemonApp').config([
    '$routeProvider', function config($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/showPaginatedPokemons.html'
            }).
            when('/:id', {
                templateUrl: 'templates/showSelectedPokemon.html'
            })
    }
])