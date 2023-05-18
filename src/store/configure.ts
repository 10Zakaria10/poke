import createSagaMiddleware from "redux-saga";
import { pokemonReducer } from "./pokemon/slice";

import { configureStore } from "@reduxjs/toolkit";
import sagas from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(sagas);
