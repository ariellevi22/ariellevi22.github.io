/** @jsxImportSource @emotion/react */

import Navbar from "./Components/Navbar";
import HeroHeader from "./Components/HeroHeader";
import About from "./Views/About";
import Education from "./Views/Education";
import Experience from "./Views/Experience";
import Footer from "./Components/Footer";
import { navbarHeight } from "./Global";
import { CssBaseline, useThemePreference } from "./Theme";
import Portfolio from "./Views/Portfolio";
import { ThemeProvider } from "@emotion/react";

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
  const { theme, toggleTheme } = useThemePreference();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div css={{ paddingTop: `${navbarHeight}rem` }}>
        <Navbar toggleTheme={toggleTheme} />
        <HeroHeader />

        <main>
          <About />
          <Experience />
          <Portfolio />
          <Education />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
