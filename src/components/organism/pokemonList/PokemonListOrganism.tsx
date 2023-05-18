import * as React from "react";
import PokemonCard from "../../molecules/pokemonCard/PokemonCardMolecule";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetchPokemons";
import { PokemonType } from "../../../store/pokemon/types";

const PokemonList: React.FC = () => {
  const { sendRequest, pokemons } = useFetch();
  const [offset, setOffset] = useState(0);

  const fetchMoreData = () => {
    const nextoffSet = 10 + offset;
    setOffset(nextoffSet);
    sendRequest(nextoffSet);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {pokemons.map((pokemon: PokemonType) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;
