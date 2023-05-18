import { all } from "redux-saga/effects";

import PokemonSagas from "./pokemon/sagas";

export default function* rootSaga() {
  yield all([PokemonSagas()]);
}
