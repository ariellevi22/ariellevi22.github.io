import React from 'react';
import './App.css';

// Import assets and components
import logo from './Assets/Logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Import data
import {NAME, NAVBAR_TABS, NAVBAR_ICON_TABS, SOCIAL_BUTTONS} from './Data';

/**
 * React web app for Ariel Levi's personal website.
 */
const App = () => {
	return (
		<div>
			<Navbar title={NAME} logoSrc={logo}>
				{NAVBAR_TABS.map(tab => {
					return <a href={tab.link} key={tab.label}>{tab.label}</a>;
				})}

				{NAVBAR_ICON_TABS.map(tab => {
					return (
						<a href={tab.link} target="_blank" rel="noopener noreferrer" key={tab.icon}>
							<i className={tab.icon}/>
						</a>
					);
				})}
			</Navbar>

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
				</section>

				<section id="Education">
					<h1>Education</h1>
				</section>

				<section id="Projects">
					<h1>Projects</h1>
				</section>
			</main>

			<Footer logoSrc={logo} title={NAME} socialButtons={SOCIAL_BUTTONS}/>
		</div>
	);
}

export default App;