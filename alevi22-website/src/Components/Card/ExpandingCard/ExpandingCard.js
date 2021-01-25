import React, {useState} from 'react';
import './ExpandingCard.css';

/**
 * React component representing a card with a header image, logo, and text
 * that expands to show additional content when clicked.
 * 
 * Usage:
 * ```js
 * <ExpandingCard>
 *     imgSrc="./path/to/image"
 *     logoSrc="./path/to/logo"
 *     heading="Title Text" subheading="Subtitle Text"
 *     alt="Image/Logo Title"
 * >
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </ExpandingCard>
 * ```
 */
const ExpandingCard = (props) => {
    // Initially, the expanding card is not expanded
    const [isExpanded, setIsExpanded] = useState(false);

    let expandingCardClasses = ["expanding-card"];
    if (isExpanded) {
        expandingCardClasses.push("expanded");
    }

    let image = undefined;
    if (props.imgSrc) {
        image = <img src={props.imgSrc} alt={props.alt} className="background"/>;
    }

    let logo = undefined;
    if (props.logoSrc) {
        logo = <img src={props.logoSrc} alt={props.alt + " Logo"} className="logo"/>;
    }

    return (
        <div className={expandingCardClasses.join(" ")}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="header">
                {image}
                {logo}
                <div className="header-text">
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                </div>
            </div>

            <div className="content">
                <div style={{margin: "30px"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ExpandingCard;