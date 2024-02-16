import Catalog from "../../features/catalog/Catalog";
import Header from "../../features/catalog/Header";
import { CssBaseline, createTheme, Container, ThemeProvider } from "@mui/material/index";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: (paletteType === 'light') ? '#eaeaea' : '#121212'
            }
        }
    })
 
    function switchTheme() {
        setDarkMode(!darkMode);
    }

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header darkmode={darkMode} switchMode={switchTheme} />
          <Container>
              <Catalog />
          </Container>
      </ThemeProvider>
  )
}

export default App
