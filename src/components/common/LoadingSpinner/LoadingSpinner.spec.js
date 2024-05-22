import { screen, render } from "@testing-library/react";

// Components
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
  test("renders correctly", () => {
    render(<LoadingSpinner />);

    // Check if the spinner is rendered
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("has correct class names", () => {
    render(<LoadingSpinner />);

    // Check if the spinner has the correct class names
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass(
      "h-48",
      "w-48",
      "animate-spin",
      "rounded-full",
      "border-2",
      "border-t-red-500"
    );
  });
});
