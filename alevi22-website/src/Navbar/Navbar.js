import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'

const Navbar = () => {
    const tabs = [
        {label: "Home", link: "#Home"},
        {label: "About", link: "#About"},
        {label: "Contact", link: "#Contact"},
    ];

    return (
        <div className="navbar">
            <Logo color="white"/>

            <h1><a href="#top">Ariel Levi</a></h1>
            
            {tabs.reverse().map(tab => {
                return <a href={tab.link}>{tab.label}</a>;
            })}
        </div>
    );
}

export default Navbar;