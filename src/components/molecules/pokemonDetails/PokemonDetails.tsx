import * as React from "react";
import {
  StyledDetailsCard,
  StyledDetailsContainer,
  StyledDetailsAvatar,
} from "./PokemonDetails.style";
import { PokemonType } from "../../../store/pokemon/types";
import PokemonStats from "../pokemonStats/PokemonStats";

interface IPokemonDetailsProps {
  pokemon: PokemonType;
}
const PokemonDetails: React.FC<IPokemonDetailsProps> = ({ pokemon }) => {
  return (
    <StyledDetailsCard>
      <StyledDetailsContainer>
        <h2>{pokemon.name}</h2>
        <StyledDetailsAvatar>
          <img
            alt="frontImage"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
        </StyledDetailsAvatar>
        <PokemonStats pokemon={pokemon} />
      </StyledDetailsContainer>
    </StyledDetailsCard>
  );
};

export default PokemonDetails;
