import React from 'react';
import './IconButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * React component representing a button with an icon, such as for social buttons.
 * 
 * Usage:
 * ```js
 * <IconButton
 *     icon="Font Awesome icon name"
 *     iconPrefix="fas, fab, far, or any other Font Awesome prefix"
 *     href="URL for button to go to"
 *     alt="true if alternate button colors should be used (when supported in the CSS), false otherwise"
 * />
 * ```
 */
const IconButton = (props) => {
    let buttonClasses = ["social-button", props.icon];
    if (props.alt) {
        buttonClasses.push("alt");
    }

    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <button className={buttonClasses.join(" ")}>
                <FontAwesomeIcon icon={[props.iconPrefix, props.icon]} fixedWidth/>
            </button>
        </a>
    );
}

export default IconButton;