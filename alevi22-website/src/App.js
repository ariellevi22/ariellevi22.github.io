import React from 'react';
import './App.css';
import logo from './Logo.svg';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

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
				</section>

				<section>
					<h1 id="Experience">Experience</h1>
				</section>

				<section>
					<h1 id="Education">Education</h1>
				</section>

				<section style={{backgroundColor: "gray", height:"1000px"}}>
					<h1>Test</h1>
					<p>Hello</p>
					<p>Howdy</p>
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