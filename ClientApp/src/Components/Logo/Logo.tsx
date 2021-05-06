import React from 'react';
import './Logo.css';

type LogoProps = {
    href?: string,
    color?: string,
}

/**
 * React component representing the application's logo, which can optionally link to
 * a website or part of the app when clicked.
 * 
 * Usage:
 * ```js
 * <Logo color="logo color (white by default)" href="link/pointed/to/by/logo"/>
 * ```
 */
const Logo = (props: LogoProps) => {
    let logo = (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 564.58 397.51" className="app-logo" style={{color: props.color}}>
            <path d="M456.46,341.24c-109.59,0-198.75,89.16-198.75,198.76s89.16,198.76,198.75,198.76A198.89,198.89,0,0,0,630.22,636.4v89.86a12.5,12.5,0,0,0,25,0V540C655.22,430.4,566.06,341.24,456.46,341.24Zm0,372.52c-95.81,0-173.75-78-173.75-173.76s77.94-173.76,173.75-173.76S630.22,444.19,630.22,540,552.28,713.76,456.46,713.76Z" transform="translate(-257.71 -341.24)" fill="currentcolor"/>
            <path d="M809.79,713.76H748v-360a12.5,12.5,0,0,0-25,0V726.26a12.5,12.5,0,0,0,12.5,12.5h74.27a12.5,12.5,0,0,0,0-25Z" transform="translate(-257.71 -341.24)" fill="currentcolor"/>
        </svg>
    );

    if (props.href) {
        // If a link is given for the logo to point to, wrap the logo in an anchor tag with the link
        return (
            <a href={props.href}>{logo}</a>
        );
    } else {
        // Otherwise, wrap the logo in a div tag
        return (
            <div>{logo}</div>
        );
    }
}

export default Logo;