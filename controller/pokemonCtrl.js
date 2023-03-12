app.controller('pokemonsPaginatedList', function($scope, pokemonService) {
    pokemonService.getAll(0, 25).then(function(data) {
        // Ajout de l'id/imageUrl a chaque pokemon
        data.forEach(pokemon => {
            const pokemonId = pokemon.url.split('/')[6];
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
            pokemon.id = pokemonId;
            pokemon.imageUrl = imageUrl;
        });
        $scope.pokemons = data;
    }).catch(function(data) {
        console.log(data);
    })
});
