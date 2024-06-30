"use client";

import { navbarTabs, socialTabs } from "@/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";
import Button from "../button";
import Logo from "../logo";
import MenuIcon from "../menu-icon";
import NavMenu from "./nav-menu";
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

  // Create the display for the navigation bar tabs
  const Tabs = () => (
    <>
      {navbarTabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          target={tab.openWithNewTab ? "_blank" : undefined}
          rel={tab.openWithNewTab ? "noopener noreferrer" : undefined}
          onClick={closeMenu}
        >
          {tab.label}
        </Link>
      ))}

      {socialTabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          target={tab.openWithNewTab ? "_blank" : undefined}
          rel={tab.openWithNewTab ? "noopener noreferrer" : undefined}
          aria-label={tab.label}
          title={tab.label}
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={tab.icon} fixedWidth />
        </Link>
      ))}
    </>
  );

  return (
    <>
      <nav className={styles.nav}>
        <FocusOn
          onClickOutside={closeMenu}
          onEscapeKey={closeMenu}
          enabled={isMenuOpen}
        >
          <div className={styles.navbar}>
            <div>
              <Logo
                href="/#top"
                onClick={closeMenu}
                accentColor="var(--color-accent-nav)"
                interactionColor="var(--color-accent-nav)"
              />
            </div>

            <div className={styles.tabs}>
              <Tabs />
            </div>

            <div className={styles.menuButton}>
              <Button
                icon
                transparent
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
                title={`${isMenuOpen ? "Close" : "Open"} Menu`}
                interactionTextColor="var(--color-accent-nav)"
              >
                <MenuIcon close={isMenuOpen} />
              </Button>
            </div>
          </div>

          <NavMenu open={isMenuOpen}>
            <Tabs />
          </NavMenu>
        </FocusOn>
      </nav>

      {/* Prevent the navbar from covering the top of the page content */}
      <div className={styles.spacer} />
    </>
  );
};

export default Navbar;
