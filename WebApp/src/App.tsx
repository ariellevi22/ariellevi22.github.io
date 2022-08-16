import Navbar from "./Components/Navbar";
import HeroHeader from "./Components/HeroHeader";
import About from "./Containers/About";
import Education from "./Containers/Education";
import Experience from "./Containers/Experience";
import Footer from "./Components/Footer";
import { navbarHeight } from "./globals";
import { createUseStyles, ThemeProvider } from "react-jss";
import { AppTheme, useAppTheme } from "./theme";
import Portfolio from "./Containers/Portfolio";

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
    const { theme, toggleTheme } = useAppTheme();
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
const useStyles = createUseStyles<"root", {}, AppTheme>({
    root: {
        backgroundColor: (data) => data.theme.colors.backgroundPrimary,
        color: (data) => data.theme.colors.textPrimary,
        transition: (data) => data.theme.transition,
        minHeight: `calc(100vh - ${navbarHeight}rem)`,
        paddingTop: `${navbarHeight}rem`,
    },
});

export default App;
