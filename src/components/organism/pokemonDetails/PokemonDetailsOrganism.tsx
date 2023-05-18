import * as React from "react";
import PokemonDetailsMolecule from "../../molecules/pokemonDetails";
import { useNavigate, useParams } from "react-router-dom";
import useGetPokemon from "../../../hooks/useGetPokemon";
import { StyledGoBack } from "./PokemonDetailsOrganism.style";

const PokemonDetails: React.FC = () => {
  const { id } = useParams();
  const { pokemon } = useGetPokemon(id);
  const navigate = useNavigate();

  const onNavigationBackCLick = () => {
    navigate(-1);
  };

  if (!pokemon) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <PokemonDetailsMolecule pokemon={pokemon} />
      <StyledGoBack onClick={onNavigationBackCLick}>Go back </StyledGoBack>
    </div>
  );
};

export default PokemonDetails;
