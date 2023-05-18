import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonLogo from "../PokemonLogo";

test("Should display pokemonLogo ", () => {
  // ARRANGE
  render(<PokemonLogo />);

  // ASSERT
  expect(screen.getByText("PokemonLogo.svg")).toBeInTheDocument();
});
