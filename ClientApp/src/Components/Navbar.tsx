import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { navbarHeight, IconTab, screenSizes, transition } from '../globals';
import { AppTheme } from '../theme';
import IconButton from './Button/IconButton';
import Link from './Link';
import Logo from './Logo/Logo';

export type NavbarTab = {
    label: string,
    href: string,
    openWithNewTab?: boolean,
};

type NavbarProps = {
    tabs: NavbarTab[],
    iconTabs?: IconTab[],
};

const useStyles = createUseStyles<"nav" | "navbar" | "tabs" | "@keyframes menuSlideRight" | "menu" | "menuExpanded" | "menuButton", NavbarProps, AppTheme>({
    nav: {
        // Style each link in the navbar
        '& a': {
            textDecoration: "none",
            transition: transition,
            
            '&:hover': {
                color: data => data.theme.colors.link.secondary,
            }
        },
    },

    navbar: data => ({
        padding: "1em 2.5em",
        top: 0,
        width: "100vw",
        height: `${navbarHeight}em`,
        position: "fixed",
        zIndex: 10,
        backgroundColor: data.theme.colors.background.navigationPrimary,
        color: data.theme.colors.text.secondary,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        overflow: "hidden",
    }),

    tabs: {
        display: "flex",
        gap: "1.5em",
        flexWrap: "wrap",
        alignItems: "baseline",
        width: "auto",
        height: "auto",
        overflow: "hidden",

        // On small screens, hide the tabs
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "none",
        }
    },

    '@keyframes menuSlideRight': {
        '0%': {
            display: "none",
            opacity: 0,
        },
        '1%': {
            display: "flex",
            width: 0,
        },
        '100%': {
            opacity: 1,
        },
    },

    menu: {
        display: "none", // hidden on large screens (and until opened on small screens)
        position: "fixed",
        right: 0,
        width: "80vw",
        height: `calc(100% - ${navbarHeight}em)`,
        zIndex: 9,
        padding: "8em 2.5em",
        backgroundColor: data => data.theme.colors.background.navigationSecondary,
        color: data => data.theme.colors.text.secondary,
        gap: "1em",
        flexDirection: "column",
        alignItems: "flex-end", // right align
        justifyContent: "space-evenly",
        animation: "$menuSlideRight 0.25s ease 0s 1 normal",

        '@media (orientation: landscape)': {
            flexDirection: "row",
            flexWrap: "wrap",
        }
    },

    menuExpanded: {
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "flex",
        },
    },

    menuButton: {
        display: "none",
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
            display: "block",
        },
    },
});

/**
 * A React component representing a responsive navigation bar with a
 * left-aligned logo and title and right-aligned links
 * 
 * Props:
 * * `tabs` a list of links to display across the navigation bar
 * * `iconTabs` a list of links (represented as icons) to display across the navigation bar
 */
const Navbar = (props: NavbarProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({...props, theme});

    /*
     * Keep track of whether the navigation bar menu (shown on small screens instead
     * of the full navigation bar) is open (true) or closed (false). Initially, it is closed.
     */
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Create the display for the navigation bar tabs
    const navbarTabs = (
        <React.Fragment>
            {props.tabs.map(tab => {
                return (
                    <Link href={tab.href} key={tab.label} openWithNewTab={tab.openWithNewTab}>
                        {tab.label}
                    </Link>
                );
            })}

            {props.iconTabs?.map(iconTab => {
                return (
                    <Link href={iconTab.href} key={iconTab.label} openWithNewTab={iconTab.openWithNewTab}
                        aria-label={iconTab.label}
                    >
                        <FontAwesomeIcon icon={iconTab.iconPrefix ? [iconTab.iconPrefix, iconTab.iconName] : iconTab.iconName} fixedWidth/>
                    </Link>
                );
            })}
        </React.Fragment>
    )

    // Display the navigation bar
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <Logo href="#top" onClick={() => setMenuOpen(false)}/>

                <IconButton isTransparent
                    iconName={isMenuOpen ? "times" : "bars"}
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className={styles.menuButton}
                    aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
                />

                <div className={styles.tabs}>
                    {navbarTabs}
                </div>
            </div>

            <div className={[styles.menu, isMenuOpen ? styles.menuExpanded : undefined].join(" ")} onClick={() => setMenuOpen(false)}>
                {navbarTabs}
            </div>
        </nav>
    );
}

export default Navbar;