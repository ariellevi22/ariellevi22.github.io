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
    /*
     * Keep track of whether the navigation bar menu (shown on small screens instead
     * of the full navigation bar) is open (true) or closed (false). Initially, it is closed.
     */
    const [openMenu, setOpenMenu] = useState(false);
    
    /*
     * If the menu is CLOSED, the menu button is shown as three stacked horizontal lines,
     * and the height of the menu remains as its default (0 px)
     */
    let navTabHeightModifier = undefined;
    let menuButton = "fa fa-bars";

    /*
     * If the menu is OPEN, the menu button is shown as an X (to close the menu),
     * and the height of the menu is modified to fit all navigation tabs
     */
    if (openMenu) {
        menuButton = "fa fa-close";
        navTabHeightModifier = {height: "200px"};
    }

    // Display the navigation bar
    return (
        <nav>
            <div className="nav-heading">
                <a href="#top">
                    <img src={props.logoSrc} alt="Logo"/>
                </a>
                <a href="#top"><h1>{props.title}</h1></a>
            </div>

            <a className="nav-menu-button" onClick={() => setOpenMenu(!openMenu)}>
                <i className={menuButton}/>
            </a>

            <div className="nav-tabs" style={navTabHeightModifier}>
                {props.children}
            </div>
        </nav>
    );
}

export default Navbar;