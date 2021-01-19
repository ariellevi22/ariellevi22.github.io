import React from 'react';

// Import assets
import logo from '../Assets/Logo.svg';
import profilePicture from '../Assets/ProfilePicture.jpg';

// Import components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import OverlayCard from '../Components/OverlayCard/OverlayCard';
import HeroHeader from '../Components/HeroHeader/HeroHeader';

// Import data
import {NAME, NAVBAR_TABS, NAVBAR_ICON_TABS, SOCIAL_BUTTONS} from '../Data/Data';
import {EDUCATION} from '../Data/EducationData';

/**
 * React web app for Ariel Levi's personal website.
 */
const App = () => {
	return (
		<React.Fragment>
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

			<HeroHeader imgSrc={profilePicture} heading={NAME} socialButtons={SOCIAL_BUTTONS}>
					<p>Computer Science Student at the University of Nebraska-Lincoln’s Raikes School</p>
			</HeroHeader>

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

					<div className="grid">
						{EDUCATION.map(education => {
							return (
								<OverlayCard
									imgSrc={education.photo} logoSrc={education.logo}
									title={education.school}
									subtitle={[education.location, education.degree].join(" \u2022 ")}
									width="100%" height="45vh" key={education.id}
								>
									{education.content}
								</OverlayCard>
							);
						})}
					</div>
				</section>

				<section id="Projects">
					<h1>Projects</h1>
				</section>
			</main>

			<Footer logoSrc={logo} title={NAME} socialButtons={SOCIAL_BUTTONS}/>
		</React.Fragment>
	);
}

export default App;