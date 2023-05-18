import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../store";
import { selectPokemons } from "../store/pokemon/slice";
import { PokemonType } from "../store/pokemon/types";

const useGetPokemon = (pokemonId?: string) => {
  const pokemons = useAppSelector(selectPokemons);
  const [pokemon, setPokemon] = useState<PokemonType | undefined>();

  const getPokemon = useCallback((): void => {
    const pokemonByid = pokemons.findLast(
      (pokemon) => pokemon.id === pokemonId
    );
    setPokemon(pokemonByid);
  }, [pokemons, setPokemon, pokemonId]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);
  return {
    getPokemon,
    pokemon,
  };
};
export default useGetPokemon;
