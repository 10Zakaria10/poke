import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SidePage from "../SidePage";

test("should display sideplay with logo", () => {
  // ARRANGE
  render(<SidePage />);

  // ASSERT
  expect(screen.getByText("PokemonLogo.svg")).toBeInTheDocument();
  expect(screen.getByTestId("side-page-container")).toBeInTheDocument();
});
