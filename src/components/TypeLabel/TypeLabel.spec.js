import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Utils
import { colorsType } from "@utils/const";

// Components
import TypeLabel from "./TypeLabel";

describe("TypeLabel Component", () => {
  const type = { name: "fire" };

  test("renders correctly", () => {
    render(<TypeLabel type={type} />);

    // Check if the type label contains the type name
    const typeLabelElement = screen.getByText(/fire/i);
    expect(typeLabelElement).toBeInTheDocument();
  });

  test("has correct class names", () => {
    render(<TypeLabel type={type} />);

    // Check if the span has the correct class names
    const typeLabelElement = screen.getByText(/fire/i);
    expect(typeLabelElement).toHaveClass(colorsType[type.name]);
  });
});
