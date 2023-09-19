import { ThemeProvider } from "./contexts/theme-context";
import { AppRoutes } from "./pages/Routes/AppRoutes";

import { createGlobalStyle } from "styled-components";
function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background-color: #f7f7f7;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }
`;

export default App;
