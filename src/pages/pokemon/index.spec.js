import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Components
import PokemonDetailPage from "@pages/pokemon";

// Mocks
import { mockPokemon } from "../../mocks";

// Mock the useParams and useQuery hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
jest.mock("@tanstack/react-query");

describe("PokemonDetailPage Component", () => {
  beforeEach(() => {
    // Reset mock implementation before each test
    useParams.mockReset();
    useQuery.mockReset();
  });

  test("renders loading spinner when data is loading", () => {
    // Mock useParams to return name parameter
    useParams.mockReturnValue({ name: "bulbasaur" });
    // Mock useQuery to return loading state
    useQuery.mockReturnValueOnce({ isLoading: true });

    render(<PokemonDetailPage />);

    // Check if the loading spinner is displayed
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("renders error message when there is an error", async () => {
    // Mock useParams to return name parameter
    useParams.mockReturnValue({ name: "bulbasaur" });
    // Mock useQuery to return error state
    useQuery.mockReturnValueOnce({ error: new Error("Failed to fetch") });

    render(<PokemonDetailPage />);

    // Check if the error message is displayed
    await waitFor(() => {
      expect(screen.getByText(/Pokemon not found/i)).toBeInTheDocument();
    });
  });

  test("renders Pokemon details when data is loaded", async () => {
    // Mock useParams to return name parameter
    useParams.mockReturnValue({ name: "bulbasaur" });
    // Mock data for Pokemon details

    // Mock useQuery to return success state with mock data
    useQuery.mockReturnValueOnce({ data: mockPokemon });

    render(
      <BrowserRouter>
        <PokemonDetailPage />
      </BrowserRouter>
    );

    // Check if Pokemon details are rendered
    expect(await screen.findByText("N°1 bulbasaur")).toBeInTheDocument();
    expect(screen.getByAltText("images of bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("Types")).toBeInTheDocument();
    expect(screen.getByText(mockPokemon.height / 10 + "m")).toBeInTheDocument();
    expect(
      screen.getByText(mockPokemon.weight / 10 + "kg")
    ).toBeInTheDocument();
  });
});
