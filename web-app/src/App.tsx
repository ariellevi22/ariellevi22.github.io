import { navbarHeight } from "./Global";
import { CssBaseline, useThemePreference } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import { Footer, HeroHeader, Navbar } from "./Components";
import { About, Education, Experience, Portfolio } from "./Views";

/** Web app for Ariel Levi's personal website */
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
