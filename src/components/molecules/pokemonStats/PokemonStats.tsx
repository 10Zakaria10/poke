import * as React from "react";
import PokemonInformation from "../../atoms/pokemonInformation/PokemonInformationAtom";
import { PokemonType } from "../../../store/pokemon/types";
interface IPokemonStatsProps {
  pokemon: PokemonType;
}
const PokemonStats: React.FC<IPokemonStatsProps> = ({ pokemon }) => {
  return (
    <>
      <PokemonInformation attribute="Id" value={pokemon.id} />
      <PokemonInformation attribute="Weight" value={`${pokemon.weight} Kg`} />
      <PokemonInformation attribute="Height" value={`${pokemon.weight} cm`} />
    </>
  );
};

export default PokemonStats;
