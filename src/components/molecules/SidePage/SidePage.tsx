import * as React from "react";
import { StyledSidePageContainer } from "./SidePage.style";
import PokemonLogo from "../../atoms/pokemonLogo/PokemonLogo";

const SidePage: React.FC = () => {
  return (
    <StyledSidePageContainer>
      <PokemonLogo />
    </StyledSidePageContainer>
  );
};

export default SidePage;
