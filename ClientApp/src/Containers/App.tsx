import Navbar from '../Components/Navbar';
import HeroHeader from '../Components/HeroHeader';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Footer from '../Components/Footer';
import { navbarHeight } from '../globals';
import { ThemeProvider } from 'react-jss';
import { useDarkTheme } from '../theme';
import { useEffect } from 'react';
import Portfolio from './Portfolio';

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
    const { theme, toggleTheme } = useDarkTheme();
    useEffect(() => {
        // Set the application background color and text color whenever the theme changes
        document.body.style.backgroundColor = theme.colors.backgroundPrimary;
        document.body.style.color = theme.colors.textPrimary;
        document.body.style.transition = theme.transition;
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default App;