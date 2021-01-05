import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'

const Navbar = () => {
    const tabs = [
        {label: "About", link: "#About"},
        {label: "Experience", link: "#Experience"},
        {label: "Education", link: "#Education"},
        {label: "Projects", link: "#Projects"},
        {label: "Contact", link: "#Contact"},
    ];

    // Icon reference: https://www.w3schools.com/icons/icons_reference.asp
    const iconTabs = [
        {icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/ariel-levi/"},
        {icon: "fa fa-github", link: "https://github.com/alevi22"},
    ];

    return (
        <nav>
            <div class="nav-heading">
                <a href="#top"><Logo /></a>
                <h1><a href="#top">Ariel Levi</a></h1>
            </div>

            <div class="nav-tabs">
                {tabs.map(tab => {
                    return <a href={tab.link}>{tab.label}</a>;
                })}

                {iconTabs.map(tab => {
                    return <a href={tab.link} target="_blank"><i class={tab.icon}/></a>
                })}
            </div>
        </nav>
    );
}

export default Navbar;