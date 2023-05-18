import * as React from "react";
import PokemonDetails from "../../organism/pokemonDetails";
import RedLayout from "../../../layout/RedLayout";
import { StyledPokemonDetailsContainer } from "./PokemonDetailsTemplate.style";

const PokemonDetailTemplate: React.FC = () => {
  return (
    <RedLayout>
      <StyledPokemonDetailsContainer>
        <PokemonDetails />
      </StyledPokemonDetailsContainer>
    </RedLayout>
  );
};

export default PokemonDetailTemplate;
