import React from 'react';
import './Card.css';


/**
 * React component representing a card.
 * 
 * Usage:
 * ```js
 * <Card>
 *     ...
 * </Card>
 * ```
 */
const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;