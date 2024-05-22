import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

// Components
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  test("renders 404 heading", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const headingElement = screen.getByText(/404/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders Page Not Found message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const messageElement = screen.getByText(/Page Not Found/i);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders Go back to Home link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Go back to Home/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
