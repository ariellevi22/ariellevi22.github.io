import Navbar from '../Components/Navbar';
import HeroHeader from '../Components/HeroHeader';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Footer from '../Components/Footer';
import { navbarHeight } from '../globals';
import { createUseStyles, ThemeProvider } from 'react-jss';
import { AppTheme, useDarkTheme } from '../theme';
import Portfolio from './Portfolio';

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
    const { theme, toggleTheme } = useDarkTheme();
    const styles = useStyles({ theme });

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.root}>
                <header style={{ marginTop: `${navbarHeight}em` }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <HeroHeader />
                </header>

                <main>
                    <About />
                    <Experience />
                    <Education />
                    <Portfolio />
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

/**
 * Creates styles for the App component
 */
const useStyles = createUseStyles<"root", {}, AppTheme>({
    root: {
        backgroundColor: data => data.theme.colors.backgroundPrimary,
        color: data => data.theme.colors.textPrimary,
        transition: data => data.theme.transition,
        minHeight: `calc(100vh - ${navbarHeight}em)`,
    }
})

export default App;