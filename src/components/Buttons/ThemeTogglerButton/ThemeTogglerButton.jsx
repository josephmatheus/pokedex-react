import { useContext } from "react";
import { ThemeContext, themes } from "../../../contexts/theme-context";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import styled from "styled-components";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? <MdDarkMode /> : <MdLightMode className="sun" />}
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 4rem;

    .sun {
        color: #f7f7f7;
    }
`