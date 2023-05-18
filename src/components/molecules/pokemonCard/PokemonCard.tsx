import React from "react";
import {
  StyledCard,
  StyledCardAvatar,
  StyledCardContent,
} from "./PokemonCard.style";
import { PokemonType } from "../../../store/pokemon/types";
import PokemonStats from "../pokemonStats/PokemonStats";
import PokemonDetails from "../pokemonDetails/PokemonDetails";
import Modal from "../modal/Modal";

interface IPokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledCard onClick={handleOpen}>
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

      <Modal open={open} handleClose={handleClose}>
        <PokemonDetails pokemon={pokemon} />
      </Modal>
    </StyledCard>
  );
};

export default PokemonCard;
