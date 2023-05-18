import { createBrowserRouter } from "react-router-dom";
import PokemonListTemplate from "./components/templates/pokemonList/PokemonListTemplate";
import PokemonDetailTemplate from "./components/templates/pokemonDetaills/PokemonDetailsTemplate";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListTemplate />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetailTemplate />,
  },
]);

export default routes;
