import React from 'react';
import './HeroHeader.css';

/**
 * React component representing the hero header of the website, which contains
 * a heading, a photo, and optional additional content.
 * 
 * Usage:
 * ```js
 * <HeroHeader imgSrc="./link/to/photo" heading="Heading Text" socialButtons=[button list]>
 *     Additional content
 * </HeroHeader>
 * ```
 */
const HeroHeader = (props) => {
    let socialButtonDisplay = undefined;
    if (props.socialButtons) {
        socialButtonDisplay = (
            <div className="social-button-container">
                {props.socialButtons.map(button => {
                    return (
                        <a href={button.link} target="_blank" rel="noopener noreferrer" key={button.icon}>
                            <button className={["social-button", button.icon].join(" ")}/>
                        </a>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="hero-header">
            <div className="gradient"/>

            <div className="hero-container">
                <div> </div>

                <img src={props.imgSrc} alt={props.heading}/>

                <div className="hero-content">
                    <h1>{props.heading}</h1>

                    {props.children}

                    {socialButtonDisplay}
                </div>
            </div>
        </div>
    );
}

export default HeroHeader;