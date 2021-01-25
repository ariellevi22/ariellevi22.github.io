import React, {useState} from 'react';
import './OverlayCard.css';

/**
 * React component representing a card with an overlay layer that slides
 * in when clicked.
 * 
 * Usage:
 * ```js
 * <OverlayCard>
 *     imgSrc="./path/to/image"
 *     logoSrc="./path/to/logo"
 *     heading="Title Text" subheading="Subtitle Text"
 *     overlayColor="color"
 * >
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </OverlayCard>
 * ```
 */
const OverlayCard = (props) => {
    // Set the background color of the overlay (either default or user-provided value)
    let overlayColor = undefined;
    if (props.overlayColor !== undefined) {
        overlayColor = props.overlayColor;
    }

    // Initially, the overlay on top of the card is not showing
    const [displayState, setDisplayState] = useState(false);

    // Determine if showing the overlay or the base of the card
    let transformStyle = undefined;
    if (displayState) {
        transformStyle = {height: "100%"};
    }

    // Determine if displaying the logo
    let logo = undefined;
    if (props.logoSrc !== undefined) {
        logo = <img src={props.logoSrc} alt={props.heading + " Logo"} className="logo"/>;
    }

    return (
        <div className="overlay-card"
            onClick={() => setDisplayState(!displayState)}
            onMouseLeave={() => setDisplayState(false)}
        >
            <div className="header">
                <img src={props.imgSrc} alt={props.heading} className="background"/>
                {logo}
                <div className="header-text">
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                </div>
            </div>

            <div className="overlay" style={{...transformStyle, backgroundColor: overlayColor}}>
                <div style={{margin: "30px"}}>
                    <h2>{props.heading}</h2>
                    <p style={{paddingBottom: "20px"}}>{props.subheading}</p>

                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default OverlayCard;