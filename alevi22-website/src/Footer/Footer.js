import React from 'react';
import './Footer.css';

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright name should be specified as a property,
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
            <a href="">
                <img src={props.logoSrc} alt="Logo" />
            </a>

            <a href="" style={{textDecoration: "none"}}>
                <h1>{props.title}</h1>
            </a>

            <div className="container">
                {props.socialButtons.map(tab => {
                    return (
                        <a href={tab.link} key={tab.icon}>
                            <button>
                                <i className={tab.icon}/>
                            </button>
                        </a>
                    );
                })}
            </div>

            <p>&#169; {getCurrentYear()} {props.title}</p>
            <p>Powered by <a href="https://www.reactjs.org">React</a></p>
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