import { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#f7f7f7",
        pokeballIconColor: "#212121",
        pokemonCardBackgroundColor: "#fff",
        textColor: "#212121",
    },
    dark: {
        background: "#212121",
        pokeballIconColor: "#f7f7f7",
        pokemonCardBackgroundColor: "#313131",
        textColor: "#f7f7f7",
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}