import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Components
import HomePage from "@pages/home";

// Mock the useQuery hook
jest.mock("@tanstack/react-query");

describe("HomePage Component", () => {
  test("renders loading spinner when data is loading", () => {
    // Mock useQuery to return loading state
    useQuery.mockReturnValueOnce({ isLoading: true });

    render(<HomePage />);

    // Check if the loading spinner is displayed
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("renders error message when there is an error", async () => {
    // Mock useQuery to return error state
    useQuery.mockReturnValueOnce({ error: new Error("Failed to fetch") });

    render(<HomePage />);

    // Check if the error message is displayed
    await waitFor(() => {
      expect(
        screen.getByText(/There was an error fetching the data/i)
      ).toBeInTheDocument();
    });
  });

  test("renders Pokemon cards when data is loaded", async () => {
    // Mock data for Pokemon list
    const pokemonList = [
      { name: "bulbasaur", sprites: {}, types: [] },
      { name: "charmander", sprites: {}, types: [] },
      { name: "squirtle", sprites: {}, types: [] },
    ];

    // Mock useQuery to return success state with mock data
    useQuery.mockReturnValueOnce({ data: pokemonList });

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Check if Pokemon cards are rendered
    expect(await screen.findByText("bulbasaur")).toBeInTheDocument();
    expect(await screen.findByText("charmander")).toBeInTheDocument();
    expect(await screen.findByText("squirtle")).toBeInTheDocument();
  });
});
