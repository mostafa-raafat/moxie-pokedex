import { Link } from "react-router-dom";

// Components
import TypeLabel from "@components/TypeLabel/TypeLabel";

const PokemonCard = ({ pokemon }) => {
  const { id, name, sprites, types } = pokemon;
  return (
    <Link to={`pokemon/${name}`}>
      <div
        key={id}
        className="hover:shadow-3 flex transform flex-col gap-4 rounded-2xl bg-[#f5f5f5] p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-[102%] hover:cursor-pointer"
      >
        <span className="text-left text-base font-bold">{`${id}`}</span>
        <img
          src={sprites.other?.home["front_default"]}
          alt={name}
          className="mx-auto aspect-square max-h-64 max-w-64 max-[420px]:max-h-40 max-[420px]:max-w-40 max-[300px]:max-h-20 max-[300px]:max-w-20"
          loading="lazy"
        />
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <div className="flex justify-center">
          {types.map((type, index) => (
            <TypeLabel key={index} {...type} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
