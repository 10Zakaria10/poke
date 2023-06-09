import * as React from "react";
import PokemonCard from "../../molecules/pokemonCard/PokemonCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetchPokemons";
import { PokemonType } from "../../../store/pokemon/types";
import Loading from "../../atoms/Loading/Loading";

const PokemonList: React.FC = () => {
  const { sendRequest, pokemons, loading } = useFetch();
  const [offset, setOffset] = useState(0);

  const fetchMoreData = () => {
    const nextoffSet = 10 + offset;
    setOffset(nextoffSet);
    sendRequest(nextoffSet);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (loading) {
    return <Loading />;
  }
  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchMoreData}
      hasMore={false}
      loader={<h4>Loading...</h4>}
    >
      {pokemons.map((pokemon: PokemonType, index: number) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </InfiniteScroll>
  );
};

export default PokemonList;
