import { useQuery } from "@tanstack/react-query";

// API
import { fetchPokemonList } from "@api/pokemonApi";

// Common Components
import Header from "@common/Header/Header";
import LoadingSpinner from "@common/LoadingSpinner/LoadingSpinner";

// Components
import PokemonCard from "@components/PokemonCard/PokemonCard";

const HomePage = () => {
  const {
    data: pokemonList = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonList,
  });

  if (isLoading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
        <div className="m-4 flex min-h-48 w-full flex-col items-center justify-center rounded-2xl bg-[#f5f5f5] p-4">
          <h2 className="lg:5xl text-pretty text-center text-4xl font-black">
            There was an error fetching the data
          </h2>
        </div>
      </div>
    );

  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
