import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonInformation from "../PokemonInformation";

test("Should display pokemon information", () => {
  // ARRANGE
  render(<PokemonInformation attribute="attr1" value="val1" />);

  // ASSERT
  expect(screen.getByText("attr1")).toBeInTheDocument();
  expect(screen.getByText("val1")).toBeInTheDocument();
});
