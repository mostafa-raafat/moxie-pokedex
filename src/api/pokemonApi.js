export const fetchPokemonList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  const detailedPokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonDetailsResponse = await fetch(pokemon.url);
      return pokemonDetailsResponse.json();
    })
  );
  return detailedPokemonList;
};

export const fetchPokemonDetails = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
