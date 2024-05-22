import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// API
import { fetchPokemonDetails } from "@api/pokemonApi";

// Common Components
import Header from "@common/Header/Header";
import LoadingSpinner from "@common/LoadingSpinner/LoadingSpinner";

// Components
import InformationPokemon from "@components/InformationPokemon/InformationPokemon";
import BaseStats from "@components/BaseStats/BaseStats";

const PokemonDetailPage = () => {
  const { name: paramsName } = useParams();
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonDetails", paramsName],
    queryFn: () => fetchPokemonDetails(paramsName),
  });

  if (isLoading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
        <div className="m-4 flex min-h-48 w-full items-center justify-center rounded-2xl bg-[#f5f5f5] p-4">
          <h2 className="lg:5xl text-pretty text-center text-4xl font-black">
            Pokemon not found
          </h2>
        </div>
      </div>
    );

  const { id, name, sprites, stats = [] } = pokemon;

  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
        <div className="m-4 w-full rounded-2xl bg-[#f5f5f5] p-4">
          <h2 className="lg:5xl text-center text-4xl font-black">
            N°{id} {name}
          </h2>
          <div className="flex flex-col justify-center gap-4 md:mt-4 md:flex-row">
            <div className="flex w-full justify-center md:w-1/2">
              <img
                src={sprites.other?.home.front_default}
                alt={`images of ${name}`}
                className="inline-block aspect-square h-fit w-full md:max-w-[512px]"
              />
            </div>
            <section className="flex flex-col justify-start gap-4 p-4 md:w-1/2">
              <InformationPokemon pokemon={pokemon} />
            </section>
          </div>
          <section className="flex w-full flex-col items-start gap-4 p-4 sm:items-center">
            <BaseStats stats={stats} />
          </section>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;
