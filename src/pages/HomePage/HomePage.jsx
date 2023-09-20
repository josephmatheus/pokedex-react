import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonList } from "../../components/PokemonList/PokemonList";

import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Div bgcolor={theme.background}>
        <Header />
        <PokemonList />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 24px 16px;
  background-color: ${({ bgcolor }) => bgcolor};
`;
