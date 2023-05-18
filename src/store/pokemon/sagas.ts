import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPokemonsRequest, fetchPokemonsSuccess } from "./slice";
import pokemonService from "../../services/pokemon.service";
import { PokemonType } from "./types";

export function* fetchPokemons(
  action: ReturnType<typeof fetchPokemonsRequest>
) {
  try {
    const { offset } = action.payload;
    const data: PokemonType[] = yield call(pokemonService.getPokemon, offset);
    yield put(fetchPokemonsSuccess(data));
  } catch (error) {
    // console.log("Error");
  }
}

export default function* fetchPokemonsSaga() {
  yield takeEvery(fetchPokemonsRequest, fetchPokemons);
}
