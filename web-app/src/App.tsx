import Navbar from "./Components/Navbar";
import HeroHeader from "./Components/HeroHeader";
import About from "./Views/About";
import Education from "./Views/Education";
import Experience from "./Views/Experience";
import Footer from "./Components/Footer";
import { navbarHeight } from "./Global";
import { ThemeProvider } from "react-jss";
import { createUseAppStyles, useThemePreference } from "./Theme";
import Portfolio from "./Views/Portfolio";

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
  const { theme, toggleTheme } = useThemePreference();
  const styles = useStyles({ theme });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.root}>
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

/**
 * Creates styles for the App component
 */
const useStyles = createUseAppStyles({
  root: {
    backgroundColor: (data) => data.theme.colors.backgroundPrimary,
    color: (data) => data.theme.colors.textPrimary,
    transition: (data) => data.theme.transition,
    minHeight: `calc(100vh - ${navbarHeight}rem)`,
    paddingTop: `${navbarHeight}rem`,
  },
});

export default App;
