import React from 'react';
import './Card.css';

/**
 * React component representing a card.
 * 
 * Usage:
 * ```js
 * <Card width="width" height="height" padding="padding" color="color">
 *     <h1>Hi, I'm a card.</h1>
 *     <p>Lorem ipsum dolor sit amet...</p>
 * </Card>
 * ```
 */
const Card = (props) => {
    // Set the width (either default or user-provided value)
    let width;
    if (props.width !== undefined) {
        width = props.width;
    } else {
        width = "auto";
    }

    // Set the height (either default or user-provided value)
    let height;
    if (props.height !== undefined) {
        height = props.height;
    } else {
        height = "auto";
    }

    // Set the padding (either default or user-provided value)
    let padding;
    if (props.padding !== undefined) {
        padding = props.padding;
    } else {
        padding = "30px";
    }

    // Set the background color (either default or user-provided value)
    let backgroundColor;
    if (props.color !== undefined) {
        backgroundColor = props.backgroundColor;
    } else {
        backgroundColor = "white";
    }

    return (
        <div className="card" style={{
            width: width,
            height: height,
            padding: padding,
            backgroundColor: backgroundColor,
        }}>
            {props.children}
        </div>
    );
}

export default Card;