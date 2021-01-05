import React from 'react';

const Logo = (props) => {
    // The default color (if no color is specified) is black
    let color = "black";
    if (props.color) {
        color = props.color;
    }

    const style = {
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "20px",
    };

    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549.58 392.51">
            <circle style={style} cx="196.26" cy="196.26" r="186.26"/>
            <line style={style} x1="382.51" y1="196.26" x2="382.51" y2="382.51"/>
            <line style={style} x1="465.32" y1="10" x2="465.32" y2="382.51"/>
            <line style={style} x1="465.32" y1="382.51" x2="539.58" y2="382.51"/>
        </svg>
    );


    //return <img src={logo} alt="Logo" />;
}

export default Logo;