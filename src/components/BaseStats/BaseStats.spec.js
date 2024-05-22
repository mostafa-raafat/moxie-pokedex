import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PolarArea } from "react-chartjs-2";

// Components
import BaseStats from "./BaseStats";

// Mocks
import { mockStats } from "../../mocks";

// Mock the PolarArea chart component
jest.mock("react-chartjs-2", () => ({
  PolarArea: jest.fn(() => null),
}));

describe("BaseStats Component", () => {
  test("renders correctly", () => {
    render(<BaseStats stats={mockStats} />);

    // Check if the heading is rendered
    const headingElement = screen.getByText(/Base Stats/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders PolarArea chart with correct data", () => {
    render(<BaseStats stats={mockStats} />);

    // Check if the PolarArea chart is rendered with correct data
    expect(PolarArea).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          labels: mockStats.map((stat) => stat.stat.name),
          datasets: [
            {
              label: "Stats",
              data: mockStats.map((stat) => stat.base_stat),
              backgroundColor: expect.any(Array),
              borderColor: expect.any(Array),
              borderWidth: 1,
            },
          ],
        },
      }),
      expect.any(Object) // options object
    );
  });
});
