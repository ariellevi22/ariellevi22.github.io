import React from 'react';
import './Navbar.css';

const NavbarTab = (props) => {
    return (
        <a href={props.href}>{props.children}</a>
    );
}

const Navbar = () => {
    const tabs = [
        {name: "Home", link: "#Home"},
        {name: "About", link: "#About"},
        {name: "Contact", link: "#Contact"},
    ];

    return (
        <div className="navbar">
            {tabs.reverse().map(tab => {
                return <NavbarTab href={tab.link}>{tab.name}</NavbarTab>
            })}
        </div>
    );
}

export default Navbar;