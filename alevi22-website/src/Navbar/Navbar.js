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
        <nav>
            <div style={{float: "left"}}>
                <a href="#top"><Logo /></a>
                <h1><a href="#top">Ariel Levi</a></h1>
            </div>

            <div style={{float: "right"}}>
                {tabs.map(tab => {
                    return <a href={tab.link}>{tab.label}</a>;
                })}
            </div>
        </nav>
    );
}

export default Navbar;