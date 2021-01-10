import React from 'react';
import './Footer.css';

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright title should be specified as a property,
 * while the copyright year automatically updates to the current year.
 * 
 * Usage:
 * ```js
 * <Footer logoSrc="./link/to/logo" title="Website Title" socialButtons=[button list]/>
 * ```
 */
const Footer = (props) => {
    return (
        <footer>
            <div className="heading">
                <a href="#top">
                    <img src={props.logoSrc} alt="Logo" />
                </a>

                <a href="#top" style={{textDecoration: "none"}}>
                    <h1>{props.title}</h1>
                </a>
            </div>
            

            <div className="container">
                {props.socialButtons.map(tab => {
                    return (
                        <a href={tab.link} target="_blank" rel="noopener noreferrer" key={tab.icon}>
                            <button>
                                <i className={tab.icon}/>
                            </button>
                        </a>
                    );
                })}
            </div>

            <p>&copy; {getCurrentYear()} {props.title}</p>
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