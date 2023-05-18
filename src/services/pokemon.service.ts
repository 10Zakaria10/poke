const getPokemon = async (offset: number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
    );
    const data = await response.json();
    const pokemonList = data.results;

    const pokemonDataArray = await Promise.all(
      pokemonList.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        return {
          id: pokemonData.id.toString(),
          name: pokemonData.name,
          height: pokemonData.height,
          weight: pokemonData.weight,
        };
      })
    );

    return pokemonDataArray;
  } catch (error) {
    console.log("Error fetching Pokémon:", error);
  }
};

const services = {
  getPokemon,
};

export default services;
