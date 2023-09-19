import { useState, useEffect } from "react";
import { getPokemonList } from "../../services/pokeApi";

import { Pokemon } from "../Pokemon/Pokemon";
import { Button } from "../Buttons/Button/Button";

import styled from "styled-components";

export const PokemonList = () => {
  const [list, setList] = useState([]);
  let [offset, setOffset] = useState(0);
  const limit = 10;

  const fetchPokemonList = async (limit, offset) => {
    const pokemonList = await getPokemonList(limit, offset);
    setList([...list, ...pokemonList]);
  };

  const loadMore = () => {
    setOffset((offset += limit));
    fetchPokemonList(limit, offset);
  };

  useEffect(() => {
    fetchPokemonList(limit, offset);
  }, []);

  return (
    <>
      <Ul>
        {list.map((item, index) => {
          return <Pokemon key={index} data={item} />;
        })}
      </Ul>
      <Button loadMore={loadMore} />
    </>
  );
};

const Ul = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 20px;
  place-items: center;
  padding: 16px 0;
  margin: 48px auto 0;
`;
