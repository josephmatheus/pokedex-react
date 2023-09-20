import { useState, useEffect, useContext } from "react";
import { getPokemon, getPokemonDescription } from "../../services/pokeApi";
import { Link } from "react-router-dom";
import { typeColors } from "../../utils/pokemonTypes";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";
import { ThemeTogglerButton } from "../../components/Buttons/ThemeTogglerButton/ThemeTogglerButton";

export const Details = () => {
  const { theme } = useContext(ThemeContext);
  const pokemonName = window.location.href.split("/details/")[1];
  const [pokemon, setPokemon] = useState({
    name: "",
    id: 0,
    image: "",
    types: [],
    description: "",
    weight: "",
    height: "",
    moves: [],
    abilities: [],
    baseStats: [],
  });

  const fetchPokemon = async () => {
    const pokemonFetched = await getPokemon(pokemonName);
    setPokemon({
      name: pokemonFetched.name[0].toUpperCase() + pokemonFetched.name.slice(1),
      id: pokemonFetched.id.toString().padStart(3, "0"),
      image: pokemonFetched.sprites.other["official-artwork"].front_default,
      types: pokemonFetched.types.map((type) => type.type.name),
      description: await getPokemonDescription(pokemonName),
      weight: pokemonFetched.weight,
      height: pokemonFetched.height,
      moves: pokemonFetched.moves.map((move) => move.move.name),
      abilities: pokemonFetched.abilities.map(
        (ability) => ability.ability.name
      ),
      baseStats: pokemonFetched.stats.map((stat) => {
        const stats = {
          name: stat.stat.name,
          value: stat.base_stat.toString().padStart(3, "0"),
        };
        return stats;
      }),
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Container theme={theme}>
        <DetailHeader theme={theme}>
          <div>
            <LinkStyled to="/" theme={theme}>
              <AiOutlineArrowLeft />
            </LinkStyled>
            <H1 theme={theme}>{pokemon.name}</H1>
          </div>
          <ThemeTogglerButton />
        </DetailHeader>
        <DetailBody theme={theme}>
          <div className="pokemon-image">
            <Img src={pokemon.image} alt={pokemon.name} />
          </div>
          <PokemonDetails
            typecolor={typeColors[pokemon.types[0]]}
            theme={theme}
          >
            <div className="description">
              <p>
                Dex Nº:{" "}
                <Span type={typeColors[pokemon.types[0]]}>{pokemon.id}</Span>
              </p>
              <p>{pokemon.description}</p>
            </div>
            <div className="weight-height">
              <p>
                Weight: <span>{pokemon.weight / 10} Kg</span>
              </p>
              <p>
                Height: <span>{pokemon.height / 10} m</span>
              </p>
            </div>
            <div className="abilities">
              <p>Abilities:</p>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
              </ul>
            </div>
            <div className="types">
              <p>Types:</p>
              <ul>
                {pokemon.types.map((type, index) => (
                  <Li key={index} type={typeColors[type]}>
                    {type}
                  </Li>
                ))}
              </ul>
            </div>
            <div className="base-stats">
              <p>Base Stats:</p>
              <ul>
                {pokemon.baseStats.map((stat, index) => (
                  <li key={index}>
                    <p>{stat.name[0].toUpperCase() + stat.name.slice(1)}</p>{" "}
                    <span>{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </PokemonDetails>
        </DetailBody>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  padding: 24px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DetailHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rem;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const LinkStyled = styled(Link)`
  font-size: 2rem;
  display: flex;
  color: ${({ theme }) => theme.textColor};
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.textColor};
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ type }) => type};
`;

const DetailBody = styled.div`
  width: 85%;
  height: 69.7%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .pokemon-image {
    height: 100%;
    background-color: ${({ theme }) => theme.pokemonCardBackgroundColor};
    border-radius: 8px 0 0 8px;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const PokemonDetails = styled.div`
  background-color: ${({ theme }) => theme.pokemonCardBackgroundColor};
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  border-left: 3px solid ${({ typecolor }) => typecolor};
  padding: 32px;
  color: ${({ theme }) => theme.textColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.pokemonCardBackgroundColor};
    border-radius: 8px;
    width: 18px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ typecolor }) => typecolor};
    border-radius: 16px;
    border: 6px solid ${({ theme }) => theme.pokemonCardBackgroundColor};
  }

  p {
    font-size: 1.6rem;
  }

  .description {
    p:last-child {
      margin-top: 12px;
    }
  }

  .weight-height {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 6em;
    margin-top: 24px;

    span {
      font-weight: 600;
      color: ${({ typecolor }) => typecolor};
    }
  }

  .abilities {
    display: flex;
    margin-top: 24px;
    gap: 16px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      li {
        font-size: 1.6rem;
        font-weight: 600;
        color: ${({ typecolor }) => typecolor};
        border-right: 1px solid ${({ typecolor }) => typecolor};
        padding-right: 8px;

        &:last-child {
          border-right: none;
        }
      }
    }
  }

  .types,
  .base-stats {
    margin-top: 24px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 12px;
    }
  }

  .base-stats {
    ul {
      flex-direction: column;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1.6rem;
        font-weight: 600;
        color: ${({ typecolor }) => typecolor};

        p {
          width: 30%;
          border-right: 1px solid ${({ typecolor }) => typecolor};
        }

        span {
          width: 70%;
          color: ${({ theme }) => theme.textColor};
          padding-left: 16px;
        }
      }
    }
  }
`;

const Li = styled.li`
  width: 100px;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: ${({ type }) => type};
  border-radius: 8px;
  text-align: center;
  color: #fff;
  padding: 4px 0;
`;
