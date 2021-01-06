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
            <div>
                <a href="">
                    <img src={props.logoSrc} alt="Logo" />
                </a>
                <a href="">
                    <h1>Ariel Levi</h1>
                </a>
            </div>
            

            <div>
                <h2>Navigate</h2>

                {props.webTabs.map(tab => {
                    return <a href={tab.link} key={tab.label}>{tab.label}</a>;
                })}
            </div>

            <div>
                <h2>Let's Connect</h2>

                <div className="container">
                    {props.socialButtons.map(tab => {
                        return (
                            <a href={tab.link} target="_blank" key={tab.icon}>
                                <i className={tab.icon}/>
                            </a>
                        );
                    })}
                </div>
            </div>

            

            <p className="copyright">
                &#169; {getCurrentYear()} {props.copyrightName}
            </p>
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