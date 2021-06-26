import profilePicture from '../Assets/ProfilePicture.jpg';
import Navbar from '../Components/Navbar';
import HeroHeader from '../Components/HeroHeader';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Footer from '../Components/Footer';
import { name, navbarHeight, navbarTabs, noSpacing, socialButtons } from '../globals';
import { ThemeProvider } from 'theming';
import { useDarkTheme } from '../theme';
import { useEffect } from 'react';
import Portfolio from './Portfolio';

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
    const {theme, toggleTheme} = useDarkTheme();
    useEffect(() => {
        // Set the application background color and text color
        document.body.style.backgroundColor = theme.colors.backgroundPrimary;
        document.body.style.color = theme.colors.textPrimary;
        document.body.style.transition = theme.transition;
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>
            <header style={{marginTop: `${navbarHeight}em`}}>
                <Navbar tabs={navbarTabs} iconTabs={socialButtons.slice(0, -1)} toggleTheme={toggleTheme}/>
            
                <HeroHeader imgSrc={profilePicture} heading={name} socialButtons={socialButtons}>
                    <p className={noSpacing}>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
                </HeroHeader>
            </header>

            <main>
                <About/>
                <Experience/>
                <Education/>
                <Portfolio/>
            </main>

            <Footer copyrightHolderName={name} socialButtons={socialButtons}/>
        </ThemeProvider>
    );
}

export default App;