import { mockPokemon } from "../mocks";

import { fetchPokemonList, fetchPokemonDetails } from "./pokemonApi";

describe("fetchPokemonList", () => {
  test("fetches a list of Pokemon", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1" },
          ],
        }),
    });

    // Call the fetchPokemonList function
    const pokemonList = await fetchPokemonList();

    // Assert
    expect(pokemonList).toHaveLength(1); 
    expect(pokemonList[0].results[0].name).toBe("bulbasaur"); 
  });

  test("throws an error if network response is not ok", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    // Call the fetchPokemonList function and expect it to throw an error
    await expect(fetchPokemonList()).rejects.toThrow(
      "Network response was not ok"
    );
  });
});

describe("fetchPokemonDetails", () => {
  test("fetches details of a specific Pokemon", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve(mockPokemon),
    });

    // Call the fetchPokemonDetails function
    const pokemonDetails = await fetchPokemonDetails(mockPokemon.name);

    // Assert
    expect(pokemonDetails.name).toBe(mockPokemon.name);
    expect(pokemonDetails.id).toBe(1);
    expect(pokemonDetails.types).toHaveLength(2);
    expect(pokemonDetails.types[0].type.name).toBe("grass");
    expect(pokemonDetails.types[1].type.name).toBe("poison");
  });

  test("throws an error if network response is not ok", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    // Call the fetchPokemonDetails function and expect it to throw an error
    await expect(fetchPokemonDetails("bulbasaur")).rejects.toThrow(
      "Network response was not ok"
    );
  });
});
