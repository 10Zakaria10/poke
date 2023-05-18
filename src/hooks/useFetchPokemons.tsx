import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  fetchPokemonsRequest,
  selectLoading,
  selectPokemons,
  setLoading,
} from "../store/pokemon/slice";

const useFetchPokemons = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectPokemons);
  const loading = useAppSelector(selectLoading);

  const sendRequest = useCallback(
    (offset: number = 0) => {
      dispatch(setLoading({ loading: true }));
      dispatch(fetchPokemonsRequest({ offset }));
    },
    [dispatch]
  );

  return {
    sendRequest,
    pokemons,
    loading,
  };
};
export default useFetchPokemons;
