import { useTheme } from "@emotion/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";
import {
  navbarHeight,
  navbarTabs,
  screenSizes,
  socialTabs,
} from "../../Global";
import { transition, transitionDuration } from "../../Theme";
import { ChildrenProps } from "../../Types";
import IconButton from "./IconButton";
import Link from "./Link";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

/** A component for the website's navigation bar */
const Navbar = ({ toggleTheme }: NavbarProps) => {
  const theme = useTheme();

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
          openWithNewTab={tab.openWithNewTab}
          removeUnderline
          interactionColor={theme.colors.accentNavigation}
          onClick={closeMenu}
        >
          {tab.label}
        </Link>
      ))}

      {socialTabs.map((iconTab) => (
        <IconButton
          key={iconTab.label}
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          href={iconTab.href}
          openWithNewTab={iconTab.openWithNewTab}
          aria-label={iconTab.label}
          title={iconTab.label}
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={iconTab.icon} fixedWidth />
        </IconButton>
      ))}

      {toggleTheme && (
        <IconButton
          isTransparent
          interactionTextColor={theme.colors.accentNavigation}
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
          aria-label={`Change to ${
            theme.type === "light" ? "dark" : "light"
          } theme`}
          title={`Change to ${theme.type === "light" ? "dark" : "light"} theme`}
        >
          <FontAwesomeIcon
            icon={theme.type === "light" ? faMoon : faSun}
            fixedWidth
          />
        </IconButton>
      )}
    </>
  );

  return (
    <nav>
      <FocusOn
        onClickOutside={closeMenu}
        onEscapeKey={closeMenu}
        enabled={isMenuOpen}
      >
        <div
          css={{
            padding: "1rem 7.5%",
            position: "fixed",
            top: 0,
            width: "100%",
            height: `${navbarHeight}em`,
            zIndex: 10,
            backgroundColor: theme.colors.backgroundNavigation,
            color: theme.colors.textNavigation,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            gap: "1rem",

            [`@media (min-width: ${screenSizes.md}px)`]: {
              padding: "1rem 2.5rem",
            },
          }}
        >
          <Logo
            href="#top"
            onClick={closeMenu}
            accentColor={theme.colors.accentNavigation}
            interactionColor={theme.colors.accentNavigation}
          />

          <div
            css={{
              display: "none",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",

              // Only show the tabs on larger screens
              [`@media (min-width: ${screenSizes.md}px)`]: {
                display: "flex",
              },
            }}
          >
            <Tabs />
          </div>

          <IconButton
            isTransparent
            interactionTextColor={theme.colors.accentNavigation}
            onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
            css={{
              display: "block",
              [`@media (min-width: ${screenSizes.md}px)`]: {
                display: "none",
              },
            }}
            aria-label={`${isMenuOpen ? "Close" : "Open"} Menu`}
            title={`${isMenuOpen ? "Close" : "Open"} Menu`}
          >
            <MenuIcon close={isMenuOpen} />
          </IconButton>
        </div>

        <NavMenu open={isMenuOpen}>
          <Tabs />
        </NavMenu>
      </FocusOn>
    </nav>
  );
};

/** Props for the navigation bar component */
type NavbarProps = {
  /** A function to change the application theme between light and dark modes */
  toggleTheme?: () => void;
};

export default Navbar;

/**
 * A component for the navigation menu that pops out from the navigation
 * bar on small screens
 */
const NavMenu = ({ children, open }: NavMenuProps) => {
  const theme = useTheme();

  // Keep track of whether the menu is on the screen (opening, open, or closing)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timerId: number;

    if (open) {
      // When the menu is opened, make it visible immediately
      setVisible(true);
    } else {
      // When the menu is closed, wait until it is finished animating off
      // the screen before making it invisible
      timerId = setTimeout(() => setVisible(false), transitionDuration);
    }

    return () => clearTimeout(timerId);
  }, [open]);

  return (
    <div
      css={{
        willChange: "transform",
        transition: transition("transform"),
        position: "fixed",
        right: 0,
        width: "80vw",
        height: `calc(100% - ${navbarHeight}rem)`,
        zIndex: 9,
        padding: "8rem 2.5rem",
        backgroundColor: theme.colors.backgroundNavigationMenu,
        color: theme.colors.textNavigation,
        gap: "1rem",
        flexDirection: "column",
        alignItems: "flex-end", // right align
        justifyContent: "space-evenly",
      }}
      style={{
        // The menu is fully onscreen (not at all translated off) when it is
        // both open and visible
        transform: `translate(${open && visible ? "0" : "100%"})`,

        // Display the menu while it is opening, open, and closing
        display: open || visible ? "flex" : "none",
      }}
    >
      {children}
    </div>
  );
};

/** Props for the navigation menu component */
type NavMenuProps = ChildrenProps & {
  /** Whether the menu is open */
  open: boolean;
};
