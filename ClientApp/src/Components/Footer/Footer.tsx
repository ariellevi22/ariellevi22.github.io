import React from 'react';
import './Footer.css';
import IconButton, { IconButtonProps } from '../IconButton/IconButton';
import Logo from '../Logo/Logo';

type FooterProps = {
    heading: string,
    socialButtons: IconButtonProps[],
}

/**
 * React component representing the footer of the website, which contains
 * copyright information. The copyright title should be specified as a property,
 * while the copyright year automatically updates to the current year.
 * 
 * Usage:
 * ```tsx
 * <Footer heading="Website Title" socialButtons=[button list]/>
 * ```
 */
const Footer = (props: FooterProps) => {
    return (
        <footer>
            <div className="heading">
                <Logo href="#top"/>

                <a href="#top">
                    <h1>{props.heading}</h1>
                </a>
            </div>
            
            <div className="social-button-container">
                {props.socialButtons.map(button => {
                    return (
                        <IconButton iconName={button.iconName} iconPrefix={button.iconPrefix}
                            href={button.href} alt={true}
                            key={[button.iconPrefix, button.iconName].join(" ")}
                        />
                    );
                })}
            </div>

            <p>&copy; {getCurrentYear()} {props.heading}</p>
        </footer>
    );
}

/**
 * Gets the current year
 * 
 * @returns the current year
 */
const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
}

export default Footer;