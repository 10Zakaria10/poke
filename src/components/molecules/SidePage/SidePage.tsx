import * as React from "react";
import { StyledSidePageContainer } from "./SidePage.style";
import PokemonLogo from "../../atoms/pokemonLogo/PokemonLogo";

const SidePage: React.FC = () => {
  return (
    <StyledSidePageContainer data-testid="side-page-container">
      <PokemonLogo />
    </StyledSidePageContainer>
  );
};

export default SidePage;
