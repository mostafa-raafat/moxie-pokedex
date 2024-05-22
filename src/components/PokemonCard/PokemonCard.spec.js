import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

// Components
import PokemonCard from "./PokemonCard";

// Mocks
import { mockPokemon } from "../../mocks";

// Mock the TypeLabel component
jest.mock("../TypeLabel/TypeLabel", () => ({ type }) => (
  <span>{type.name}</span>
));

describe("PokemonCard Component", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <PokemonCard pokemon={mockPokemon} />
      </Router>
    );

    // Check if the pokemon id is rendered
    const idElement = screen.getByText(/1/i);
    expect(idElement).toBeInTheDocument();

    // Check if the pokemon name is rendered
    const nameElement = screen.getByText(/bulbasaur/i);
    expect(nameElement).toBeInTheDocument();

    // Check if the pokemon image is rendered
    const imgElement = screen.getByAltText(/bulbasaur/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
    );

    // Check if the types are rendered
    const type1Element = screen.getByText(/grass/i);
    const type2Element = screen.getByText(/poison/i);
    expect(type1Element).toBeInTheDocument();
    expect(type2Element).toBeInTheDocument();
  });

  test("has correct link to pokemon detail page", () => {
    render(
      <Router>
        <PokemonCard pokemon={mockPokemon} />
      </Router>
    );

    // Check if the Link component is pointing to the correct pokemon detail page
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/pokemon/bulbasaur");
  });
});
