import React from 'react';
import './Footer.css';

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright name should be specified as a property,
 * while the copyright year automatically updates to the current year.
 * 
 * Usage:
 * ```js
 * <Footer copyrightName="YourName"/>
 * ```
 */
const Footer = (props) => {
    return (
        <footer>
            &#169; {getCurrentYear()} {props.copyrightName}
        </footer>
    );
}

/**
 * Returns the current year
 */
const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
}

export default Footer;