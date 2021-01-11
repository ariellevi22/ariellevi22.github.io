import React from 'react';
import './App.css';
import logo from './Logo.svg';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import OverlayCard from './OverlayCard/OverlayCard';

const App = () => {
	const WEB_TABS = [
		{label: "About", link: "#About"},
		{label: "Experience", link: "#Experience"},
		{label: "Education", link: "#Education"},
		{label: "Projects", link: "#Projects"},
	];
	
	// Icon reference: https://www.w3schools.com/icons/icons_reference.asp
	const WEB_ICON_TABS = [
		{icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/ariel-levi/"},
		{icon: "fa fa-github", link: "https://github.com/alevi22"},
	];

	const CONNECT_BUTTONS = [
		...WEB_ICON_TABS,
		{icon: "fa fa-envelope", link: "mailto:alevi2@huskers.unl.edu"}
	]

	const NAME = "Ariel Levi"

	return (
		<div>
			<Navbar title={NAME} logoSrc={logo}>
				{WEB_TABS.map(tab => {
					return <a href={tab.link} key={tab.label}>{tab.label}</a>;
				})}

				{WEB_ICON_TABS.map(tab => {
					return (
						<a href={tab.link} target="_blank" rel="noopener noreferrer" key={tab.icon}>
							<i className={tab.icon}/>
						</a>
					);
				})}
			</Navbar>

			<main>
				<section>
					<h1 id="About">About</h1>

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

				<section>
					<h1 id="Experience">Experience</h1>
				</section>

				<section>
					<h1 id="Education">Education</h1>
				</section>

				<section>
					<h1 id="Projects">Projects</h1>
				</section>
			</main>

			<Footer logoSrc={logo} title={NAME} socialButtons={CONNECT_BUTTONS}/>
		</div>
	);
}

export default App;