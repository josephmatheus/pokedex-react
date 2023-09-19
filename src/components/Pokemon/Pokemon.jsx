import { useEffect, useState, useContext } from "react";
import { getPokemon } from "../../services/pokeApi";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";
import { typeColors } from "../../utils/pokemonTypes";

export const Pokemon = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  
  const [pokemon, setPokemon] = useState({
    name: data.name,
    id: 0,
    image: "",
    types: [],
  });

  const fetchPokemon = async () => {
    const pokemonFetched = await getPokemon(data.name);
    setPokemon({
      name: pokemonFetched.name,
      id: pokemonFetched.id.toString().padStart(3, "0"),
      image: pokemonFetched.sprites.other["official-artwork"].front_default,
      types: pokemonFetched.types.map((type) => type.type.name),
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [data.name]);

  return (
    <Li typecolor={typeColors[pokemon.types[0]]} bgcolor={theme.pokemonCardBackgroundColor}>
      <LinkStyled to={`/details/${pokemon.name}`}>
        <Span typecolor={typeColors[pokemon.types[0]]}>#{pokemon.id}</Span>
        <Img src={pokemon.image} alt={pokemon.name} />
        <H2 typecolor={typeColors[pokemon.types[0]]}>
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </H2>
      </LinkStyled>
    </Li>
  );
};

const Li = styled.li`
  border: 2px solid ${({ typecolor }) => typecolor};
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 8px;
  width: 225px;
    &:hover {
      background-color: ${({ typecolor }) => typecolor}ab;
      span {
        color: #fff;
      }
    }
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  color: ${({ typecolor }) => typecolor};
  width: 100%;
  text-align: right;
  padding: 12px 20px;
  font-weight: 500px;
  font-size: 1.8rem;
`;
const Img = styled.img`
  width: 70%;
`;

const H2 = styled.h2`
  background-color: ${({ typecolor }) => typecolor};
  color: #fff;
  width: 101%;
  text-align: center;
  border-radius: 0 0 8px 8px;
  padding: 4px 0;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: 1px;
`;
