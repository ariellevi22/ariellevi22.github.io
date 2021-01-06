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

	return (
		<div>
			<Navbar title="Ariel Levi" logoSrc={logo}>
				{WEB_TABS.map(tab => {
					return <a href={tab.link} key={tab.label}>{tab.label}</a>;
				})}

				{WEB_ICON_TABS.map(tab => {
					return (
						<a href={tab.link} target="_blank" key={tab.icon}>
							<i className={tab.icon}/>
						</a>
					);
				})}
			</Navbar>

			<Footer />
		</div>
	);
}

export default App;