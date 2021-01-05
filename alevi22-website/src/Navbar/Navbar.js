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

    return (
        <div className="navbar">
            <Logo />
            <h1><a href="#top">Ariel Levi</a></h1>
        
            {tabs.map(tab => {
                return <a href={tab.link}>{tab.label}</a>;
            })}

        </div>
    );
}

export default Navbar;