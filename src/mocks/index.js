export const mockStats = [
  { stat: { name: "hp" }, base_stat: 45 },
  { stat: { name: "attack" }, base_stat: 49 },
  { stat: { name: "defense" }, base_stat: 49 },
  { stat: { name: "special-attack" }, base_stat: 65 },
  { stat: { name: "special-defense" }, base_stat: 65 },
  { stat: { name: "speed" }, base_stat: 45 },
];

export const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      },
    },
  },
  species: {
    flavor_text_entries: [
      {
        flavor_text: "A strange seed was planted on its back at birth.",
        language: { name: "en" },
      },
    ],
  },
  abilities: [
    { ability: { name: "overgrow" }, is_hidden: false },
    { ability: { name: "chlorophyll" }, is_hidden: true },
  ],
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  height: 7,
  weight: 69,
};
