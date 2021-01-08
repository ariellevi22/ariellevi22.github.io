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
    let width;
    if (props.width !== undefined) {
        width = props.width;
    } else {
        width = "auto";
    }

    let height;
    if (props.height !== undefined) {
        height = props.height;
    } else {
        height = "auto";
    }

    let padding;
    if (props.padding !== undefined) {
        padding = props.padding;
    } else {
        padding = "30px";
    }

    let color;
    if (props.color !== undefined) {
        padding = props.color;
    } else {
        color = "white";
    }

    return (
        <div className="card" style={{
            width: width,
            height: height,
            padding: padding,
            backgroundColor: color,
        }}>
            {props.children}
        </div>
    );
}

export default Card;