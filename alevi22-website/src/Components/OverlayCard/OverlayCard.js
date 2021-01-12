import React, {useState} from 'react';
import './OverlayCard.css';

/**
 * React component representing a card.
 * 
 * Usage:
 * ```js
 * <OverlayCard
 *     imgSrc="./path/to/image"
 *     logoSrc="./path/to/logo"
 *     title="Title Text" subtitle="Subtitle Text"
 *     width="width" height="height" padding="padding"
 * >
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </OverlayCard>
 * ```
 */
const OverlayCard = (props) => {
    // Set the width (either default or user-provided value)
    let width = "auto";
    if (props.width !== undefined) {
        width = props.width;
    }

    // Set the height (either default or user-provided value)
    let height = "auto";
    if (props.height !== undefined) {
        height = props.height;
    }

    // Set the padding (either default or user-provided value)
    let padding = "30px";
    if (props.padding !== undefined) {
        padding = props.padding;
    }

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
    let logoCode = undefined;
    if (props.logoSrc !== undefined) {
        logoCode = <img src={props.logoSrc} alt={props.title + " Logo"} className="logo"/>;
    }

    return (
        <div className="overlay-card" style={{width: width, height: height}}
            onClick={() => setDisplayState(!displayState)}
            onMouseLeave={() => setDisplayState(false)}
        >
            <div className="card-content">
                <img src={props.imgSrc} alt={props.title} className="background"/>
                {logoCode}
                <div className="intro-text" style={{padding: padding}}>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>

            <div className="overlay" style={{...transformStyle, backgroundColor: overlayColor}}>
                <div style={{margin: padding}}>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>

                    <div style={{paddingTop: "20px"}}>
                        {props.children}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default OverlayCard;