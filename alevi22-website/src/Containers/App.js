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

// Import icons and make available to all files of the app
// Reference: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

/**
 * React web app for Ariel Levi's personal website.
 */
const App = () => {
    return (
        <React.Fragment>
            <header>
                <Navbar heading={NAME}>
                    {NAVBAR_TABS.map(tab => {
                        return <a href={tab.link} key={tab.label}>{tab.label}</a>;
                    })}

                    {SOCIAL_BUTTONS.slice(0, -1).map(button => {
                        return (
                            <a href={button.link} target="_blank" rel="noopener noreferrer" key={button.icon}>
                                <FontAwesomeIcon icon={[button.prefix, button.icon]} fixedWidth/>
                            </a>
                        );
                    })}
                </Navbar>
            
                <HeroHeader imgSrc={profilePicture} heading={NAME} socialButtons={SOCIAL_BUTTONS}>
                    <p>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
                </HeroHeader>
            </header>

            <main>
                <About/>
                <Experience/>
                <Education/>
                <Portfolio/>
            </main>

            <Footer heading={NAME} socialButtons={SOCIAL_BUTTONS}/>
        </React.Fragment>
    );
}

/**
 * Personal website title
 */
const NAME = "Ariel Levi"

/**
 * Navigation bar tabs' labels and links
 */
const NAVBAR_TABS = [
    {label: "About", link: "#About"},
    {label: "Experience", link: "#Experience"},
    {label: "Education", link: "#Education"},
    {label: "Portfolio", link: "#Portfolio"},
];

/**
 * Social button icons and links
 */
const SOCIAL_BUTTONS = [
    {icon: "linkedin-in", prefix: "fab", link: "https://www.linkedin.com/in/ariel-levi/"},
    {icon: "github", prefix: "fab", link: "https://github.com/alevi22"},
    {icon: "envelope", prefix: "fas", link: "mailto:alevi2@huskers.unl.edu"},
];

export default App;