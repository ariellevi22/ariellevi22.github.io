import profilePicture from '../Assets/ProfilePicture.jpg';
import Navbar from '../Components/Navbar';
import HeroHeader from '../Components/HeroHeader';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Footer from '../Components/Footer';
import { name, navbarHeight, navbarTabs, noSpacing, socialButtons } from '../globals';
import { ThemeProvider } from 'theming';
import theme from '../theme';

/**
 * A React web app for Ariel Levi's personal website
 */
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <header style={{marginTop: `${navbarHeight}em`}}>
                <Navbar tabs={navbarTabs} iconTabs={socialButtons.slice(0, -1)}/>
            
                <HeroHeader imgSrc={profilePicture} heading={name} socialButtons={socialButtons}>
                    <p className={noSpacing}>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
                </HeroHeader>
            </header>

            <main>
                <About/>
                <Experience/>
                <Education/>
            </main>

            <Footer copyrightHolderName={name} socialButtons={socialButtons}/>
        </ThemeProvider>
    );
}

export default App;