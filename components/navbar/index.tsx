"use client";

import { useEffect, useState } from "react";
import Button from "../button";
import FocusLock from "../focus-lock";
import Logo from "../logo";
import MenuIcon from "../menu-icon";
import NavMenu from "./nav-menu";
import NavLinks from "./nav-links";
import styles from "./navbar.module.css";

/** A component for the website's navigation bar */
const Navbar = () => {
    // Keep track of whether the navigation bar menu (shown on small screens instead
    // of the full navigation bar) is open or closed (initially closed)
    const [isMenuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    // On window resize, close the menu
    useEffect(() => {
        window.addEventListener("resize", closeMenu);
        return () => window.removeEventListener("resize", closeMenu);
    }, []);

    return (
        <nav className={styles.nav}>
            <FocusLock
                onClickOutside={closeMenu}
                onEscapeKey={closeMenu}
                enabled={isMenuOpen}
            >
                <div className={styles.navbar}>
                    <Logo
                        onClick={() => {
                            closeMenu();
                            window.scrollTo({ top: 0 });
                        }}
                        accentColor="var(--text-nav-bar-action)"
                        interactionColor="var(--text-nav-bar-action)"
                    />

                    <div className={styles.tabs}>
                        <NavLinks
                            onClickLink={closeMenu}
                            tooltipPosition="bottom"
                        />
                    </div>

                    <div className={styles.menuButton}>
                        <Button
                            icon
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
                            color="transparent"
                            colorOverrides={{
                                textColor: "inherit",
                                interactionTextColor:
                                    "var(--text-nav-bar-action)",
                            }}
                        >
                            <MenuIcon close={isMenuOpen} />
                        </Button>
                    </div>
                </div>

                <NavMenu open={isMenuOpen} setOpen={setMenuOpen}>
                    <NavLinks
                        onClickLink={closeMenu}
                        tooltipPosition="left"
                    />
                </NavMenu>
            </FocusLock>

            <div className={styles.spacer} />
        </nav>
    );
};

export default Navbar;
