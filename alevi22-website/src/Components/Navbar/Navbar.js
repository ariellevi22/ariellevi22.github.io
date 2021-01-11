import React, {useState} from 'react';
import './Navbar.css';

/**
 * React component representing a responsive navigation bar with a
 * left-aligned logo and title and right-aligned links.
 * 
 * Usage:
 * ```js
 * <Navbar title="Website Title" logoSrc="./link/to/logo">
 *     <a href="#Home">Home</a>
 *     <a href="#About">About</a>
 *     <a href="#Contact">Contact</a>
 * </Navbar>
 * ```
 */
const Navbar = (props) => {
    const [menuState, setMenuState] = useState(false);

    let navTabStyle = undefined;
    let menuButton = "fa fa-bars";
    if (menuState) {
        menuButton = "fa fa-close";
        navTabStyle = {height: "200px"};
    }

    return (
        <nav>
            <div className="nav-heading">
                <a href="#top">
                    <img src={props.logoSrc} alt="Logo"/>
                </a>
                <a href="#top"><h1>{props.title}</h1></a>
            </div>

            <a className="nav-menu-button" onClick={() => setMenuState(!menuState)}>
                <i className={menuButton}/>
            </a>

            <div className="nav-tabs" style={navTabStyle}>
                {props.children}
            </div>
        </nav>
    );
}

export default Navbar;