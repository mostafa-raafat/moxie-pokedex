import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Components
import InformationPokemon from "./InformationPokemon";

// Mocks
import { mockPokemon } from "../../mocks";

// Mock the TypeLabel component
jest.mock('../TypeLabel/TypeLabel', () => ({ type }) => (
  <span>{type.name}</span>
));

describe("InformationPokemon Component", () => {
  test("renders description correctly", () => {
    render(<InformationPokemon pokemon={mockPokemon} />);
    const descriptionElement = screen.getByText(
      /A strange seed was planted on its back at birth./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders types correctly", () => {
    render(<InformationPokemon pokemon={mockPokemon} />);
    const type1Element = screen.getByText(/grass/i);
    const type2Element = screen.getByText(/poison/i);
    expect(type1Element).toBeInTheDocument();
    expect(type2Element).toBeInTheDocument();
  });

  test("renders height and weight correctly", () => {
    render(<InformationPokemon pokemon={mockPokemon} />);
    const heightElement = screen.getByText(/0.7m/i);
    const weightElement = screen.getByText(/6.9kg/i);
    expect(heightElement).toBeInTheDocument();
    expect(weightElement).toBeInTheDocument();
  });

  test("renders abilities correctly", () => {
    render(<InformationPokemon pokemon={mockPokemon} />);
    const ability1Element = screen.getByText(/overgrow/i);
    const hiddenAbilityLabel = screen.getByText(/Hidden Ability/i);
    const ability2Element = screen.getByText(/chlorophyll/i);
    expect(ability1Element).toBeInTheDocument();
    expect(hiddenAbilityLabel).toBeInTheDocument();
    expect(ability2Element).toBeInTheDocument();
  });
});
