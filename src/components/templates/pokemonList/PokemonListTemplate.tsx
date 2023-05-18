import * as React from "react";
import PokemonList from "../../organism/pokemonList";
import RedLayout from "../../../layout/RedLayout";

const PokemonListTemplate: React.FC = () => {
  return (
    <RedLayout>
      <PokemonList />
    </RedLayout>
  );
};

export default PokemonListTemplate;
