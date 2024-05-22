import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./Header";

describe("Header Component", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the header contains the Pokedex text
    const headerElement = screen.getByText(/Pokedex/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("has correct link to home page", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the Link component is pointing to the home page
    const linkElement = screen.getByRole("link", { name: /Pokedex/i });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
