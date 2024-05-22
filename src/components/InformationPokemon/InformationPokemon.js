import TypeLabel from "@components/TypeLabel/TypeLabel";

const InformationPokemon = ({ pokemon }) => {
  const { species, abilities, types, height, weight } = pokemon;

  return (
    <>
      <h3 className="text-xl font-extrabold">Description</h3>
      <p className="text-lg">
        {species?.flavor_text_entries
          ?.find((entry) => entry.language.name === "en")
          ?.flavor_text.replace("\f", " ")}
      </p>
      <h3 className="text-xl font-extrabold">
        {(types?.length || 0) > 1 ? "Types" : "Type"}
      </h3>
      <div className="flex justify-start">
        {types?.map((type, index) => (
          <TypeLabel key={index} {...type} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold">Height</h3>
          <p className="text-lg">{(height || 0) / 10}m</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold">Weight</h3>
          <p className="text-lg">{(weight || 0) / 10}kg</p>
        </div>
      </div>
      <section className="flex flex-col">
        <h3 className="text-xl font-extrabold">Abilities</h3>
        <div className="flex flex-col gap-4">
          {abilities?.map((ability, index) => (
            <div key={index}>
              {ability.is_hidden && (
                <p className="text-lg font-bold">Hidden Ability</p>
              )}
              <p className="text-lg">{ability.ability.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InformationPokemon;
