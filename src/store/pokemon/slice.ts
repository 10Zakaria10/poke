/* eslint-disable no-param-reassign */

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { PokemonType } from "./types";

type PokemonState = {
  value: number;
  pokemons: PokemonType[];
};

const initialState: PokemonState = {
  value: 0,
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,

  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
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
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
} = pokemonSlice.actions;

export const selectPokemons = (state: RootState): PokemonType[] =>
  state.pokemonReducer.pokemons;

export const { reducer: pokemonReducer } = pokemonSlice;
