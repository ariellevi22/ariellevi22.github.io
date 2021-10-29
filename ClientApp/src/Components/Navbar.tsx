import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { navbarHeight, screenSizes } from '../globals';
import { AppTheme } from '../theme';
import IconButton from './Button/IconButton';
import Link from './Link';
import Logo from './Logo/Logo';
import { navbarTabs, socialTabs } from '../Data/navigationData';

type NavbarProps = {
    toggleTheme?: () => void,
};

/**
 * A React component representing a responsive navigation bar with a
 * left-aligned logo and title and right-aligned links
 * 
 * Props:
 * * `toggleTheme` a function to change the application theme from light to dark mode and vice versa
 */
const Navbar = (props: NavbarProps) => {
    const theme = useTheme<AppTheme>();
    const styles = useStyles({ ...props, theme });

    /*
     * Keep track of whether the navigation bar menu (shown on small screens instead
     * of the full navigation bar) is open (true) or closed (false). Initially, it is closed.
     */
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Create the display for the navigation bar tabs
    const tabs = (
        <>
            {navbarTabs.map(tab => {
                return (
                    <Link href={tab.href} key={tab.label} openWithNewTab={tab.openWithNewTab}>
                        {tab.label}
                    </Link>
                );
            })}

            {socialTabs.slice(0, -1).map(iconTab => {
                return (
                    <Link href={iconTab.href} key={iconTab.label} openWithNewTab={iconTab.openWithNewTab} title={iconTab.label} aria-label={iconTab.label}>
                        <FontAwesomeIcon icon={iconTab.iconPrefix ? [iconTab.iconPrefix, iconTab.iconName] : iconTab.iconName} fixedWidth />
                    </Link>
                );
            })}

            {props.toggleTheme &&
                <IconButton isTransparent hoverTextColor={theme.colors.accentNavigation}
                    iconName={(theme.type === "light") ? "moon" : "sun"}
                    onClick={props.toggleTheme}
                    aria-label={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
                    title={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
                />
            }
        </>
    );

    // Display the navigation bar
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <Logo href="#top" onClick={() => setMenuOpen(false)} hoverColor={theme.colors.accentNavigation} />

                <IconButton isTransparent hoverTextColor={theme.colors.accentNavigation}
                    iconName={isMenuOpen ? "times" : "bars"}
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className={styles.menuButton}
                    aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
                    title={`${isMenuOpen ? "Close" : "Open"} Menu`}
                />

                <div className={styles.tabs}>
                    {tabs}
                </div>
            </div>

            <div className={[styles.menu, isMenuOpen ? styles.menuExpanded : undefined].join(" ")} onClick={() => setMenuOpen(false)}>
                {tabs}
            </div>
        </nav>
    );
}

/**
 * Creates the navbar's styles
 */
const useStyles = createUseStyles<"nav" | "navbar" | "tabs" | "@keyframes menuSlideRight" | "menu" | "menuExpanded" | "menuButton", NavbarProps, AppTheme>({
    nav: {
        // Style each link in the navbar
        '& a': {
            textDecoration: "none",

            '&:hover': {
                color: data => data.theme.colors.accentNavigation,
            }
        },
    },

    navbar: data => ({
        padding: "1em 2.5em",
        top: 0,
        width: "100%",
        height: `${navbarHeight}em`,
        position: "fixed",
        zIndex: 10,
        backgroundColor: data.theme.colors.backgroundNavigation,
        color: data.theme.colors.textNavigation,
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
        backgroundColor: data => data.theme.colors.backgroundNavigationMenu,
        color: data => data.theme.colors.textNavigation,
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

export default Navbar;