/* eslint-disable no-param-reassign */

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { PokemonType } from "./types";

type PokemonState = {
  loading: boolean;
  pokemons: PokemonType[];
};

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,

  reducers: {
    setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    fetchPokemonsRequest: (
      state,
      action: PayloadAction<{ offset: number }>
    ) => {},
    fetchPokemonsSuccess: (state, action: PayloadAction<PokemonType[]>) => {
      if (
        !state.pokemons.find((pokemon) => pokemon.id === action.payload[0].id)
      ) {
        state.pokemons.push(...action.payload);
      }
      state.loading = false;
    },
  },
});

export const { setLoading, fetchPokemonsRequest, fetchPokemonsSuccess } =
  pokemonSlice.actions;

export const selectPokemons = (state: RootState): PokemonType[] =>
  state.pokemonReducer.pokemons;

export const selectLoading = (state: RootState): boolean =>
  state.pokemonReducer.loading;

export const { reducer: pokemonReducer } = pokemonSlice;
