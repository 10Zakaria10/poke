import React from "react";
import { StoreProvider } from "./store/provider";
import PokemonListTemplate from "./components/templates/pokemonList/PokemonListTemplate";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <PokemonListTemplate />
    </StoreProvider>
  );
};

export default App;
