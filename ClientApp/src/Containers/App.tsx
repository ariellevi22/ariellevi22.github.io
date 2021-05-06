import React from 'react';

// Import assets
import profilePicture from '../Assets/ProfilePicture.jpg';

// Import components
import Navbar from '../Components/Navbar/Navbar';
import HeroHeader from '../Components/HeroHeader/HeroHeader';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Footer from '../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { name, navbarTabs, socialButtons } from '../globals';

/**
 * React web app for Ariel Levi's personal website
 */
const App = () => {
    return (
        <React.Fragment>
            <header>
                <Navbar heading={name}>
                    {navbarTabs.map(tab => {
                        return <a href={tab.href} key={tab.label}>{tab.label}</a>;
                    })}

                    {socialButtons.slice(0, -1).map(button => {
                        return (
                            <a href={button.href} target="_blank" rel="noopener noreferrer" key={button.iconName}>
                                <FontAwesomeIcon icon={[button.iconPrefix, button.iconName]} fixedWidth/>
                            </a>
                        );
                    })}
                </Navbar>
            
                <HeroHeader imgSrc={profilePicture} heading={name} socialButtons={socialButtons}>
                    <p>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
                </HeroHeader>
            </header>

            <main>
                <About/>
                <Experience/>
                <Education/>
            </main>

            <Footer heading={name} socialButtons={socialButtons}/>
        </React.Fragment>
    );
}

export default App;