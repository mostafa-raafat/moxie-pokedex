import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 flex min-h-24 w-full flex-wrap items-center bg-red-500 p-4 md:justify-center justify-center">
      <Link
        to={"/"}
        className="text-center text-4xl font-black text-slate-50 md:grow"
      >
        <h1>Pokedex</h1>
      </Link>
    </header>
  );
};

export default Header;
