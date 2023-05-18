import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchPokemonsRequest, selectPokemons } from "../store/pokemon/slice";

const useFetchPokemons = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectPokemons);

  const sendRequest = useCallback(
    (offset: number = 0) => dispatch(fetchPokemonsRequest({ offset })),
    [dispatch]
  );

  return {
    sendRequest,
    pokemons,
  };
};
export default useFetchPokemons;
