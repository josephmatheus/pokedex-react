import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { ThemeTogglerButton } from "../Buttons/ThemeTogglerButton/ThemeTogglerButton";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderStyled>
      <LinkStyled to="/">
        <Svg
          color={theme.pokeballIconColor}
          xmlns="http://www.w3.org/2000/svg"
          width="206"
          height="208"
          viewBox="0 0 206 208"
          fill="none"
        >
          <path
            d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532056C7.26233 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532056C7.26233 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
          />
        </Svg>
        <H1 color={theme.textColor}>Pokédex</H1>
      </LinkStyled>
      <ThemeTogglerButton />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  color: ${({ color }) => color};
  font-size: 3.6rem;
  padding: 0 16px;
`;

const Svg = styled.svg`
  width: 4rem;
  height: 4rem;
  path {
    fill: ${({ color }) => color};
  }
`;
