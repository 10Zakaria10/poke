import React from "react";
import {
  StyledCard,
  StyledCardAvatar,
  StyledCardContent,
} from "./PokemonCardMolecule.style";
import { PokemonType } from "../../../store/pokemon/types";
import { useNavigate } from "react-router-dom";
import PokemonStats from "../pokemonStats/PokemonStats";

interface IPokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const onPokemonCardClick = () => {
    navigate(`pokemon/${pokemon.id}`);
  };

  return (
    <StyledCard onClick={onPokemonCardClick}>
      <StyledCardContent>
        <div>{pokemon.name}</div>
        <StyledCardAvatar>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </StyledCardAvatar>
        <PokemonStats pokemon={pokemon} />
      </StyledCardContent>
    </StyledCard>
  );
};

export default PokemonCard;
