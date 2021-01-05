import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'

const WEB_TABS = [
    {label: "About", link: "#About"},
    {label: "Experience", link: "#Experience"},
    {label: "Education", link: "#Education"},
    {label: "Projects", link: "#Projects"},
    {label: "Contact", link: "#Contact"},
  ];
  
  // Icon reference: https://www.w3schools.com/icons/icons_reference.asp
  const WEB_ICON_TABS = [
    {icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/ariel-levi/"},
    {icon: "fa fa-github", link: "https://github.com/alevi22"},
  ];

const Navbar = () => {
    return (
        <nav>
            <div className="nav-heading">
                <a href="#top"><Logo /></a>
                <h1><a href="#top">Ariel Levi</a></h1>
            </div>

            <div className="nav-tabs">
                {WEB_TABS.map(tab => {
                    return <a href={tab.link} key={tab.label}>{tab.label}</a>;
                })}

                {WEB_ICON_TABS.map(tab => {
                    return <a href={tab.link} target="_blank" key={tab.icon}><i className={tab.icon}/></a>
                })}
            </div>
        </nav>
    );
}

export default Navbar;