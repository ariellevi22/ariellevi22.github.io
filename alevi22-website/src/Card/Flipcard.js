import React, {useState} from 'react';
import './Flipcard.css';

/**
 * React component representing a card that flips over when clicked to
 * show different content on the front and back.
 * 
 * Usage:
 * ```js
 * <Flipcard width="width" height="height">
 *     <div class="front">Content for front of card</div>
 *     <div class="back">Content for back of card</div>
 * </Flipcard>
 * ```
 */
const Flipcard = (props) => {
    let width;
    if (props.width !== undefined) {
        width = props.width;
    } else {
        width = "100%";
    }

    let height;
    if (props.height !== undefined) {
        height = props.height;
    } else {
        height = "100px";
    }

    let style = {
        width: width,
        height: height,
    };

    // Initially, the back of the card is not showing
    const [displayState, setDisplayState] = useState(false);

    // If the back of the card needs to be showing, flip the card
    let transformStyle = undefined;
    if (displayState) {
        transformStyle = {transform: "rotateY(180deg)"};
    }

    return (
        <div className="flipcard" style={style}>
            <div className="flipcard-inner" style={transformStyle}
                onClick={() => setDisplayState(!displayState)}
                onMouseLeave={() => setDisplayState(false)}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Flipcard;