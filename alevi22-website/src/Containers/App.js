import React from 'react';

// Import assets
import logo from '../Assets/Logo.svg';
import profilePicture from '../Assets/ProfilePicture.jpg';

// Import components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroHeader from '../Components/HeroHeader/HeroHeader';
import Education from './Education';
import Experience from './Experience';

/**
 * React web app for Ariel Levi's personal website.
 */
const App = () => {
	return (
		<React.Fragment>
			<Navbar heading={NAME} logoSrc={logo}>
				{NAVBAR_TABS.map(tab => {
					return <a href={tab.link} key={tab.label}>{tab.label}</a>;
				})}

				{SOCIAL_BUTTONS.slice(0, SOCIAL_BUTTONS.length - 1).map(button => {
					return (
						<a href={button.link} target="_blank" rel="noopener noreferrer" key={button.icon}>
							<i className={button.icon}/>
						</a>
					);
				})}
			</Navbar>
			
			<header>
				<HeroHeader imgSrc={profilePicture} heading={NAME} socialButtons={SOCIAL_BUTTONS}>
					<p>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
				</HeroHeader>
			</header>

			<main>
				<section id="About">
					<h1>About</h1>

					<p>
						Hi there, I’m Ariel! I am an undergraduate computer science student at the
						University of Nebraska-Lincoln’s <a href="https://raikes.unl.edu/" target="_blank" rel="noopener noreferrer">Raikes School</a> of
						Computer Science and Management who is passionate about technology
						and its ability to make the world a better place.
					</p>

					<p>
						This past summer, I worked at <a href="https://zoom.us" target="_blank" rel="noopener noreferrer">Zoom</a> as
						a technical support engineer intern, helping customers achieve success using
						Zoom’s products during the difficult times of the COVID-19 pandemic.
						This upcoming summer, I will be working as an application developer intern
						at <a href="https://evergy.com" target="_blank" rel="noopener noreferrer">Evergy</a>,
						where I am excited to continue to grow my skillset and apply my learning to a real-world environment.
					</p>
				</section>

				<section id="Experience">
					<h1>Experience</h1>
					<Experience/>
				</section>

				<section id="Education">
					<h1>Education</h1>
					<Education/>
				</section>

				<section id="Portfolio">
					<h1>Portfolio</h1>
				</section>
			</main>

			<Footer logoSrc={logo} heading={NAME} socialButtons={SOCIAL_BUTTONS}/>
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
	{icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/ariel-levi/"},
	{icon: "fab fa-github", link: "https://github.com/alevi22"},
	{icon: "fas fa-envelope", link: "mailto:alevi2@huskers.unl.edu"},
];

export default App;